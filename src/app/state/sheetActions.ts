import { ADD_SHEET, SELECT_SHEET } from "./sheetActionTypes";

export const addSheet = () => {
  return {
    type: ADD_SHEET,
  };
};

export const selectSheet = (selectedSheetIndex: number) => {
  return {
    type: SELECT_SHEET,
    payload: selectedSheetIndex,
  };
};

export type ISheetAction = { type: string; payload?: any };
