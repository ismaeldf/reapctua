import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Company } from '../../models/company';
import { Util } from '../../models/util';

@IonicPage()
@Component({
  selector: 'page-show-resume',
  templateUrl: 'show-resume.html',
})
export class ShowResumePage {

  public company = new Company();
  public helper = new Util();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {

    this.company = this.navParams.get('company');
    this.company.mountResume();

    console.log(this.company.resume)
  }

}
