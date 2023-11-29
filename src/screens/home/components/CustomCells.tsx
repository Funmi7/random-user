import { ICellRendererParams } from "ag-grid-community";

import { ReactComponent as RightArrow } from "common/icons/right-arrow.svg";
import { CustomArrowWrap, CustomImageWrap } from "../home.styles";

export const CustomImageCell = (cell: ICellRendererParams) => (
  <CustomImageWrap>
    <img src={cell.value} alt="profile pictures" />
  </CustomImageWrap>
);

export const CustomArrrowCell = () => (
  <CustomArrowWrap>
    <RightArrow />
  </CustomArrowWrap>
);
