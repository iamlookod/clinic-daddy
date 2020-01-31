/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface Members extends Document {
  readonly hn: string;
  readonly name: string;
  readonly address: string;
  readonly birtdate: Date;
  readonly disease: string;
  readonly allegric: string;
}

// export interface Query {
//   sort: {
//     field: string;
//     orderBy: 'asc' | 'desc';
//   };
// }
