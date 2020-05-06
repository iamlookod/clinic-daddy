/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface MembersDetail extends Document {
  readonly hn: string;
  readonly symb: string;
  readonly diag: string;
  readonly medicine: Array<string>;
  readonly price: number;
  readonly note: string;
}

// export interface Query {
//   sort: {
//     field: string;
//     orderBy: 'asc' | 'desc';
//   };
// }
