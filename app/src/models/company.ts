import { Workstation } from "./workstations";
import { Spreadsheet } from "./spreadsheet";
export class Company {

  public resume = [];

  constructor(
    public _id?: number,
    public name?: string,
    public workstations?: Array<Workstation>,
    public created_at?: Date
  ) {
    this.workstations = [];
  }

  public fill(data: Company) {

    this._id = data._id;
    this.name = data.name;
    this.created_at = data.created_at;

    data.workstations.map(workstation => {
      let w = new Workstation();
      w.fill(workstation);
      this.workstations.push(w);
    })
  }

  private getWorkstationsActives() {
    let actives = [];

    this.workstations.map(workstation => {
      workstation.spreadsheets.map(spreadsheet => {

        if (spreadsheet.active) {
          actives.push({
            workstation: workstation,
            spreadsheet: spreadsheet
          })
        }

      })
    })

    return actives;
  }

  private calcCostByEmployees() {
    let workstations = this.getWorkstationsActives();

    workstations.map((value, i) => {
      let spreadsheet: Spreadsheet = value.spreadsheet;
      spreadsheet.init();

      workstations[i]['monthByEmployess'] = parseFloat(spreadsheet.sumAllModules()) * value.workstation.employees;
      workstations[i]['yearByEmployess'] = workstations[i]['monthByEmployess'] * 12;
    });

    this.resume['workstations'] = workstations;
  }

  private calcCostByCompany() {
    this.resume['monthByCompany'] = 0;
    this.resume['yearByCompany'] = 0;

    this.resume['workstations'].map(value => {
      this.resume['monthByCompany'] += value['monthByEmployess'];
      this.resume['yearByCompany'] += value['yearByEmployess'];
    });
  }

  public mountResume() {
    this.calcCostByEmployees();
    this.calcCostByCompany();
  }

}
