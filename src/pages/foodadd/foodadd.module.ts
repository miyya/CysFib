 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodaddPage } from './foodadd';
//NgModule function
@NgModule({
  declarations: [
    FoodaddPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodaddPage),
  ],
})
export class FoodaddPageModule {}
