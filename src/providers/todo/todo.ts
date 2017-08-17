 /*Ahmed Muneer */ 
 /*import liabraries */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

//injectable
@Injectable()
export class TodoProvider {
//contructor
 constructor(public storage: Storage){
    
     }
    //get data function
     getData() {
       return this.storage.get('todos');  
     }
      //save data function
     save(data){
      let newData = JSON.stringify(data);
      this.storage.set('todos', newData);
    }

}