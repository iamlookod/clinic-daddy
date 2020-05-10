/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
// import { ReadHistoriesDTO } from './dto/read-histories.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Histories } from './interfaces/histories.interface';

/**
 * Service is used for business logic and query a data
 */
@Injectable()
export class HistoriesService {
  constructor(
    @InjectModel('histories') private readonly historiesModel: Model<Histories>,
  ) {}

  /**
   * Return a ReadHistoriesDTO object
   */

  findOne(_id: string): Promise<Histories> {
    return this.historiesModel.findOne({ _id }).exec();
  }

  findByName(name: string): Promise<Histories[]> {
    return this.historiesModel.find({ name }).exec();
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

    let data = await this.historiesModel.paginate(query, options);

    return data;
  }
}
