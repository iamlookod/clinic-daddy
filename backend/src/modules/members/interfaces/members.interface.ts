/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface Members extends Document {
  readonly name: string;
  readonly age: number;
}
