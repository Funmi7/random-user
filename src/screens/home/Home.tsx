import { useState, memo, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridReadyEvent, CellClickedEvent } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { TableType, UserType } from "common/types";
import { HomeWrapper, TableContainer, TitleStyled } from "./home.styles";
import DetailsModal from "screens/modal/DetailsModal";
import { CustomArrrowCell, CustomImageCell } from "./components/CustomCells";

const Home = () => {
  const [rowData, setRowData] = useState<TableType[]>([]);
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<TableType | null>(null);

  const gridRef = useRef<AgGridReact<TableType>>(null);

  const [columnDefs] = useState<ColDef[]>([
    { field: "picture", cellRenderer: memo(CustomImageCell) },
    { field: "name" },
    { field: "email" },
    { field: "gender" },
    { field: "phone" },
    { cellRenderer: memo(CustomArrrowCell) },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      resizable: false,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch("https://randomuser.me/api/?format=PrettyJSON&results=100")
      .then((res) => res.json())
      .then((data) => {
        const resultData = data.results.map((user: UserType) => ({
          picture: user.picture.thumbnail,
          biggerPicture: user.picture.medium,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          gender: user.gender,
          phone: user.phone,
          country: user.location.country,
        }));
        setRowData(resultData);
      });
  }, []);

  const cellClickedListener = useCallback((event: CellClickedEvent) => {
    if (event.column.getColId() === "0") {
      setOpenDetailsModal(true);
      setUserDetails(event.data);
    }
  }, []);

  return (
    <HomeWrapper className="animated fadeInUp">
      <TitleStyled>User Details</TitleStyled>
      <TableContainer className="animated fadeInUp">
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "100%" }}
        >
          <AgGridReact<TableType>
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            animateRows={true}
            onGridReady={onGridReady}
            defaultColDef={defaultColDef}
            domLayout="autoHeight"
            rowSelection={"single"}
            onCellClicked={cellClickedListener}
            rowHeight={72}
            pagination={true}
            paginationPageSize={20}
          ></AgGridReact>
        </div>
      </TableContainer>
      {openDetailsModal && (
        <DetailsModal
          closeModal={() => setOpenDetailsModal(false)}
          userDetails={userDetails}
        />
      )}
    </HomeWrapper>
  );
};

export default Home;
