import { useState } from "react";

import styles from "./styles.module.scss";

export default function Pagination(props: any) {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.triangleLeft}></div>
      {[1, 2, 3, 4].map((item: any) => {
        return (
          <div className={styles.item} key={item}>
            {item}
          </div>
        );
      })}
      <div className={styles.triangleRight}></div>
    </div>
  );
}
