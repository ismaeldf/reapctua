import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, AlertController } from 'ionic-angular';
import { Company } from '../../models/company';
import { Workstation } from '../../models/workstations';
import { Spreadsheet } from '../../models/spreadsheet';
import { CompanyProvider } from '../../providers/company/company';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  companies: Company[] = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public modalController: ModalController,
    public provider: CompanyProvider,
    public providerAuth: AuthProvider
  ) {

  }

  ionViewDidLoad() {
    this.provider.get()
      .subscribe((res: Company[]) => {
        res.map(company => {
          let c = new Company();
          c.fill(company);
          this.companies.push(c);

          console.log(this.companies)
        });
      }, (err) => {
        console.log(err)
      });
  }

  showWorkStations(company) {
    this.navCtrl.push('ListWorkstationsPage', { company: company });
  }

  showResume(company) {
    this.navCtrl.push('ShowResumePage', { company: company });
  }

  onCreateCompany() {
    const modal = this.modalController.create('CreateCompanyPage');

    modal.onDidDismiss(company => {
      if (company) {
        this.provider.post(company)
          .subscribe((res: Company) => {
            company._id = res._id;
            this.companies.push(company);
          }, (err) => {
            console.log(err)
          });
      }
    });

    modal.present();
  }

  onDelete(index, _id) {
    this.alertCtrl.create({
      title: `Do you want to delete this company?`,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.provider.delete(_id)
              .subscribe(() => {
                this.companies.splice(index, 1);
              }, (err) => {
                console.log(err)
              });
          }
        },
        'No'
      ]
    }).present();
  }

  logoff() {
    this.providerAuth.cleanSession();
    this.navCtrl.setRoot('SigninPage');
  }
}
