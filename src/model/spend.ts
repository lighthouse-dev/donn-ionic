export interface Spend {
  uid: string;       // 유저ID
  spendType: number; // 지출 타입
  payment: number;   // 금액
  spendDate: any;    // 지출 날짜
  memo: string;      // 메모
}
