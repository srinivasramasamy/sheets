import Sheet from "../types/Sheet";
import { ISheetAction } from "./sheetActions";
import { ADD_SHEET } from "./sheetActionTypes";

const defaultSheet = new Sheet("Sheet1");
const initialState = {
  sheets: [defaultSheet],
};

const taskReducer = (state = initialState, action: ISheetAction) => {
  switch (action.type) {
    case ADD_SHEET:
      return {
        ...state,
        sheets: [...state.sheets, new Sheet(`Sheet${state.sheets.length + 1}`)],
      };

    default:
      return state;
  }
};

export default taskReducer;
