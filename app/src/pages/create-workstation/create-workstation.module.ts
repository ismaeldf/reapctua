import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateWorkstationPage } from './create-workstation';

@NgModule({
  declarations: [
    CreateWorkstationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateWorkstationPage),
  ],
})
export class CreateWorkstationPageModule {}
