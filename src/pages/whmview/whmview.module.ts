 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhmviewPage } from './whmview';
//ngModule function
@NgModule({
  declarations: [
    WhmviewPage,
  ],
  imports: [
    IonicPageModule.forChild(WhmviewPage),
  ],
})
export class WhmviewPageModule {}
