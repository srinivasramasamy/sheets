import { useSelector } from "react-redux";
import { IRootState } from "../state/store";
import Sheet from "../types/Sheet";

function SheetsContainer() {
  const sheet: Sheet = useSelector(
    (state: IRootState) => state.sheet.sheets[state.sheet.selectedSheetIndex]
  );
  return (
    <div id="sheets-container" className="border flex-grow">
      {sheet.name}
    </div>
  );
}

export default SheetsContainer;
