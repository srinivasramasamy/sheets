import { useSelector } from "react-redux";
import { IRootState } from "../../state/store";
import Sheet from "../../types/Sheet";
import SheetsRow from "./SheetsRow";
import ColumnHeaders from "./sheets-header/ColumnHeaders";
import CommonHeader from "./sheets-header/CommonHeader";
import RowHeaders from "./sheets-header/RowHeaders";

function SheetsContainer() {
  const sheet: Sheet = useSelector(
    (state: IRootState) => state.sheet.sheets[state.sheet.selectedSheetIndex]
  );
  return (
    <div
      id={`${sheet.name.toLowerCase()}-container`}
      className="border flex-grow overflow-auto"
    >
      <div className="flex">
        <CommonHeader />
        <ColumnHeaders length={sheet.noOfColumns} />
      </div>
      <div className="flex">
        <RowHeaders length={sheet.noOfRows} />
        <div>
          {sheet.rows.map((row, rowIndex) => (
            <SheetsRow key={rowIndex} row={row} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SheetsContainer;
