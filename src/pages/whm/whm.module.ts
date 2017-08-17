 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhmPage } from './whm';
//NgModule
@NgModule({
  declarations: [
    WhmPage,
  ],
  imports: [
    IonicPageModule.forChild(WhmPage),
  ],
})
export class WhmPageModule {}
