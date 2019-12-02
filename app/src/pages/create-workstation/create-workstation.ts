import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Workstation } from '../../models/workstations';

@IonicPage()
@Component({
  selector: 'page-create-workstation',
  templateUrl: 'create-workstation.html',
})
export class CreateWorkstationPage {

  workstation = new Workstation();

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create() {
    if (this.workstation.name && this.workstation.employees) {
      this.viewCtrl.dismiss(this.workstation);
    }
  }

}
