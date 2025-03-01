import Sheet from "./Sheet";

jest.mock("./Row");

describe("Sheet", () => {
  it("should create a sheet with the given name", () => {
    // Given
    const sheet = new Sheet("Test Sheet", 3, 5);

    // Then
    expect(sheet.name).toBe("Test Sheet");
  });

  it("should create the correct number of rows", () => {
    // Given
    const noOfRows: number = 3;
    const sheet = new Sheet("Test Sheet", noOfRows, 5);

    // Then
    expect(sheet.rows.length).toBe(noOfRows);
  });
});
