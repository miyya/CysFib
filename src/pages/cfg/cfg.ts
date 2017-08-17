 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';


 /*components*/
@Component({
  selector: 'cfg',
  templateUrl: 'cfg.html'
})
export class CfgPage {
 /*array items in the list*/
  list: Array<{Name: string, Design: any, Image: any}>;

  constructor(public navCtrl: NavController) {
 /*list*/
    this.list = [
      { Name: 'About Cystic Fibrosis', Design: 'Learn about cystic fibrosis, a genetic lung disorder that affects the pancreas and other organs, and how to treat and live with this chronic disease.', Image:'cys-kid.png' },
      { Name: 'Diagnosis', Design: 'The significant advances in the diagnosis and treatment of CF over the past decade have increased our understanding of the disease, making this an opportune time to reexamine the criteria for a diagnosis of CF. For example, the age of onset of symptoms is increasingly recognized as being highly variable, ranging from prenatal evidence of echogenic bowel to onset of symptoms in late adolescence or adulthood that nevertheless can cause major morbidity and premature mortality.', Image:'diag.png' },
      { Name: 'Testing for Cystic fibrosis', Design: 'Diagnosing CF is a multistep process. A complete diagnostic evaluation should include a newborn screening, a sweat chloride test, a genetic or carrier test and a clinical evaluation at a CF Foundation-accredited care center.', Image:'digno.png' }
      
        ];
    
  }
 /*list item function*/
  public Listitem(l)
  {
    this.navCtrl.push(DetailsPage,{item:l});

  }

}