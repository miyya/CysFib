 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NutritionPage} from '../nutrition/nutrition';
import { SelfcareguidePage } from '../selfcareguide/selfcareguide';
import { CfgPage } from '../cfg/cfg';

import { LoadingController } from 'ionic-angular';
 /*component */
@Component({
  selector: 'tutorial-page',
  templateUrl: 'cysfib.html'
})
 /*page class */
export class CysfibPage {
 /*slides array */
  slides = [
    {
      title: "Nutrient Know-How",
      description: "Like everyone else, guys and girls who have CF should eat a balanced diet that includes plenty of fruits and veggies",
      image: "assets/img/Know-How.jpg",
      io:"load1()",
      po: "1"
    },

    {
      title: "Testing for Cystic fibrosis",
      description: "Diagnosing CF is a multistep process. A complete diagnostic evaluation should include a newborn screening",
      image: "assets/img/digno.png",
      po: "2"
    },
    {
     title: "Diagnosis",
      description: "The significant advances in the diagnosis and treatment of CF over the past decade have increased our ",
      image: "assets/img/diag.png",
      po: "3"
    }

   
      
  ];
 /*constructor */
 constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

 
    
  }
    
  
 /*loadq functon for navigation */
  load1(){
      this.navCtrl.push(NutritionPage, {

        val: 'Nutrition'
      })

  }
     /*loadSelfguide functon for navigation */
     loadSelfcareguide(){
      this.navCtrl.push(SelfcareguidePage, {

        val: 'Selfcareguide'
      })

  }
     /*loadCfg functon for navigation */
     loadCfg(){
      this.navCtrl.push(CfgPage, {

        val: 'Cfg'
      })

  }


}




