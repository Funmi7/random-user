import React, { FC } from "react";

import { ReactComponent as NextIcon } from "common/icons/next-caret.svg";
import { ReactComponent as PreviousIcon } from "common/icons/prev-caret.svg";
import {
  NextButtonWrap,
  PaginationContainer,
  PaginationCountWrap,
  PaginationLeftWrap,
  PaginationRightWrap,
  PreviousButtonWrap,
} from "./paginationSyles";
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
    <PaginationContainer>
      <PaginationLeftWrap>
        <h5>Showing: </h5>
        <p>
          {indexOfFirstTransaction} -{" "}
          {indexOfLastTransaction >= totalTransactions
            ? totalTransactions
            : indexOfLastTransaction}{" "}
          of {totalTransactions}
        </p>
      </PaginationLeftWrap>

      <PaginationRightWrap>
        <>
          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <p key={pageNumber}>&#8230;</p>;
            }
            return (
              <PaginationCountWrap
                key={pageNumber}
                activePage={pageNumber === currentPage}
                onClick={() => paginate(Number(pageNumber))}
              >
                {pageNumber}
              </PaginationCountWrap>
            );
          })}
        </>
        <PreviousButtonWrap
          onClick={onPrevious}
          firstDisable={currentPage === 1}
        >
          <PreviousIcon />
        </PreviousButtonWrap>
        <NextButtonWrap onClick={onNext} lastDisable={currentPage === lastPage}>
          <NextIcon />
        </NextButtonWrap>
      </PaginationRightWrap>
    </PaginationContainer>
  );
};

export default Pagination;
