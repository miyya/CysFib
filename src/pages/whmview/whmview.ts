 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//ionic page function
@IonicPage()
@Component({
  selector: 'page-whmview',
  templateUrl: 'whmview.html',
})
//export class of the page
export class WhmviewPage {
//array
 myDate;
  Height;
  Weight;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//load data to view items details
  ionViewDidLoad() {
    this.Height = this.navParams.get('item').Height;
    this.Weight = this.navParams.get('item').Weight;
    this.myDate = this.navParams.get('item').myDate;
  }

}