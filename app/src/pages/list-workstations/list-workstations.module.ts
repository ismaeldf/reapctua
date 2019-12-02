import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListWorkstationsPage } from './list-workstations';

@NgModule({
  declarations: [
    ListWorkstationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListWorkstationsPage),
  ],
})
export class ListWorkstationsPageModule {}
