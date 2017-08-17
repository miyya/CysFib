 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HealthcalPage} from '../healthcal/healthcal';
import { MedicationPage } from '../medication/medication';
import {  WhmPage } from '../whm/whm';
import { FoodPage} from '../food/food';


//component function
@Component({
  selector: 'monitoring',
  templateUrl: 'monitoring.html'
})
export class MonitoringPage {
//constructor
  constructor(public navCtrl: NavController) {

  }

    Healthcal(){
      this.navCtrl.push(HealthcalPage, {

        val: 'Healthcal'
      })

  }
    //Dily activity page nav
      DailyAct(){
      this.navCtrl.push(MedicationPage, {

        val: 'DailyAct'
      })
  }
   
 //Weight and height monitoring page nav
     Todo(){
      this.navCtrl.push(WhmPage, {

        val: 'Todo'
      })

  }
    //Diatary management page nav
    Fod(){
      this.navCtrl.push(FoodPage, {

        val: ' FoodPage'
      })

  }
   


}
