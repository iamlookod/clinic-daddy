/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ReadMedicinesDTO } from './dto/read-medicines.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Medicines } from './interfaces/medicines.interface';
import { CreateMedicinesDTO } from './dto/create-medicines.dto';

/**
 * Service is used for business logic and query a data
 */
@Injectable()
export class MedicinesService {
  constructor(
    @InjectModel('medicines') private readonly medicinesModel: Model<Medicines>,
  ) {}

  /**
   * Return a ReadMedicinesDTO object
   */
  getMedicines(): ReadMedicinesDTO {
    // Any business logic requires
    const readMedicinesDTO = new ReadMedicinesDTO();
    return readMedicinesDTO;
  }

  /**
   * Example of saving db
   */
  async create(createMedicinesDto: CreateMedicinesDTO): Promise<Medicines> {
    const createdMedicines = new this.medicinesModel(createMedicinesDto);
    return await createdMedicines.save();
  }

  async findAll(): Promise<Medicines[]> {
    return await this.medicinesModel.find().exec();
  }
}
