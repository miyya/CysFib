 /*Ahmed Muneer */ 
 /*import liabraries */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
//injectable
@Injectable()
export class DailyactProvider {
  //constructor
  constructor(public storage: Storage){
    
     }
    //get data function
     getData() {
       return this.storage.get('dailyacts');  
     }
      //save data function
     save(data){
      let newData = JSON.stringify(data);
      this.storage.set('dailyacts', newData);
    }

}