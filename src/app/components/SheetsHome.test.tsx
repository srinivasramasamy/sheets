import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../state/store";
import SheetsHome from "./SheetsHome";

describe("Sheets Home", () => {
  it("should render menu bar", () => {
    // Given
    const { container } = render(
      <Provider store={store}>
        <SheetsHome />
      </Provider>
    );

    // Then
    expect(container.textContent).toContain("MenuBar");
  });

  it("should render sheets navigator", () => {
    // Given
    const { container } = render(
      <Provider store={store}>
        <SheetsHome />
      </Provider>
    );

    // Then
    expect(container.querySelector("#sheets-navigator")).toBeTruthy();
  });
});
