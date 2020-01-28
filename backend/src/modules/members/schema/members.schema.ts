/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';

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
);
