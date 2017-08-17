 /*Ahmed Muneer */ 
 /*import liabraries */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodvPage } from './foodv';
//ngModile function
@NgModule({
  declarations: [
    FoodvPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodvPage),
  ],
})
export class FoodvPageModule {}
