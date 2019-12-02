import { Percent } from "./percent";
import { Ticket } from "./ticket";

export class Spreadsheet {

  public thirteenthSalary: Percent = new Percent(8.33, this.baseSalary);

  public vacation: Percent = new Percent(2.78, this.baseSalary);
  public incidenceModuleTwo: Percent = new Percent(3.87, this.baseSalary);
  public inss: Percent = new Percent(20, this.baseSalary);
  public educationSalary: Percent = new Percent(2.5, this.baseSalary);
  public sat: Percent = new Percent(1, this.baseSalary);
  public sescAndSesi: Percent = new Percent(1.50, this.baseSalary);
  public senaiAndSenac: Percent = new Percent(1, this.baseSalary);
  public sebrae: Percent = new Percent(0.60, this.baseSalary);
  public incra: Percent = new Percent(0.20, this.baseSalary);
  public fgts: Percent = new Percent(8, this.baseSalary);

  public ticketTransport: Ticket = new Ticket(44, 0, 6);
  public ticketFood: Ticket = new Ticket(22, 0, 0);

  public earlyWarning: Percent = new Percent(0.42, this.baseSalary);
  public fgtsIncidence: Percent = new Percent(0.033, this.baseSalary);
  public fgtsPenalty: Percent = new Percent(0.020, this.baseSalary);
  public earlyWarningWork: Percent = new Percent(0.04, this.baseSalary);
  public incidenceSubTwoAndTwo: Percent = new Percent(0.01, this.baseSalary);
  public fgtsPenaltyWork: Percent = new Percent(0.020, this.baseSalary);

  public discountVacation: Percent = new Percent(8.33, this.baseSalary);
  public legalAbsences: Percent = new Percent(0.82, this.baseSalary);
  public paternityLeave: Percent = new Percent(0.02, this.baseSalary);
  public absenceWorkAccident: Percent = new Percent(0.03, this.baseSalary);
  public maternityLeave: Percent = new Percent(0.61, this.baseSalary);
  public moduleFourSubOneOthers: Percent = new Percent(0, this.baseSalary);
  public restFeedingInterval: Percent = new Percent(0, this.baseSalary);
  public legalAbsencesIntrajorn: Percent = new Percent(0, this.baseSalary);

  public indirectCosts: Percent = new Percent(0, 0);
  public profit: Percent = new Percent(0, 0);
  public pis: Percent = new Percent(0.65, 0);
  public cofins: Percent = new Percent(3, 0);
  public iss: Percent = new Percent(5, 0);

  constructor(
    public active: boolean = false,
    public baseSalary: any = 0,
    public hazardSupplement: any = 0,
    public hazardPay: any = 0,
    public additionalNight: any = 0,
    public reducedNightTimeAdditional: any = 0,
    public compensationBreakdownOthers: any = 0,
    public medicalCare: any = 0,
    public moduleTwoSubThreeOthers: any = 0,
    public uniforms: any = 0,
    public materials: any = 0,
    public equipments: any = 0,
    public moduleFiveOthers: any = 0,
    public created_at: Date = new Date()
  ) { }

  fill(data) {
    for (let i in data) {
      if ('undefined' !== typeof data[i]) {
        if (data[i].percent || data[i].percent === 0) {
          this[i] = new Percent(data[i].percent, data[i].amount);
        } else {
          this[i] = data[i];
        }

      }

      let t = new Ticket();
      t.fill(data.ticketFood)
      this.ticketFood = t;

      t = new Ticket();
      t.fill(data.ticketTransport)
      this.ticketTransport = t;
    }
  }

  init() {
    this.thirteenthSalary.calc(this.baseSalary);

    this.vacation.calc(this.baseSalary);
    this.incidenceModuleTwo.calc(this.baseSalary);
    this.inss.calc(this.baseSalary);
    this.educationSalary.calc(this.baseSalary);
    this.sat.calc(this.baseSalary);
    this.sescAndSesi.calc(this.baseSalary);
    this.senaiAndSenac.calc(this.baseSalary);
    this.sebrae.calc(this.baseSalary);
    this.incra.calc(this.baseSalary);
    this.fgts.calc(this.baseSalary);

    this.ticketTransport.calcTransport(this.baseSalary);
    this.ticketFood.calcTransport(this.baseSalary);

    this.earlyWarning.calc(this.baseSalary);
    this.fgtsIncidence.calc(this.baseSalary);
    this.fgtsPenalty.calc(this.baseSalary);
    this.earlyWarningWork.calc(this.baseSalary);
    this.incidenceSubTwoAndTwo.calc(this.baseSalary);
    this.fgtsPenaltyWork.calc(this.baseSalary);

    this.discountVacation.calc(this.baseSalary);
    this.legalAbsences.calc(this.baseSalary);
    this.paternityLeave.calc(this.baseSalary);
    this.absenceWorkAccident.calc(this.baseSalary);
    this.maternityLeave.calc(this.baseSalary);
    this.restFeedingInterval.calc(this.baseSalary);
    this.legalAbsencesIntrajorn.calc(this.baseSalary);

    this.calcModuleSix();

  }

