import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Company } from '../../models/company';
import { Spreadsheet } from '../../models/spreadsheet';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-list-spreadsheet',
  templateUrl: 'list-spreadsheet.html',
})
export class ListSpreadsheetPage {

  public company = new Company();
  public indexWorkstation;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public provider: CompanyProvider
  ) {
    this.company = this.navParams.get('company');
    this.indexWorkstation = this.navParams.get('indexWorkstation');
  }

  onCreateSpreadsheet() {
    let spreadsheet = new Spreadsheet();

    this.company
      .workstations[this.indexWorkstation]
      .spreadsheets
      .push(spreadsheet);

    let index = this.company
      .workstations[this.indexWorkstation]
      .spreadsheets.length;

    this.provider.update(this.company);

    this.showSpreadsheet(--index);
  }

  onDelete(index) {
    this.alertCtrl.create({
      title: `Do you want to delete this spreadsheet?`,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.company
              .workstations[this.indexWorkstation]
              .spreadsheets.splice(index, 1);

            this.provider.update(this.company);
          }
        },
        'No'
      ]
    }).present();
  }

  showSpreadsheet(index) {
    this.navCtrl.push('ShowSpreadsheetPage', { company: this.company, indexWorkstation: this.indexWorkstation, indexSpreadsheet: index });
  }

  changeActive($event, index) {
    this.company.workstations[this.indexWorkstation].spreadsheets.map((s, i) => {
      this.company.workstations[this.indexWorkstation].spreadsheets[i].active = false;
    });

    this.company.workstations[this.indexWorkstation].spreadsheets[index].active = $event;

    this.provider.update(this.company);

  }

}
