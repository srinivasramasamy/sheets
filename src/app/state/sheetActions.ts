import { ADD_SHEET, SELECT_SHEET } from "./sheetActionTypes";

export const addSheet = () => {
  return {
    type: ADD_SHEET,
  };
};

export type IAddSheetAction = { type: string; payload: number };

export const selectSheet = (selectedSheetIndex: number) => {
  return {
    type: SELECT_SHEET,
    payload: selectedSheetIndex,
  };
};

export type ISelectSheetAction = { type: string; payload: number };
