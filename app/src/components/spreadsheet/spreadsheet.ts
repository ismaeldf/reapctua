import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalController, NavController, Events } from 'ionic-angular';
import { Company } from '../../models/company';
import { CompanyProvider } from '../../providers/company/company';

@Component({
  selector: 'spreadsheet',
  templateUrl: 'spreadsheet.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetComponent implements OnInit {

  @Input() company: Company;
  @Input() indexWorkstation: number;
  @Input() indexSpreadsheet: number;

  segment = 'one';

  constructor(
    public events: Events,
    public navCtrl: NavController,
    public modalController: ModalController,
    public provider: CompanyProvider
  ) {
    this.events.unsubscribe('calcModuleSix')
    this.events.subscribe('calcModuleSix', () => {
      this.company.workstations[this.indexWorkstation].spreadsheets[this.indexSpreadsheet].calcModuleSix();
    })
  }

  ngOnInit() {
    this.company.workstations[this.indexWorkstation].spreadsheets[this.indexSpreadsheet].init();
  }

  async editTicketTransport() {
    this.navCtrl.push('DefineTicketTransportSpreadsheetPage', {
      spreadsheet: this.company.workstations[this.indexWorkstation].spreadsheets[this.indexSpreadsheet]
    });
  }

  async editTicketFood() {
    this.navCtrl.push('DefineTicketFoodSpreadsheetPage', {
      spreadsheet: this.company.workstations[this.indexWorkstation].spreadsheets[this.indexSpreadsheet]
    });
  }

  editPercent(index, attribute = 'baseSalary', isMethod = false) {
    this.navCtrl.push('DefinePercentSpreadsheetPage', {
      index: index,
      attribute: attribute,
      isMethod: isMethod,
      spreadsheet: this.company.workstations[this.indexWorkstation].spreadsheets[this.indexSpreadsheet]
    });
  }

  changeSegment() {
    if (this.segment === 'six') {
      this.events.publish('calcModuleSix');
    }
  }

  changed() {
    this.provider.update(this.company);
  }

}
