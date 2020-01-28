/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import * as mongoose from 'mongoose';

export const MembersSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
