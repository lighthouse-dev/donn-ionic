import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from './auth/auth.service';
import { ListPage } from '../pages/list/list';
import { SpendPage } from '../pages/spend/spend';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
  ) {
    this.initializeApp();

    this.pages = [
      { title: '지출',   component: SpendPage },
      { title: '지출 리스트',  component: ListPage },
    ];

  }

  initializeApp() {
    console.log('app.component.ts - initializeApp()');
    this.platform.ready().then(() => {
      // 플랫폼 준비되어 있고 플러그인 사용가능.
      // 여기서 필요한 고급 상위 수준의 작업을 수행가능.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // 이 페이지 만 사용하도록 콘텐츠 이동 재설정
    // 이 시나리오에서는 뒤로 버튼을 표시 X
    console.log('app.component.ts - openPage()');
    this.nav.setRoot(page.component);
  }

  ngAfterViewInit() {
    console.log('app.component.ts - ngAfterViewInit()');
  }
}
