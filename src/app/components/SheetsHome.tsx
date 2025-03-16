import MenuBar from "./MenuBar";
import SheetsContainer from "./sheets-container/SheetsContainer";
import SheetsNavigator from "./sheets-navigator/SheetsNavigator";

function SheetsHome() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <MenuBar />
      <SheetsContainer />
      <SheetsNavigator />
    </div>
  );
}

export default SheetsHome;
