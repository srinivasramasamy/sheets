import { render } from "@testing-library/react";
import Tab from "./Tab";

describe("Tab", () => {
  it("should display name", () => {
    // Given
    const tabName: string = "Sheet1";
    const { container } = render(<Tab name={tabName} />);

    // Then
    expect(container.textContent).toContain(tabName);
  });
});
