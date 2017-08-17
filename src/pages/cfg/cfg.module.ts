 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CfgPage } from './cfg';
/*ingModule */
@NgModule({
  declarations: [
    CfgPage,
  ],
  imports: [
    IonicPageModule.forChild(CfgPage),
  ],
})
export class CfgPageModule {}
