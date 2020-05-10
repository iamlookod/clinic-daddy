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
  hn: string;
  symb: string;
  diag: string;
  medicine: string;
  price: number;
  note: string;
}
