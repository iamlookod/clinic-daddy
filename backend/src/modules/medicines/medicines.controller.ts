/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MedicinesService } from './medicines.service';
// import { ReadMedicinesDTO } from './dto/read-medicines.dto';
import { CreateMedicinesDTO } from './dto/create-medicines.dto';
import { Medicines } from './interfaces/medicines.interface';

/**
 * Controller is used for http request and service called
 */
@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  /**
   * GET, POST, PUT, DELETE http methods start at this point
   */

  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<Medicines> {
    return await this.medicinesService.findOne(_id).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post('/datatable')
  async datatable(@Body() req) {
    return await this.medicinesService.datatable(req).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post()
  async create(
    @Body() createMedicinesDTO: CreateMedicinesDTO,
  ): Promise<Medicines> {
    return await this.medicinesService.create(createMedicinesDTO).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Put(':_id')
  async update(
    @Param('_id') _id: string,
    @Body() createMedicinesDTO: CreateMedicinesDTO,
  ): Promise<Medicines> {
    return await this.medicinesService
      .update(_id, createMedicinesDTO)
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Delete(':_id')
  async remove(@Param('_id') _id: string) {
    return await this.medicinesService.delete(_id);
  }
}
