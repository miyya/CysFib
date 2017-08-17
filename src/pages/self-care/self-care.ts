 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NutritionPage} from '../nutrition/nutrition';
import { SelfcareguidePage } from '../selfcareguide/selfcareguide';
import { CfgPage } from '../cfg/cfg';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'self-care',
  templateUrl: 'self-care.html'
})

//calss of the page
export class SelfcarePage {
//constructor
  constructor(public navCtrl: NavController) {

  }
//nutrition page nav
    load1(){
      this.navCtrl.push(NutritionPage, {

        val: 'Nutrition'
      })

  }
    //selfcare guide page nav
     loadSelfcareguide(){
      this.navCtrl.push(SelfcareguidePage, {

        val: 'Selfcareguide'
      })

  }
    //cf guide page nav
     loadCfg(){
      this.navCtrl.push(CfgPage, {

        val: 'Cfg'
      })

  }


}
