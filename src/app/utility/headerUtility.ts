export const columnHeader = (index: number): string => {
  let header: string = "";
  while (index >= 0) {
    const remainder: number = index % 26;
    header = String.fromCharCode(65 + remainder) + header;
    index = Math.floor(index / 26) - 1;
  }
  return header;
};

export const columnHeaders = (length: number): string[] => {
  return new Array(length)
    .fill(null)
    .map((_, index: number) => columnHeader(index));
};

export const rowHeaders = (length: number): string[] => {
  return new Array(length)
    .fill(null)
    .map((_, index: number) => (index + 1).toString());
};
