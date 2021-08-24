import { useCallback, useEffect, useState } from "react";

import { PaginationProps } from "./types";

import styles from "./styles.module.scss";

export default function Pagination({
  activePage,
  count,
  totalPerPage,
}: PaginationProps) {
  const [pages, setPages] = useState([{ page: 1, limit: 0 }]);

  const handlePageChange = useCallback(
    (page: number) => {
      const newPages = [];
      newPages.push({ page: 1, limit: 0 });
      const totalPages = Math.ceil(count / totalPerPage);
      newPages.push({ page: totalPages, limit: totalPages * totalPerPage });
      console.log(totalPages, page);
      setPages(newPages);
    },
    [count, totalPerPage]
  );

  useEffect(() => {
    handlePageChange(activePage);
  }, [handlePageChange, activePage]);

  return (
    <div className={styles.container}>
      <div className={styles.triangleLeft}></div>
      {pages.map((item: any) => {
        return (
          <div
            className={`${styles.item} ${
              activePage === item.page && styles.itemActive
            }`}
            key={item.page.toString()}
            onClick={() => handlePageChange(item.page)}
          >
            {item.page}
          </div>
        );
      })}
      <div className={styles.triangleRight}></div>
    </div>
  );
}
