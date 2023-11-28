import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 1440px;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 80px;
`;

export const TitleStyled = styled.h2`
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 800;
  line-height: 50px;
  text-align: center;
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  /* border: 1px solid rgba(219, 220, 224, 0.5); */

  .ag-theme-alpine {
    --ag-header-height: 44px;
    --ag-header-background-color: #fbfbfb;

    .ag-header-cell {
      font-size: 12px;
    }
  }
  .ag-root-wrapper {
    border: solid 1px;
    border-color: rgba(219, 220, 224, 0.5) !important;
  }
`;

export const CustomImageWrap = styled.div`
  width: 40%;
  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }
`;
