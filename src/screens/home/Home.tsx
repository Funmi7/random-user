import { useState, memo, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ICellRendererParams, GridReadyEvent } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import "ag-grid-community/styles/ag-theme-material.css";
import { TableType, UserType } from "common/types";
import { HomeWrapper, TableContainer, TitleStyled } from "./home.styles";

const CustomImageCell = (cell: ICellRendererParams) => (
  // <CustomImageWrap>
  <img src={cell.value} alt="profile pictures" />
  // </CustomImageWrap>
);

const Home = () => {
  const [rowData, setRowData] = useState<TableType[]>([]);

  const [columnDefs] = useState<ColDef[]>([
    { field: "picture", cellRenderer: memo(CustomImageCell) },
    { field: "name" },
    { field: "email" },
    { field: "gender" },
    { field: "phone" },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch("https://randomuser.me/api/?format=PrettyJSON&results=50")
      .then((res) => res.json())
      .then((data) => {
        const resultData = data.results.map((user: UserType) => ({
          picture: user.picture.medium,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          gender: user.gender,
          phone: user.phone,
        }));
        setRowData(resultData);
      });
  }, []);

  return (
    <HomeWrapper>
      <TitleStyled>User Details</TitleStyled>
      <TableContainer>
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "100%" }}
        >
          <AgGridReact<TableType>
            rowData={rowData}
            columnDefs={columnDefs}
            animateRows={true}
            onGridReady={onGridReady}
            defaultColDef={defaultColDef}
            domLayout="autoHeight"
            rowHeight={72}
          ></AgGridReact>
        </div>
      </TableContainer>
    </HomeWrapper>
  );
};

export default Home;
