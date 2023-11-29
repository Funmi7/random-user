import React, { FC } from "react";

import { ReactComponent as NextIcon } from "common/icons/next-caret.svg";
import { ReactComponent as PreviousIcon } from "common/icons/prev-caret.svg";
import { PaginationContainer } from "./paginationSyles";
import { DOTS, usePagination } from "./usePagination";

type PaginationProps = {
  totalTransactions: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  indexOfFirstTransaction: number;
  indexOfLastTransaction: number;
  pageSize: number;
};
const siblingCount = 1;

const Pagination: FC<PaginationProps> = ({
  totalTransactions,
  paginate,
  currentPage,
  indexOfFirstTransaction,
  indexOfLastTransaction,
  pageSize,
}) => {
  const paginationRange: (string | number)[] | undefined = usePagination({
    currentPage,
    totalTransactions,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }
  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  const onNext = () => {
    paginate(currentPage + 1);
  };

  const onPrevious = () => {
    paginate(currentPage - 1);
  };

  return (
    <PaginationContainer
      firstDisable={currentPage === 1}
      lastDisable={currentPage === lastPage}
    >
      <div className="dashboard__pagination__left-side">
        <p className="dashboard__pagination__show-text">Showing: </p>
        <p className="dashboard__pagination__total-count">
          {indexOfFirstTransaction} -{" "}
          {indexOfLastTransaction >= totalTransactions
            ? totalTransactions
            : indexOfLastTransaction}{" "}
          of {totalTransactions}
        </p>
      </div>
      <div className="dashboard__pagination__right-side">
        <>
          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <p key={pageNumber}>&#8230;</p>;
            }
            return (
              <p
                key={pageNumber}
                className={
                  pageNumber === currentPage
                    ? "dashboard__pagination__count-active"
                    : "dashboard__pagination__count-inactive"
                }
                onClick={() => paginate(Number(pageNumber))}
              >
                {pageNumber}
              </p>
            );
          })}
        </>
        <span className="dashboard__pagination__previous" onClick={onPrevious}>
          <PreviousIcon />
        </span>
        <span className="dashboard__pagination__next" onClick={onNext}>
          <NextIcon />
        </span>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
