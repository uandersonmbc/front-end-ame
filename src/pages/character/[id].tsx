import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import ReactHtmlParser from "react-html-parser";

import { getCharacter } from "services/characters";

import styles from "styles/character.module.scss";

import { Header } from "components";

import { Character as Doideira } from "types/characters";

interface CharacterProps {
  character: Doideira;
}

export default function Character({ character }: CharacterProps): JSX.Element {
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
          content={character.attributes.image.original}
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
          content={character.attributes.image.original}
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
            <img
              src={character.attributes.image.original}
              alt={character.attributes.canonicalName}
            />
          </div>
          <div className={styles.info}>
            <h1>{character.attributes.canonicalName}</h1>
            <p>{ReactHtmlParser(character.attributes.description)}</p>
          </div>
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
