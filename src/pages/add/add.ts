 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';

 /*Add data page*/
@Component({
    templateUrl: 'add.html'
})
 /*Add page class*/

export class AddPage {
     /*Array strings for list and item*/
    public todoList: Array<string>;
    public todoItem: string;
 
    constructor(private nav: NavController) {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        this.todoItem = "";
    }
  /*save function*/
    save() {
        if(this.todoItem != "") {
            this.todoList.push(this.todoItem);
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            this.nav.pop();
        }
    }
 
}