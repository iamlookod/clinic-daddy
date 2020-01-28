/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Param } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { ReadMedicinesDTO } from './dto/read-medicines.dto';
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
  @Get()
  getMedicines(): ReadMedicinesDTO {
    return this.medicinesService.getMedicines();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Medicines[]> {
    console.log(params.id);

    return await this.medicinesService.findAll();
    // return `This action returns a #${params.id} cat`;
  }

  @Get('/a/:id')
  async create(@Param() params): Promise<Medicines> {
    console.log(params.id);

    const rtn = await this.medicinesService.create({
      name: 'nine',
      age: 40,
    });

    console.log(rtn);

    return rtn;
    // return await this.medicinesService.findAll();
    // return `This action returns a #${params.id} cat`;
  }
}
