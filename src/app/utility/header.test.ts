import { columnHeader } from "./header";

describe("Header", () => {
  it("should return the correct column header", () => {
    expect(columnHeader(0)).toBe("A");
    expect(columnHeader(1)).toBe("B");
    expect(columnHeader(25)).toBe("Z");
    expect(columnHeader(26)).toBe("AA");
    expect(columnHeader(27)).toBe("AB");
  });
});
