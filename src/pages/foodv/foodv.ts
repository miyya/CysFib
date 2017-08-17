 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// food items view detail page

@IonicPage()
@Component({
  selector: 'page-foodv',
  templateUrl: 'foodv.html',
})
export class FoodvPage {
//variable declaration
 myDate;
  Dname;
  Time;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//ionviewdidload function
  ionViewDidLoad() {
    this.Dname = this.navParams.get('item').Dname;
    this.Time = this.navParams.get('item').Time;
    this.myDate = this.navParams.get('item').myDate;
  }

}