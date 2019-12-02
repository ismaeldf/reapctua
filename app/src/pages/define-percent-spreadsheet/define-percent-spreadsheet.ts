import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Spreadsheet } from '../../models/spreadsheet';

@IonicPage()
@Component({
  selector: 'page-define-percent-spreadsheet',
  templateUrl: 'define-percent-spreadsheet.html',
})
export class DefinePercentSpreadsheetPage {

  index: string;
  attribute: string;
  isMethod: boolean;
  public spreadsheet: Spreadsheet;

  constructor(
    public events: Events,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.index = this.navParams.get('index');
    this.spreadsheet = this.navParams.get('spreadsheet');
    this.spreadsheet = this.navParams.get('spreadsheet');
    this.attribute = this.navParams.get('attribute');
    this.isMethod = this.navParams.get('isMethod');

    this.calc();
  }

  calc() {
    if (this.isMethod)
      this.spreadsheet[this.index].calc(this.spreadsheet[this.attribute]());
    else
      this.spreadsheet[this.index].calc(this.spreadsheet[this.attribute]);

    this.events.publish('calcModuleSix');
  }

}
