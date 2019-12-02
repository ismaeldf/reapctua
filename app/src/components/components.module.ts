import { NgModule } from '@angular/core';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [SpreadsheetComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [SpreadsheetComponent,
  ]
})
export class ComponentsModule { }
