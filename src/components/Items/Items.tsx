import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { Item } from "./types";
import styles from "./styles.module.scss";

export default function Items({ characters }: Item) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>Nome</div>
        <div className={styles.description}>Descrição</div>
      </div>
      {characters.map((item) => (
        <Link href="/characters" key={item.id}>
          <a>
            <div className={styles.row}>
              <div className={styles.name}>
                <div>
                  <img
                    src={item.attributes.image?.original}
                    alt={item.attributes.name}
                  />
                </div>
                <span>{item.attributes.name}</span>
              </div>
              <div className={styles.description}>
                <p>{ReactHtmlParser(item.attributes.description)}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
