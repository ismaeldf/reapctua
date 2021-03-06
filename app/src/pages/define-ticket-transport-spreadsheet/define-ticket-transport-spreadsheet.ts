import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Spreadsheet } from '../../models/spreadsheet';

@IonicPage()
@Component({
  selector: 'page-define-ticket-transport-spreadsheet',
  templateUrl: 'define-ticket-transport-spreadsheet.html',
})
export class DefineTicketTransportSpreadsheetPage {

  index: string;
  public spreadsheet: Spreadsheet;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.spreadsheet = this.navParams.get('spreadsheet');

    this.calc();
  }

  calc() {
    this.spreadsheet.ticketTransport.calcTransport(this.spreadsheet.baseSalary);
  }

}
