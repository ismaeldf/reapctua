import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowResumePage } from './show-resume';

@NgModule({
  declarations: [
    ShowResumePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowResumePage),
  ],
})
export class ShowResumePageModule {}
