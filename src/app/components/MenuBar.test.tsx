import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MenuBar from "./MenuBar";

describe("Menu Bar", () => {
  it("should render the menu bar", () => {
    // Given
    const { container } = render(<MenuBar />);

    // Then
    expect(container.textContent).toContain("MenuBar");
  });

  it.skip("should be fixed", () => {
    // Given
    const { container } = render(<MenuBar />);
    const menuBar = container.querySelector("#menu-bar");

    // Then
    expect(menuBar?.className).toContain("fixed");
  });
});
