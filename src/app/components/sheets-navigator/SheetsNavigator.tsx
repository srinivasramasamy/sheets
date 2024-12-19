import { Plus } from "react-feather";
import Tab from "./Tab";

function SheetsNavigator() {
  return (
    <div id="sheets-navigator" className="border flex">
      <Plus id="add-sheets" />
      <Tab name={"Sheet1"} />
    </div>
  );
}

export default SheetsNavigator;
