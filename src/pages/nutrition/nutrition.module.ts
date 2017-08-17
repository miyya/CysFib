 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutritionPage } from './nutrition';
//NgModule
@NgModule({
  declarations: [
    NutritionPage,
  ],
  imports: [
    IonicPageModule.forChild(NutritionPage),
  ],
})
export class NutritionPageModule {}
