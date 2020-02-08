/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
// import { ReadMedicinesDTO } from './dto/read-medicines.dto';
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

  findOne(_id: string): Promise<Medicines> {
    return this.medicinesModel.findOne({ _id }).exec();
  }

  async datatable(req) {
    let query = {};
    let options = {};
    if (req.sort)
      options = {
        ...options,
        sort: { [req.sort.field]: req.sort.orderBy },
      };

    if (req.limit) options = { ...options, limit: req.limit };
    if (req.offset) options = { ...options, offset: req.offset };

    if (req.search)
      query = {
        $or: [
          { name: { $regex: `.*${req.search}.*` } },
          { hn: { $regex: `.*${req.search.toUpperCase()}.*` } },
        ],
      };

    let data = await this.medicinesModel.paginate(query, options);

    return data;
  }

  create(createMedicinesDTO: CreateMedicinesDTO): Promise<Medicines> {
    const createMedicines = new this.medicinesModel(createMedicinesDTO);
    return createMedicines.save();
  }

  async update(
    _id: string,
    createMedicinesDTO: CreateMedicinesDTO,
  ): Promise<Medicines> {
    const update = await this.medicinesModel
      .findOneAndUpdate({ _id }, createMedicinesDTO)
      .exec();

    if (update) {
      return await this.findOne(_id);
    }
  }

  delete(_id: string): Promise<Object> {
    return this.medicinesModel.deleteOne({ _id });
  }
}
