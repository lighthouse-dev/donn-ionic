import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpendPage } from './spend';

@NgModule({
  declarations: [
    SpendPage,
  ],
  imports: [
    IonicPageModule.forChild(SpendPage),
  ],
})
export class SpendPageModule {}
