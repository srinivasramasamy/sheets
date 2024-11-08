import MenuBar from "./MenuBar";
import SheetsContainer from "./SheetsContainer";
import SheetsNavigator from "./SheetsNavigator";

function SheetsHome() {
  return (
    <div className="flex-col">
      <MenuBar />
      <SheetsContainer />
      <SheetsNavigator />
    </div>
  );
}

export default SheetsHome;
