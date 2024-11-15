import MenuBar from "./MenuBar";
import SheetsContainer from "./SheetsContainer";
import SheetsNavigator from "./SheetsNavigator";

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
