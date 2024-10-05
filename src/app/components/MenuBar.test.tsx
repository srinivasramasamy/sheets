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
});
