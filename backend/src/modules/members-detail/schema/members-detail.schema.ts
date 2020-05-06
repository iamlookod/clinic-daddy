/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const MembersDetailSchema = new mongoose.Schema(
  {
    hn: { type: String, required: true },
    symb: String,
    diag: String,
    medicine: Array,
    price: Number,
    note: String,
  },
  { timestamps: { createdAt: 'createdAt' } },
).plugin(mongoosePaginate);
