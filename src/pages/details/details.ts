 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

 /*component */
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})

 /*page class */
export class DetailsPage {
 
 /*variable */
  item;

  constructor(public navCtrl: NavController, public navParams:NavParams) {
      this.item = navParams.data.item;
  }

 /*ionViewLoad */
  ionViewDidLoad() {
    console.log('Hello DetailsPage Page');
  }

}