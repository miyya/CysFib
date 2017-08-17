 /*Ahmed Muneer */ 
 /*import liabraries */
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

 /*component */
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})

 /*page class */
export class DirectoryPage {
 
 /*information array declaration */
 information: any[];

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams) {
  /*local data integration */
  let localData = http.get('assets/directory.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })


    console.log(navParams.get('val'));
  }
/*togglesection functions */
   toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 /*toggileItem function */
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

/*ionicViewLoad function */
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfcareguidePage');
  }




}
