import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowSpreadsheetPage } from './show-spreadsheet';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ShowSpreadsheetPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ShowSpreadsheetPage),
  ],
  exports: [
    ShowSpreadsheetPage
  ]
})
export class ShowSpreadsheetPageModule { }