  sumModuleOne(option = ''): any {
    if (option === 'init') {
      this.init();
    }

    return (
      parseFloat(this.baseSalary)
      + parseFloat(this.hazardSupplement)
      + parseFloat(this.hazardPay)
      + parseFloat(this.additionalNight)
      + parseFloat(this.reducedNightTimeAdditional)
      + parseFloat(this.compensationBreakdownOthers)
    ).toFixed(2);
  }

  sumModuleTwoSubOne(): any {
    return (
      parseFloat(this.thirteenthSalary.amount)
      + parseFloat(this.vacation.amount) +
      + parseFloat(this.incidenceModuleTwo.amount)
    ).toFixed(2);
  }

  sumModuleTwoSubTwo(): any {
    return (
      parseFloat(this.inss.amount)
      + parseFloat(this.educationSalary.amount)
      + parseFloat(this.sat.amount)
      + parseFloat(this.sescAndSesi.amount)
      + parseFloat(this.senaiAndSenac.amount)
      + parseFloat(this.sebrae.amount)
      + parseFloat(this.incra.amount)
      + parseFloat(this.fgts.amount)
    ).toFixed(2);
  }

  sumModuleTwoSubThree(): any {
    return (
      parseFloat(this.ticketTransport.amount)
      + parseFloat(this.ticketFood.amount)
      + parseFloat(this.medicalCare)
      + parseFloat(this.moduleTwoSubThreeOthers)
    ).toFixed(2);
  }

  sumModuleTwo(): any {
    return (
      parseFloat(this.sumModuleTwoSubOne())
      + parseFloat(this.sumModuleTwoSubTwo())
      + parseFloat(this.sumModuleTwoSubThree())
    ).toFixed(2);;
  }

  sumModuleThree(): any {
    return (
      parseFloat(this.earlyWarning.amount)
      + parseFloat(this.fgtsIncidence.amount)
      + parseFloat(this.fgtsPenalty.amount)
      + parseFloat(this.earlyWarningWork.amount)
      + parseFloat(this.incidenceSubTwoAndTwo.amount)
      + parseFloat(this.fgtsPenaltyWork.amount)
    ).toFixed(2);
  }

  sumModuleFourSubOne(): any {
    return (
      parseFloat(this.discountVacation.amount)
      + parseFloat(this.legalAbsences.amount)
      + parseFloat(this.paternityLeave.amount)
      + parseFloat(this.absenceWorkAccident.amount)
      + parseFloat(this.incidenceSubTwoAndTwo.amount)
      + parseFloat(this.maternityLeave.amount)
    ).toFixed(2);
  }

  sumModuleFourSubTwo(): any {
    return (
      parseFloat(this.restFeedingInterval.amount)
      + parseFloat(this.legalAbsencesIntrajorn.amount)
    ).toFixed(2);
  }

  sumModuleFour(): any {
    return (
      parseFloat(this.sumModuleFourSubOne())
      + parseFloat(this.sumModuleFourSubTwo())
    ).toFixed(2);
  }

  sumModuleFive(): any {
    return (
      parseFloat(this.uniforms)
      + parseFloat(this.materials)
      + parseFloat(this.equipments)
      + parseFloat(this.moduleFiveOthers)
    ).toFixed(2);
  }

  sumModuleSix(): any {
    return (
      parseFloat(this.indirectCosts.amount)
      + parseFloat(this.profit.amount)
      + parseFloat(this.pis.amount)
      + parseFloat(this.cofins.amount)
      + parseFloat(this.iss.amount)).toFixed(2);
  }

  sumModulesOneToFive(): any {
    return parseFloat(this.sumModuleOne())
      + parseFloat(this.sumModuleTwo())
      + parseFloat(this.sumModuleThree())
      + parseFloat(this.sumModuleFour())
      + parseFloat(this.sumModuleFive())
  }

  formulaTributes() {
    let tributes = parseFloat(this.pis.percent)
      + parseFloat(this.cofins.percent)
      + parseFloat(this.iss.percent);

    let sumModules =
      + this.sumModulesOneToFive()
      + parseFloat(this.indirectCosts.amount)
      + parseFloat(this.profit.amount)

    let formula = sumModules / (1 - (tributes / 100));

    return formula;

  }

  calcModuleSix() {
    this.indirectCosts.calc(this.sumModulesOneToFive());
    this.profit.calc(this.sumModulesOneToFive());
    this.pis.calc(this.formulaTributes());
    this.cofins.calc(this.formulaTributes());
    this.iss.calc(this.formulaTributes());
  }

  sumAllModules() {
    return (parseFloat(this.sumModulesOneToFive())
      + parseFloat(this.sumModuleSix())
    ).toFixed(2);

  }

}
