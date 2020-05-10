/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { HistoriesController } from './histories.controller';
import { HistoriesService } from './histories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoriesSchema } from './schema/histories.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'histories', schema: HistoriesSchema }]),
  ],
  controllers: [HistoriesController],
  providers: [HistoriesService],
})
export class HistoriesModule {}
