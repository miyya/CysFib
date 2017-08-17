import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfcareguidePage } from './selfcareguide';

@NgModule({
  declarations: [
    SelfcareguidePage,
  ],
  imports: [
    IonicPageModule.forChild(SelfcareguidePage),
  ],
})
export class SelfcareguidePageModule {}
