/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { MedicinesController } from './medicines.controller';
import { MedicinesService } from './medicines.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicinesSchema } from './schema/medicines.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'medicines', schema: MedicinesSchema }]),
  ],
  controllers: [MedicinesController],
  providers: [MedicinesService],
})
export class MedicinesModule {}
