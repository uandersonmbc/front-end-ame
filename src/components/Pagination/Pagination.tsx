import { usePagination } from "hooks/usePagination";
import { PaginationProps, PaginationState } from "./types";

import styles from "./styles.module.scss";
import { memo, useEffect, useState } from "react";

export default memo(function Pagination({
  activePage,
  count,
  totalPerPage,
  onChange,
}: PaginationProps) {
  const [pages, setPages] = useState<Array<PaginationState>>([]);

  const paginationRange = usePagination({
    currentPage: activePage,
    totalCount: count,
    siblingCount: 1,
    pageSize: totalPerPage,
  });

  useEffect(() => {
    function updatePages() {
      const newPages: Array<PaginationState> = [];

      paginationRange?.forEach((page, index) => {
        newPages.push({
          page,
          key: page.toString() + index,
          limit: typeof page === "number" ? (page - 1) * totalPerPage : 0,
        });
      });

      setPages(newPages);
    }
    updatePages();
  }, [paginationRange, activePage, count, totalPerPage]);

  function onPrevClick() {
    const prevPage = activePage - 1;
    if (prevPage > 0) {
      onChange({
        page: prevPage,
        key: prevPage.toString(),
        limit: prevPage * totalPerPage,
      });
    }
  }

  function onNextClick() {
    const nextPage = activePage + 1;
    if (nextPage <= count) {
      onChange({
        page: nextPage,
        key: nextPage.toString(),
        limit: nextPage * totalPerPage,
      });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.triangleLeft} onClick={onPrevClick} />
      {pages.map((item) => {
        return (
          <button
            disabled={typeof item.page !== "number" || activePage === item.page}
            className={`${styles.item} ${
              activePage === item.page && styles.itemActive
            }`}
            key={item.key}
            onClick={() => onChange(item)}
          >
            {item.page}
          </button>
        );
      })}
      <div className={styles.triangleRight} onClick={onNextClick} />
    </div>
  );
});
