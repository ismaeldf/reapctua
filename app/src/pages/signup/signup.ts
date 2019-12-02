import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;
  btnRenewPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public platform: Platform,
    public providerUser: UserProvider,
    public providerAuth: AuthProvider,
    public alertCtrl: AlertController

  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(): void {
    this.providerUser.post({
      name: this.signupForm.value.name,
      password: this.signupForm.value.password,
      email: this.signupForm.value.email,
    })
      .subscribe((user) => {
        console.log(user)

        this.providerAuth.post({
          password: this.signupForm.value.password,
          email: this.signupForm.value.email,
        })
          .subscribe((session) => {
            console.log(session)
            this.providerAuth.createSession(session);
            this.navCtrl.setRoot('HomePage');
          }, (err) => {
            console.log(err)
          });

      }, (err) => {
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.error.message,
          buttons: ['OK']
        });
        alert.present();
      });
  }

  onSignin(): void {
    this.navCtrl.push('SigninPage');
  }

}
