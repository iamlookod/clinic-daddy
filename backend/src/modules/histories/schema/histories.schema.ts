/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const HistoriesSchema = new mongoose.Schema(
  {
    hn: String,
    name: String,
    address: String,
    allegric: String,
    symp: String,
    diag: String,
    med: String,
    price: String,
    last_update: String,
  }
).plugin(mongoosePaginate);
