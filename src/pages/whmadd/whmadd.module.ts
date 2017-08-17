 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhmaddPage } from './whmadd';
//ngModule function
@NgModule({
  declarations: [
    WhmaddPage,
  ],
  imports: [
    IonicPageModule.forChild(WhmaddPage),
  ],
})
export class WhmaddPageModule {}
