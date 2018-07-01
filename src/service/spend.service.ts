import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Spend } from '../model/spend';

@Injectable()
export class SpendService {

  private noteListRef = this.db.list<Spend>('spend');

  constructor(private db: AngularFireDatabase) { }

  // 지출 리스트 호출
  getSpendList() {
    return this.noteListRef;
  }

  // 지출 등록
  addSpend(note: Spend) {
    return this.noteListRef.push(note);
  }

}
