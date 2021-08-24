import Head from "next/head";
import { useEffect, useState } from "react";

import axios from "services/api";
import styles from "styles/home.module.scss";
import { Character } from "types/characters";
import { Items, Pagination } from "components";
export default function Home(): JSX.Element {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  async function fetchCharacters(params: any = {}) {
    try {
      const paramsToString = new URLSearchParams(params).toString();
      const { data } = await axios.get(`/api/characters?${paramsToString}`);
      setCharacters(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <Head>
        <title>Busca Kitsu</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.header}>
          <span>Busca Kitsu Teste Front-End</span>
          <span>Uanderson Nunes</span>
        </div>

        <div className={styles.searchForm}>
          <p className={styles.textLabel}>Nome do Personagem</p>
          <input type="text" />
        </div>
        <Items characters={characters} />
        <Pagination count={50} activePage={1} totalPerPage={10} />
      </main>
    </div>
  );
}
