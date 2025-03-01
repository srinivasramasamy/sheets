import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../state/store";
import SheetsContainer from "./SheetsContainer";

describe("Sheets Container", () => {
  it("should render the sheets container", () => {
    // Given
    const { container } = render(
      <Provider store={store}>
        <SheetsContainer />
      </Provider>
    );

    // Then
    expect(container.textContent).toContain("Sheet1");
  });
});
