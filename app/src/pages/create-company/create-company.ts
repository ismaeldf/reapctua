import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Company } from '../../models/company';

@IonicPage()
@Component({
  selector: 'page-create-company',
  templateUrl: 'create-company.html',
})
export class CreateCompanyPage {

  company = new Company();

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create() {
    if (this.company.name) {
      this.viewCtrl.dismiss(this.company);
    }
  }

}
