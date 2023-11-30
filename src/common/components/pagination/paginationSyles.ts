import styled, { css } from "styled-components";

type PrevButtonWrapProps = {
  firstDisable: boolean;
};

type NextButtonWrapProps = {
  lastDisable: boolean;
};

type PaginationCountWrapProps = {
  activePage: boolean;
};

export const PaginationContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: 383px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PaginationLeftWrap = styled.div`
  display: flex;
  align-items: center;

  h5 {
    font-weight: bold;
    font-size: 11px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #091540;
  }
  p {
    display: flex;
    align-items: center;
    margin-left: 23.93px;
    font-weight: bold;
    font-size: 11px;
    line-height: 24px;
    text-transform: uppercase;
    color: #8b90a0;
  }
`;

export const PaginationRightWrap = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 11px;
    line-height: 18px;
    display: flex;
    margin-right: 10px;
  }

  @media (max-width: 383px) {
    margin-top: 10px;
  }
`;

export const PaginationCountWrap = styled.p<PaginationCountWrapProps>`
  color: #23bc6a;
  cursor: pointer;

  ${({ activePage }) =>
    activePage &&
    css`
      color: #8b90a0;
      cursor: auto;
    `}
`;

export const PreviousButtonWrap = styled.span<PrevButtonWrapProps>`
  margin-left: 23.59px;
  margin-right: 17.23px;
  cursor: ${({ firstDisable }) => (firstDisable ? "not-allowed" : "pointer")};
  opacity: ${({ firstDisable }) => (firstDisable ? "0.1" : "1")};
`;

export const NextButtonWrap = styled.span<NextButtonWrapProps>`
  cursor: ${({ lastDisable }) => (lastDisable ? "not-allowed" : "pointer")};
  opacity: ${({ lastDisable }) => (lastDisable ? "0.1" : "1")};
`;
