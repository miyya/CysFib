 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
component function
*/
@Component({
  templateUrl: 'medicationview.html',
})
//class for page
export class MedicationviewPage {
  //varaibles for the array
 myDate;
  Mname;
  Mil;
  Freq;
  //contructor
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //data load for the view
  ionViewDidLoad() {
    this.Mname = this.navParams.get('item').Mname;
    this.Mil = this.navParams.get('item').Mil;
    this.myDate = this.navParams.get('item').myDate;
    this.Freq = this.navParams.get('item').Freq;
  }

}