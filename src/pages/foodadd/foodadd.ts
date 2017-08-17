 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { FoodvPage} from '../foodv/foodv';
import { FoodProvider} from '../../providers/food/food';
import { FoodPage} from '../food/food';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';

//add diatary items page
@IonicPage()
@Component({
  selector: 'page-foodadd',
  templateUrl: 'foodadd.html',
})
export class FoodaddPage {

//variables declaration
  Dname;
    Time;
    myDate;
    
constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {

}
//save item function
saveItem(){

  let newItem = {
    
    myDate: this.myDate,
    Dname: this.Dname,
    Time: this.Time,
    
  };
//view dismiss function
  this.view.dismiss(newItem);

}


//close window fucntion
close(){
  this.view.dismiss();
}
}
