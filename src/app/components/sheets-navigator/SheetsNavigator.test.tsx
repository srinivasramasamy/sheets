import store from "@/app/state/store";
import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
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

  it("should add new sheet tab", () => {
    // Given
    const { container } = render(
      <Provider store={store}>
        <SheetsNavigator />
      </Provider>
    );
    const addSheetButton = container.querySelector("#add-sheets");

    // When
    act(() => {
      addSheetButton?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // Then
    expect(container.textContent).toContain("Sheet2");
  });
});
