 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {NutritionPage} from '../nutrition/nutrition';
import { SelfcareguidePage } from '../selfcareguide/selfcareguide';
import { CfgPage } from '../cfg/cfg';

//health calculator page ts file
@Component({
  selector: 'healthcal',
  templateUrl: 'healthcal.html'
})
export class HealthcalPage {
  // array for data (total, firstnumber, lastnumber and view)
   total : any ;
    firstNumber : any  ;
    secondNumber : any  ;
    view : any;


   

  //construction
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

 
    
  }
  //addthefunction is fo the the calculation .. fomular used to get the health result is x=Height/(weight)^2
   addThemFunction () {

        let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;

        let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
      let mpm =  firstNumber / (secondNumber *( secondNumber));
//if condition to catagorise for each result
        if (0.0346 < mpm && mpm < 0.0561){

          this.total = 'Normal weight : Please maintain your diatary guidelines';
        console.log("clicked!");
        this.view = 'n';
        } else if (0.0346 > mpm){
          this.total = 'Over weighted: Please Follow the Diatary Guidelines, exercises and loose weight ' ;
        console.log("clicked!");
        this.view = 'o';
        } else if (mpm > 0.0561){

          this.total = 'Under weight: Please Follow the Diatary Guidelines and Gain More weight :' ;
        console.log("clicked!");
        this.view = 'u';

        }

       
    }

    //get instant total
    getInstantTotal() {

        let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;

        let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
        let mpm =  firstNumber + secondNumber;
        if (mpm === 2){

return firstNumber + secondNumber ;
        }

        
        //load1 for navigation
    }
  load1(){
      this.navCtrl.push(NutritionPage, {

        val: 'Nutrition'
      })

  }
    //navigation function to go self care guide page
     loadSelfcareguide(){
      this.navCtrl.push(SelfcareguidePage, {

        val: 'Selfcareguide'
      })

  }
    //navigation function to go CF guide page
     loadCfg(){
      this.navCtrl.push(CfgPage, {

        val: 'Cfg'
      })

  }


}