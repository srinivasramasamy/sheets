import store from "@/app/state/store";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import SheetsNavigator from "./SheetsNavigator";

describe("Sheets Navigator", () => {
  it("should render the sheets navigator", () => {
    // Given
    const { container } = render(
      <Provider store={store}>
        <SheetsNavigator />
      </Provider>
    );

    // Then
    expect(container.querySelector("#sheets-navigator")).toBeTruthy();
  });

  it("should have add sheets button", () => {
    // Given
    const { container } = render(
      <Provider store={store}>
        <SheetsNavigator />
      </Provider>
    );

    // Then
    expect(container.querySelector("#add-sheets")).toBeTruthy();
  });

  it("should have default tab", () => {
    // Given
    const defaultTabName: string = "Sheet1";
    const { container } = render(
      <Provider store={store}>
        <SheetsNavigator />
      </Provider>
    );

    // Then
    expect(container.textContent).toContain(defaultTabName);
  });
});
