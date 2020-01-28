/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MembersModule } from './modules/members/members.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://mongo:27017/test'), SubModModule],
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/clinic'),
    MembersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModules {}
