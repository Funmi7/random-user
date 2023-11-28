import { useState, memo, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  ICellRendererParams,
  GridReadyEvent,
  RowClickedEvent,
} from "ag-grid-community";

import { ReactComponent as RightArrow } from "common/icons/right-arrow.svg";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { TableType, UserType } from "common/types";
import {
  HomeWrapper,
  TableContainer,
  TitleStyled,
  CustomImageWrap,
} from "./home.styles";
import DetailsModal from "screens/modal/DetailsModal";

const CustomImageCell = (cell: ICellRendererParams) => (
  <CustomImageWrap>
    <img src={cell.value} alt="profile pictures" />
  </CustomImageWrap>
);

const CustomArrrowCell = () => (
  <div>
    <RightArrow />
  </div>
);

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

  const cellClickedListener = useCallback((event: RowClickedEvent) => {
    setOpenDetailsModal(true);
    setUserDetails(event.data);
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch("https://randomuser.me/api/?format=PrettyJSON&results=50")
      .then((res) => res.json())
      .then((data) => {
        const resultData = data.results.map((user: UserType) => ({
          picture: user.picture.thumbnail,
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
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            animateRows={true}
            onGridReady={onGridReady}
            defaultColDef={defaultColDef}
            domLayout="autoHeight"
            rowSelection={"single"}
            onRowClicked={cellClickedListener}
            rowHeight={72}
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
