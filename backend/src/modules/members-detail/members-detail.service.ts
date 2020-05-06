/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
// import { ReadMembersDetailDTO } from './dto/read-members=detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MembersDetail } from './interfaces/members-detail.interface';
import { CreateMembersDetailDTO } from './dto/create-members-detail.dto';

/**
 * Service is used for business logic and query a data
 */
@Injectable()
export class MembersDetailService {
  constructor(
    @InjectModel('members-detail')
    private readonly membersDetailModel: Model<MembersDetail>,
  ) {}

  findOne(_id: string): Promise<MembersDetail> {
    return this.membersDetailModel.findOne({ _id }).exec();
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

    let data = await this.membersDetailModel.paginate(query, options);

    return data;
  }

  create(
    createMembersDetailDTO: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    const createMembersDetail = new this.membersDetailModel(
      createMembersDetailDTO,
    );
    return createMembersDetail.save();
  }

  async update(
    _id: string,
    createMembersDetailDTO: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    const update = await this.membersDetailModel
      .findOneAndUpdate({ _id }, createMembersDetailDTO)
      .exec();

    if (update) {
      return await this.findOne(_id);
    }
  }

  delete(_id: string): Promise<Object> {
    return this.membersDetailModel.deleteOne({ _id });
  }
}
