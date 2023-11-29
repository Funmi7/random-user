import styled from "styled-components";

type PaginationContainerProps = {
  firstDisable: boolean;
  lastDisable: boolean;
};
export const PaginationContainer = styled.section<PaginationContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  .dashboard__pagination__left-side {
    display: flex;
    align-items: center;
  }

  .dashboard__pagination__show-text {
    font-weight: bold;
    font-size: 11px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #091540;
  }
  .dashboard__pagination__total-count {
    display: flex;
    align-items: center;
    margin-left: 23.93px;
    font-weight: bold;
    font-size: 11px;
    line-height: 24px;
    text-transform: uppercase;
    color: #8b90a0;
  }
  .dashboard__pagination__right-side {
    display: flex;
    align-items: center;

    .dashboard__pagination__previous {
      margin-left: 23.59px;
      margin-right: 17.23px;
      cursor: ${({ firstDisable }) =>
        firstDisable ? "not-allowed" : "pointer"};
      opacity: ${({ firstDisable }) => (firstDisable ? "0.1" : "1")};
    }
    .dashboard__pagination__next {
      cursor: ${({ lastDisable }) => (lastDisable ? "not-allowed" : "pointer")};
      opacity: ${({ lastDisable }) => (lastDisable ? "0.1" : "1")};
    }
    p {
      font-weight: bold;
      font-size: 11px;
      line-height: 18px;
      display: flex;
      margin-right: 10px;
    }
    .dashboard__pagination__count-inactive {
      color: #23bc6a;
      cursor: pointer;
    }
    .dashboard__pagination__count-active {
      color: #8b90a0;
    }
  }
  @media (max-width: 383px) {
    flex-direction: column;
    align-items: flex-start;

    .dashboard__pagination__right-side {
      margin-top: 10px;
    }
  }
`;
