import Head from "next/head";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { getCharacter } from "services/characters";

import styles from "styles/character.module.scss";

import { Header } from "components";

export default function Character(props: any): JSX.Element {
  console.log(props);
  return (
    <>
      <Head>
        <title>{"Test"}</title>

        <meta name="description" content={""} />
        <meta name="keywords" content={""} />
        {/*
        <meta property="og:image" content={cdn + "/w500" + movie.poster_path} />
        <meta
          property="og:image"
          content={cdn + "/w780" + movie.backdrop_path}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={movie.overview} />
        <meta property="og:site_name" content={movie.title} />

        <meta
          property="twitter:image"
          content={cdn + "/w500" + movie.backdrop_path}
        />
        <meta property="twitter:image:width" content="780" />
        <meta property="twitter:image:height" content="439" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={movie.title} />
        <meta property="twitter:title" content={movie.title} />
        <meta property="twitter:description" content={movie.overview} /> */}
      </Head>
      <div className={styles.container}>
        <Header />
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
  console.log(id);
  if (id) {
    const { data } = await getCharacter(id);
    try {
      return {
        props: {
          id: id,
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
