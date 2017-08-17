 /*Ahmed Muneer */ 
 /*import liabraries */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

//injectable
@Injectable()
export class FoodProvider {
//constructor
 constructor(public storage: Storage){
    
     }
    //get data
     getData() {
       return this.storage.get('foods');  
     }
      //save data
     save(data){
      let newData = JSON.stringify(data);
      this.storage.set('foods', newData);
    }

}