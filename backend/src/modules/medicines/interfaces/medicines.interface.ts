/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Document } from 'mongoose';

export interface Medicines extends Document {
  readonly name: string;
  readonly type: string;
  readonly description: string;
}
