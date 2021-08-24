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
      const limit = totalPages - 2 > 4 ? page + 4 : page + totalPages - 2;
      console.log(limit);

      // for (let i = page; i < limit; i++) {
      // newPages.push({ page: i, limit: i * totalPerPage });
      // }

      if (totalPages > 1) {
        newPages.push({ page: totalPages, limit: totalPages * totalPerPage });
      }
      setPages(newPages);
    },
    [count, totalPerPage]
  );

  useEffect(() => {
    handlePageChange(activePage);
  }, [handlePageChange, activePage]);

  return (
    <div className={styles.container}>
      <div className={styles.triangleLeft} onClick={() => {}} />
      {pages.map((item: any) => {
        return (
          <div
            className={`${styles.item} ${
              activePage === item.page && styles.itemActive
            }`}
            key={item.page.toString()}
            // onClick={() => handlePageChange(item.page)}
          >
            {item.page}
          </div>
        );
      })}
      <div className={styles.triangleRight} onClick={() => {}} />
    </div>
  );
}
