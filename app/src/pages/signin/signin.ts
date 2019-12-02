import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  signinForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public platform: Platform,
    public providerAuth: AuthProvider,
    public alertCtrl: AlertController
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

  }

  onSubmit(): void {
    this.providerAuth.post({
      password: this.signinForm.value.password,
      email: this.signinForm.value.email,
    })
      .subscribe((session) => {
        console.log(session)
        this.providerAuth.createSession(session);
        this.navCtrl.setRoot('HomePage');
      }, (err) => {
        console.log(err)
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.error[0].message,
          buttons: ['OK']
        });
        alert.present();
      });
  }

  onSignup(): void {
    this.navCtrl.push('SignupPage');
  }

}
