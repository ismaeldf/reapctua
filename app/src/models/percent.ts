
export class Percent {

  constructor(
    public percent?: any,
    public amount?: any,
  ) { }

  public calc(baseSalary) {
    this.amount = ((parseFloat(baseSalary) * parseFloat(this.percent)) / 100).toFixed(2);
  }

}
