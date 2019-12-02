
export class Ticket {

  constructor(
    public amountTicket?: any,
    public value?: any,
    public percent?: any,
    public amount?: any,
  ) {
  }

  fill(data) {
    for (let i in data) {
      if ('undefined' !== typeof data[i]) {
        this[i] = data[i];
      }
    }
  }

  public calcTransport(baseSalary) {
    this.amount = (
      (parseFloat(this.amountTicket) * parseFloat(this.value))
      -
      ((parseFloat(baseSalary) * parseFloat(this.percent)) / 100)
    ).toFixed(2);
  }

  public calcFood() {
    this.amount = (
      (parseFloat(this.amountTicket) * parseFloat(this.value))
      -
      (parseFloat(this.percent) * parseFloat(this.amountTicket))
    ).toFixed(2);
  }

}
