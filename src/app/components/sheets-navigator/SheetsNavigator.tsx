"use client";
import { addSheet } from "@/app/state/sheetActions";
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
    <div id="sheets-navigator" className="border flex">
      <Plus id="add-sheets" onClick={(e) => dispatch(addSheet())} />
      {sheets.map((sheet) => (
        <Tab key={sheet.name} name={sheet.name} />
      ))}
    </div>
  );
}

export default SheetsNavigator;
