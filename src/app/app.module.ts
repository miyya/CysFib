 /*Ahmed Muneer */ 
 /*import liabraries for the application */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HealthcalPage } from '../pages/healthcal/healthcal';
import { MonitoringPage } from '../pages/monitoring/monitoring';
import { CysfibPage } from '../pages/cysfib/cysfib';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { SelfcarePage } from '../pages/self-care/self-care';
import { DirectoryPage } from '../pages/directory/directory';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { SelfcareguidePage } from '../pages/selfcareguide/selfcareguide';
import { DetailsPage } from '../pages/details/details';
import { MedicationPage } from '../pages/medication/medication';
import { CfgPage } from '../pages/cfg/cfg';
import { MedicationaddPage  } from '../pages/medicationadd/medicationadd';
import { AddPage } from '../pages/add/add';
import {IonicStorageModule} from '@ionic/storage';
import { WhmaddPage } from '../pages/whmadd/whmadd';
import { WhmviewPage} from '../pages/whmview/whmview';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { TodoProvider } from '../providers/todo/todo';
import { WhmPage} from '../pages/whm/whm';
import { DailyactProvider } from '../providers/dailyact/dailyact';
import { MedicationviewPage } from '../pages/medicationview/medicationview';
import { FoodProvider } from '../providers/food/food';
import { FoodaddPage } from '../pages/foodadd/foodadd';
import { FoodvPage} from '../pages/foodv/foodv';
import { FoodPage} from '../pages/food/food';

//NgModule declaration
@NgModule({
  declarations: [
    MyApp,
    MonitoringPage,
    CysfibPage,
    AboutPage,
    TabsPage,
    SelfcarePage,
    DirectoryPage,
    NutritionPage,
    SelfcareguidePage,
    CfgPage,
    DetailsPage,
    HealthcalPage,
    MedicationPage,
    MedicationaddPage ,
    AddPage,
    WhmPage,
   WhmviewPage,
    WhmaddPage,
    MedicationviewPage,
    FoodPage,
    FoodvPage,
    FoodaddPage 
   
  ],
  //imports
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //components for import
  entryComponents: [
    MyApp,
    MonitoringPage,
    CysfibPage,
    AboutPage,
    TabsPage,
    SelfcarePage,
    DirectoryPage,
    NutritionPage,
    SelfcareguidePage,
    CfgPage,
    DetailsPage,
    HealthcalPage,
    MedicationPage,
    MedicationaddPage ,
    AddPage,
    WhmPage,
    WhmviewPage,
    WhmaddPage,
    MedicationviewPage,
    FoodPage,
    FoodvPage,
    FoodaddPage 
    
      
  ],
  //including providers
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    DailyactProvider,
     DailyactProvider,
    FoodProvider
  ]
})
export class AppModule {}
