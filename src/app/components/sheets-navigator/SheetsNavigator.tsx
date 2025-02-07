"use client";
import { addSheet, selectSheet } from "@/app/state/sheetActions";
import { IRootState } from "@/app/state/store";
import Sheet from "@/app/types/Sheet";
import { Plus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import Tab from "./Tab";

function SheetsNavigator() {
  const dispatch = useDispatch();
  const sheets: Sheet[] = useSelector(
    (state: IRootState) => state.sheet.sheets
  );

  return (
    <div id="sheets-navigator" className="border flex items-center px-2">
      <div className="p-2">
        <Plus id="add-sheets" onClick={() => dispatch(addSheet())} />
      </div>
      {sheets.map((sheet: Sheet, index: number) => (
        <Tab
          key={sheet.name}
          name={sheet.name}
          onClick={() => dispatch(selectSheet(index))}
        />
      ))}
    </div>
  );
}

export default SheetsNavigator;
