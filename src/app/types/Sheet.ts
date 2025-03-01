import Row from "./Row";

export default class Sheet {
  name: string;
  rows: Row[];

  constructor(name: string, noOfRows: number, noOfCells: number) {
    this.name = name;
    this.rows = new Array(noOfRows).fill(null).map(() => new Row(noOfCells));
  }
}
