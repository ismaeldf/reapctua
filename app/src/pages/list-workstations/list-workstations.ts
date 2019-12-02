import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Company } from '../../models/company';
import { Workstation } from '../../models/workstations';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-list-workstations',
  templateUrl: 'list-workstations.html',
})
export class ListWorkstationsPage {

  public company = new Company();

  constructor(
    public alertCtrl: AlertController,
    public modalController: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: CompanyProvider
  ) {
    this.company = this.navParams.get('company');

  }

  showWorkstation(index) {
    this.navCtrl.push('ListSpreadsheetPage', { company: this.company, indexWorkstation: index });
  }

  async onCreateWorkstation() {
    const modal = await this.modalController.create('CreateWorkstationPage');

    modal.onDidDismiss(workstation => {
      if (workstation) {
        this.company.workstations.push(workstation);
        this.provider.update(this.company)
      }
    });

    modal.present();
  }

  onDelete(index) {
    this.alertCtrl.create({
      title: `Do you want to delete this workstation?`,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.company.workstations.splice(index, 1);
            this.provider.update(this.company);
          }
        },
        'No'
      ]
    }).present();
  }

}
