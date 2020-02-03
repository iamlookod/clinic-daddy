/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MembersModule } from './modules/members/members.module';
import { MembersDetailModule } from './modules/members-detail/members-detail.module';

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
    MembersDetailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModules {}
