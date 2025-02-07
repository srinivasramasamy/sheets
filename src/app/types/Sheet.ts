import Row from "./Row";

export default class Sheet {
  name: string;
  rows: Row[];

  constructor(name: string, rows: Row[] = []) {
    this.name = name;
    this.rows = rows;
  }
}
