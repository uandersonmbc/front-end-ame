import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import axios from "services/api";
import styles from "styles/home.module.scss";
import { Character } from "types/characters";
import { Items, Pagination, Header } from "components";
import LoadingOverlay from "react-loading-overlay";

export default function Home(): JSX.Element {
  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchCharacters = useCallback(async (params: any = {}) => {
    try {
      setLoading(true);
      const paramsToString = new URLSearchParams(params).toString();
      const { data } = await axios.get(`/api/characters?${paramsToString}`);
      setCharacters(data.data);
      setCount(data.meta.count);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onChangePage = useCallback(
    (page: any) => {
      setPage(page.page);
      name
        ? fetchCharacters({
            "filter[name]": name,
            "page[limit]": 10,
            "page[offset]": page.limit,
          })
        : fetchCharacters({ "page[limit]": 10, "page[offset]": page.limit });
    },
    [setPage, fetchCharacters, name]
  );

  function onSubmit(event: any) {
    if (event.key === "Enter") {
      setPage(1);
      name ? fetchCharacters({ "filter[name]": name }) : fetchCharacters();
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Buscando os personagens"
      className={styles.loading}
    >
      <div>
        <Head>
          <title>Busca Kitsu</title>
        </Head>

        <main className={styles.container}>
          <div className={styles.headers}>
            <Header />

            <div className={styles.searchForm}>
              <p className={styles.textLabel}>Nome do Personagem</p>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={onSubmit}
              />
            </div>
          </div>
          <Items characters={characters} />
          <Pagination
            count={count}
            activePage={page}
            totalPerPage={10}
            onChange={onChangePage}
          />
        </main>
      </div>
    </LoadingOverlay>
  );
}
