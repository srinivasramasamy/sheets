import Row from "./Row";

export default class Sheet {
  name: string;
  rows: Row[];
  noOfColumns: number;

  constructor(name: string, noOfRows: number, noOfColumns: number) {
    this.name = name;
    this.noOfColumns = noOfColumns;
    this.rows = new Array(noOfRows).fill(null).map(() => new Row(noOfColumns));
  }
}
