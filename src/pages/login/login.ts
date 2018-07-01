import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../../app/auth/auth.service';
import { SpendPage } from '../spend/spend';
import { User } from '../../model/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private toast: ToastController
  ) {

  }

  // 로그인 처리.
  async login(user: User) {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password)
      .catch(err => { // 로그인 실패.
        this.toast.create({
          message: `로그인ID, 비밀번호 불일치.`,
          duration: 3000
        }).present();
      });

    // 로그인 성공.
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        // 지출 입력 페이지로 이동.
        this.navCtrl.setRoot(SpendPage);

        // 로그인 성공 메세지 출력.
        this.afAuth.authState.subscribe(data => {
          if (data && data.email && data.uid) {
            this.toast.create({
              message: `Welcome to APP_NAME, ${data.email}`,
              duration: 3000
            }).present();
          } else {
            this.toast.create({
              message: `Could not find authentication details.`,
              duration: 3000
            }).present();
          }

        });
      }
    });
  }

  // 로그아웃 처리.
  logout() {
    this.afAuth.auth.signOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
