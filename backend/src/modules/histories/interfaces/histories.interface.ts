/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface Histories extends Document {
  readonly hn: String,
  readonly name: String,
  readonly address: String,
  readonly allegric: String,
  readonly symp: String,
  readonly diag: String,
  readonly med: String,
  readonly price: String,
  readonly last_update: String,
}
