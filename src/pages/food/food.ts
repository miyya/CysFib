 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { FoodaddPage } from '../foodadd/foodadd';
import { FoodvPage} from '../foodv/foodv';
import { FoodProvider} from '../../providers/food/food';
import { NavController, NavParams,ViewController, ModalController  } from 'ionic-angular';


 /*component calling */
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
  
 /*array */
public itemsF = [];
public itemsWithStatus;

constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public dataService: FoodProvider) {
   this.dataService.getData().then((foods) => {
 
      if(foods){
        //console.log(todos)
        this.itemsF = JSON.parse(foods); 
             
      }
 
    });
 
  
}
//view data function
  ionViewDidLoad(){
 
  } 
  //add itemn function
 addItem(){
 
    let addModal = this.modalCtrl.create(FoodaddPage );
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 //save function
  saveItem(item){
    this.itemsF.push(item);
    this.dataService.save(this.itemsF);
  }
 //view item function
 viewItem(item){
  this.navCtrl.push(FoodvPage, {
    item: item
  });
}
//delete items function
 delete(index: number) {
        this.itemsF.splice(index, 1);
        this.dataService.save(this.itemsF);
    }

}
