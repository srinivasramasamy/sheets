export const columnHeader = (index: number) => {
  let header = "";
  while (index >= 0) {
    const remainder = index % 26;
    header = String.fromCharCode(65 + remainder) + header;
    index = Math.floor(index / 26) - 1;
  }
  return header;
};
