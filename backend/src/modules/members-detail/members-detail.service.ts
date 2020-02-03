/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ReadMembersDetailDTO } from './dto/read-members=detail.dto';
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

  /**
   * Return a ReadMembersDTO object
   */
  async getMembers(req) {
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

    const data = await this.membersDetailModel.paginate(query, options);

    console.log(data);
    return data;
  }

  /**
   * Example of saving db
   */
  create(
    createMembersDetailDto: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    const createdMembers = new this.membersDetailModel(createMembersDetailDto);
    return createdMembers.save();
  }

  findAll(): Promise<MembersDetail[]> {
    return this.membersDetailModel.find().exec();
  }

  findOne(hn: string): Promise<MembersDetail> {
    return this.membersDetailModel.findOne({ hn }).exec();
  }

  async update(
    hn: string,
    createMembersDetailDto: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    const update = await this.membersDetailModel
      .findOneAndUpdate({ hn }, createMembersDetailDto)
      .exec();

    if (update) {
      return await this.findOne(hn);
    }
  }

  delete(hn: string): Promise<Object> {
    return this.membersDetailModel.deleteOne({ hn });
  }

  async lastest(): Promise<MembersDetail> {
    return await this.membersDetailModel
      .findOne({}, {}, { sort: { createdAt: -1 } })
      .exec();
  }
}
