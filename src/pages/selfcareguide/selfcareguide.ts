 /*Ahmed Muneer */ 
 /*import liabraries */
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
//component fucntion
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'selfcareguide.html',
})

//class of the page
export class SelfcareguidePage {
//informtion array any type
 information: any[];

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams) {
  //getting localdata from json file 
  let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })


    console.log(navParams.get('val'));
  }
//toggleswection
   toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 //toggleItem
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

//toggledidload function
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfcareguidePage');
  }




}
