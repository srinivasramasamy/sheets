"use client";
import Sheet from "@/app/types/Sheet";
import { Plus } from "react-feather";
import { useSelector } from "react-redux";
import Tab from "./Tab";

function SheetsNavigator() {
  const sheets: Sheet[] = useSelector((state: any) => state.sheet.sheets);

  return (
    <div id="sheets-navigator" className="border flex">
      <Plus id="add-sheets" />
      {sheets.map((sheet) => (
        <Tab key={sheet.name} name={sheet.name} />
      ))}
    </div>
  );
}

export default SheetsNavigator;
