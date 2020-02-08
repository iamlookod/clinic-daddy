/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const MedicinesSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    description: String,
  },
  { timestamps: { createdAt: 'createdAt' } },
).plugin(mongoosePaginate);
