export default class Cell {
  rowIndex: number;
  columnIndex: number;
  isSelected: boolean;
  value: string;

  constructor(
    rowIndex: number,
    columnIndex: number,
    isSelected: boolean,
    value: string
  ) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.isSelected = isSelected;
    this.value = value;
  }
}
