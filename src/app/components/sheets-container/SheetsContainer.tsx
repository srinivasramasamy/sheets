import { useSelector } from "react-redux";
import { IRootState } from "../../state/store";
import Sheet from "../../types/Sheet";
import SheetsCell from "./SheetsCell";

function SheetsContainer() {
  const sheet: Sheet = useSelector(
    (state: IRootState) => state.sheet.sheets[state.sheet.selectedSheetIndex]
  );
  return (
    <div
      id={`${sheet.name.toLowerCase()}-container`}
      className="border flex-grow overflow-auto"
    >
      {sheet.rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.cells.map((cell, cellIndex) => (
            <SheetsCell key={cellIndex} value={cell.value} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SheetsContainer;
