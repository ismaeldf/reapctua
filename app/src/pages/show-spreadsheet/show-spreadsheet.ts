import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Company } from '../../models/company';
import { Spreadsheet } from '../../models/spreadsheet';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-show-spreadsheet',
  templateUrl: 'show-spreadsheet.html',
})
export class ShowSpreadsheetPage {

  public company = new Company();
  public indexWorkstation;
  public indexSpreadsheet;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.company = this.navParams.get('company');
    this.indexWorkstation = this.navParams.get('indexWorkstation');
    this.indexSpreadsheet = this.navParams.get('indexSpreadsheet');

  }

}
