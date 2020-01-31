/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const MembersSchema = new mongoose.Schema(
  {
    hn: { type: String, required: true },
    name: { type: String, required: true },
    address: String,
    birtdate: Date,
    disease: String,
    allegric: String,
  },
  { timestamps: { createdAt: 'createdAt' } },
).plugin(mongoosePaginate);
