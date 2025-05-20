import { useSelector } from "react-redux";
import { IRootState } from "../../state/store";
import Sheet from "../../types/Sheet";
import SheetsRow from "./SheetsRow";

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
        <SheetsRow key={rowIndex} row={row} />
      ))}
    </div>
  );
}

export default SheetsContainer;
