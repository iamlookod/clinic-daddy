export interface MembersDetail {
  hn: string;
  name: string;
  address: string;
  birtdate: Date;
  disease: string;
  allegric: string;
}

export interface MembersDetailForm {
  _id: string;
  symb: string;
  diag: string;
  medicines: Array<string>;
  price: number;
  note: string;
}
