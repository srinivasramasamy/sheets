import { columnHeader, columnHeaders } from "./headerUtility";

describe("Header", () => {
  it("should return the correct column header", () => {
    expect(columnHeader(0)).toBe("A");
    expect(columnHeader(1)).toBe("B");
    expect(columnHeader(25)).toBe("Z");
    expect(columnHeader(26)).toBe("AA");
    expect(columnHeader(27)).toBe("AB");
  });

  it("should return the column headers for a given length", () => {
    // Given
    const length: number = 5;
    const expectedHeaders: string[] = ["A", "B", "C", "D", "E"];

    // When
    const headers: string[] = columnHeaders(length);

    // Then
    expect(headers).toEqual(expectedHeaders);
  });
});
