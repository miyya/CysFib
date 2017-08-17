 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { MonitoringPage } from '../monitoring/monitoring';
import { AboutPage } from '../about/about';
import { CysfibPage } from '../cysfib/cysfib';
import { SelfcarePage } from '../self-care/self-care';
import { DirectoryPage } from '../directory/directory';
import {  WhmPage } from '../whm/whm';


//components page funcion
@Component({
  templateUrl: 'tabs.html'
})
//export class of the page
export class TabsPage {
//tab nav for the pages
  tab1Root = CysfibPage;
  tab2Root = MonitoringPage;
  tab3Root = AboutPage;
  tab4Root = SelfcarePage;
  tab5Root = DirectoryPage;



  constructor() {

  }
}
