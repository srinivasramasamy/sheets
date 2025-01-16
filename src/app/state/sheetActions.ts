import { ADD_SHEET } from "./sheetActionTypes";

export const addSheet = () => {
  return {
    type: ADD_SHEET,
  };
};

export type ISheetAction = { type: string };
