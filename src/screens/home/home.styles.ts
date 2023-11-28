import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 1440px;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 80px;
`;

export const TitleStyled = styled.h2`
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 800;
  line-height: 50px;
  text-align: center;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;

  .ag-theme-alpine {
    --ag-header-height: 44px;
    --ag-header-background-color: #fbfbfb;
    --ag-background-color: #fff;
    --ag-data-color: #000000;
    --ag-row-hover-color: #f9f9f9;
    --ag-odd-row-background-color: #fff;
    --ag-borders: solid 1px;
    --ag-border-color: rgba(219, 220, 224, 0.5);
    --ag-font-family: "Poppins", sans-serif;
    --ag-border-radius: 10px;
    --ag-row-height: 72px;

    .ag-header-cell {
      font-size: 12px;
    }
    .ag-header {
      font-family: "Poppins", sans-serif;
    }
  }
  .ag-root-wrapper {
    border-radius: 10px;
  }
`;

export const CustomImageWrap = styled.div`
  padding: 10px;
  img {
    border-radius: 5px;
  }
`;
