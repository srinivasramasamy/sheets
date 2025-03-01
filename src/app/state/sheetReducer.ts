import Sheet from "../types/Sheet";
import { IAddSheetAction, ISelectSheetAction } from "./sheetActions";

import { ADD_SHEET, SELECT_SHEET } from "./sheetActionTypes";

const defaultSheet: Sheet = new Sheet("Sheet1", 100, 26);
const initialState = {
  selectedSheetIndex: 0,
  sheets: [defaultSheet],
};

const taskReducer = (
  state = initialState,
  action: ISelectSheetAction | IAddSheetAction
) => {
  switch (action.type) {
    case ADD_SHEET:
      return {
        ...state,
        sheets: [
          ...state.sheets,
          new Sheet(`Sheet${state.sheets.length + 1}`, 100, 26),
        ],
      };

    case SELECT_SHEET:
      return {
        ...state,
        selectedSheetIndex: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
