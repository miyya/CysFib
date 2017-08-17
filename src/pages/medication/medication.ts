 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { MedicationaddPage } from '../medicationadd/medicationadd';
import { MedicationviewPage} from '../medicationview/medicationview';
import { DailyactProvider } from '../../providers/dailyact/dailyact';
import { NavController, NavParams,ViewController, ModalController  } from 'ionic-angular';
/*
component function
*/
@Component({
  templateUrl: 'medication.html',
})
//clss for the page
export class MedicationPage {

  //array for the medication items 
   public itemsA = [];
public itemsWithStatusA;
//contructor
constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public dataService:  DailyactProvider) {
   this.dataService.getData().then((dailyacts) => {
 
      if(dailyacts){
        //console.log(todos)
        this.itemsA = JSON.parse(dailyacts); 
             
      }
 
    });
 
  
}
//view load function
  ionViewDidLoad(){
 
  } 
 addItem(){
 
    let addModal = this.modalCtrl.create(MedicationaddPage );
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 //save data function
  saveItem(item){
    this.itemsA.push(item);
    this.dataService.save(this.itemsA);
  }
 //view data function
 viewItem(item){
  this.navCtrl.push(MedicationviewPage, {
    item: item
  });
}
//delete data function
 delete(index: number) {
        this.itemsA.splice(index, 1);
        this.dataService.save(this.itemsA);
    }

}
