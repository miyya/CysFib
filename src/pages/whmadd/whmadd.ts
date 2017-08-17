 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import {  WhmPage } from '../whm/whm';
import { WhmviewPage} from '../whmview/whmview';
import { TodoProvider } from '../../providers/todo/todo';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-whmadd',
  templateUrl: 'whmadd.html',
})
//export class of the page
export class WhmaddPage {
  //array 
 Height;
    Weight;
    myDate;
//constructor
constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {

}
//save item function
saveItem(){

  let newItem = {
    
    myDate: this.myDate,
    Height: this.Height,
    Weight: this.Weight,
    
  };

  this.view.dismiss(newItem);

}

//closs page function

close(){
  this.view.dismiss();
}
}
