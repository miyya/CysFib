 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { WhmaddPage } from '../whmadd/whmadd';
import { WhmviewPage} from '../whmview/whmview';
import { TodoProvider } from '../../providers/todo/todo';
import { NavController, NavParams,ViewController, ModalController  } from 'ionic-angular';

//component function
@Component({
  selector: 'page-whm',
  templateUrl: 'whm.html',
})
//export class of the page
export class WhmPage {
  //arrray for items ansd status
public items = [];
public itemsWithStatus;

constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public dataService: TodoProvider) {
   this.dataService.getData().then((todos) => {
 
      if(todos){
        //console.log(todos)
        this.items = JSON.parse(todos); 
             
      }
 
    });
 
  
}
//ionic view load function
  ionViewDidLoad(){
 
  } 
  //add item function
 addItem(){
 
    let addModal = this.modalCtrl.create(WhmaddPage );
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 //save item function
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 //view item function
 viewItem(item){
  this.navCtrl.push(WhmviewPage, {
    item: item
  });
}
//delete item function 
 delete(index: number) {
        this.items.splice(index, 1);
        this.dataService.save(this.items);
    }

}
