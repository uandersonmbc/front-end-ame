import Head from "next/head";
import Image from "next/image";

import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import ReactHtmlParser from "react-html-parser";

import axios from "services/api";
import { getCharacter } from "services/characters";

import styles from "styles/character.module.scss";

import { Header, Media } from "components";

import { Character as C } from "types/characters";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { RelationshipsData, Media as M } from "types/media";

interface CharacterProps {
  character: C;
}

export default function Character({ character }: CharacterProps): JSX.Element {
  const [media, setMedia] = useState<Array<M>>([]);
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    async function getMedia() {
      try {
        const { data }: AxiosResponse<RelationshipsData> = await axios.get(
          `/api/characters/${character.id}?limit=${page}`
        );
        setMedia(data.included);
      } catch (error) {
        console.log(error);
      }
    }
    getMedia();
  }, [page, character.id]);

  return (
    <>
      <Head>
        <title>{character.attributes.canonicalName}</title>

        <meta name="description" content={character.attributes.description} />
        <meta
          name="keywords"
          content={character.attributes.otherNames.join(",")}
        />

        <meta
          property="og:image"
          content={
            character.attributes.image?.original ??
            "https://via.placeholder.com/255x361?text=No+image"
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={character.attributes.canonicalName}
        />
        <meta
          property="og:description"
          content={character.attributes.description}
        />
        <meta
          property="og:site_name"
          content={character.attributes.canonicalName}
        />

        <meta
          property="twitter:image"
          content={
            character.attributes.image?.original ??
            "https://via.placeholder.com/255x361?text=No+image"
          }
        />
        <meta property="twitter:image:width" content="780" />
        <meta property="twitter:image:height" content="439" />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:creator"
          content={character.attributes.canonicalName}
        />
        <meta
          property="twitter:title"
          content={character.attributes.canonicalName}
        />
        <meta
          property="twitter:description"
          content={character.attributes.description}
        />
      </Head>
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              loader={() =>
                character.attributes.image?.original ??
                "https://via.placeholder.com/255x361?text=No+image"
              }
              src="character.jpg"
              alt={character.attributes.canonicalName}
              width={255}
              height={361}
            />
          </div>
          <div className={styles.info}>
            <h1>{character.attributes.canonicalName}</h1>
            <p>{ReactHtmlParser(character.attributes.description)}</p>
          </div>
        </div>

        <div className={styles.media}>
          {media.map((item) => (
            <Media key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const id = params?.id?.toString();
  if (id) {
    const { data } = await getCharacter(id);
    try {
      return {
        props: {
          character: data.data,
        },
        revalidate: 3600,
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
