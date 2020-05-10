/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface MembersDetail extends Document {
  readonly hn: string;
  readonly diag: string;
  readonly medicine: string;
  readonly note: string;
  readonly price: string;
  readonly symb: string;
}

// export interface Query {
//   sort: {
//     field: string;
//     orderBy: 'asc' | 'desc';
//   };
// }
