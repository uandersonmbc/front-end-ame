import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";

import { Item } from "./types";
import styles from "./styles.module.scss";
import { memo } from "react";

export default memo(function Items({ characters }: Item) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>Nome</div>
        <div className={styles.description}>Descrição</div>
      </div>
      {characters.map((item) => (
        <Link href={`/character/${item.id}`} key={item.id}>
          <a>
            <div className={styles.row}>
              <div className={styles.name}>
                <div>
                  <Image
                    loader={() =>
                      item.attributes.image?.original ??
                      "https://via.placeholder.com/255x361?text=No+image"
                    }
                    src="item.jpg"
                    alt={item.attributes.name}
                    width={255}
                    height={396}
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
});
