/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { MembersDetailController } from './members-detail.controller';
import { MembersDetailService } from './members-detail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersDetailSchema } from './schema/members-detail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'members-detail', schema: MembersDetailSchema },
    ]),
  ],
  controllers: [MembersDetailController],
  providers: [MembersDetailService],
})
export class MembersDetailModule {}
