 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { MedicationviewPage} from '../medicationview/medicationview';
import { MedicationPage} from '../medication/medication';
import { DailyactProvider } from '../../providers/dailyact/dailyact';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
/*
compoenent function
*/
@Component({
  templateUrl: 'medicationadd.html',
})
//page class
export class MedicationaddPage  {
  //variable for the array
 Mname;
    Mil;
    myDate;
    Freq;
    
constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {

}
//save item function
saveItem(){

  let newItem = {
    
    myDate: this.myDate,
    Mname: this.Mname,
    Mil: this.Mil,
    Freq: this.Freq,
    
  };

  this.view.dismiss(newItem);

}


//closs function
close(){
  this.view.dismiss();
}
}
