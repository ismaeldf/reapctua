import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Spreadsheet } from '../../models/spreadsheet';

@IonicPage()
@Component({
  selector: 'page-define-ticket-food-spreadsheet',
  templateUrl: 'define-ticket-food-spreadsheet.html',
})
export class DefineTicketFoodSpreadsheetPage {

  index: string;
  public spreadsheet: Spreadsheet;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.spreadsheet = this.navParams.get('spreadsheet');

    this.calc();
  }

  calc() {
    this.spreadsheet.ticketFood.calcFood();
  }

}
