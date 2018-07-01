import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

import { Spend } from '../../model/spend';
import * as Const from '../../shared/data.service';

// Service
import { AuthService } from '../../app/auth/auth.service';
import { SpendService } from '../../service/spend.service';

// Pages
import { ListPage } from '../list/list';


/**
 * Generated class for the SpendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spend',
  templateUrl: 'spend.html',
})
export class SpendPage {
  const: object =  {
    pocketMoney: Const.spendType.pocketMoney,
    livingCost: Const.spendType.livingCost
  }

  spend: Spend = {
    uid: this.authService.uid,
    spendType: Const.spendType.pocketMoney, // 기본값을 "용돈" 으로 설정.
    payment: null,
    spendDate: new Date().toISOString(),    // 기본값을 오늘날짜로 설정.
    memo: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    private spendService: SpendService
  ) {

  }

  add(spend: Spend) {
    this.spendService.addSpend(spend)
      .then(ref => {
        this,this.navCtrl.push(ListPage);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendPage');
  }
}
