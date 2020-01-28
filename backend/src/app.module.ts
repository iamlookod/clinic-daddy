/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MembersModule } from './modules/members/members.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://127.0.0.1:27017/clinic',
        useNewUrlParser: true,
        useFindAndModify: false,
      }),
    }),
    MembersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModules {}
