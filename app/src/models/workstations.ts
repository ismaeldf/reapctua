import { Spreadsheet } from "./spreadsheet";

export class Workstation {

  constructor(
    public name?: string,
    public employees?: number,
    public spreadsheets?: Array<Spreadsheet>,
  ) {
    this.employees = 1;
    this.spreadsheets = [];
  }

  public fill(data: Workstation) {

    this.name = data.name;
    this.employees = data.employees;

    data.spreadsheets.map(spreadsheet => {
      let s = new Spreadsheet();
      s.fill(spreadsheet);
      this.spreadsheets.push(s);
    })
  }

}
