/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ReadMembersDTO } from './dto/read-members.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Members } from './interfaces/members.interface';
import { CreateMembersDTO } from './dto/create-members.dto';

/**
 * Service is used for business logic and query a data
 */
@Injectable()
export class MembersService {
  constructor(
    @InjectModel('members') private readonly membersModel: Model<Members>,
  ) {}

  /**
   * Return a ReadMembersDTO object
   */
  getMembers(): ReadMembersDTO {
    // Any business logic requires
    const readMembersDTO = new ReadMembersDTO();
    return readMembersDTO;
  }

  /**
   * Example of saving db
   */
  create(createMembersDto: CreateMembersDTO): Promise<Members> {
    const createdMembers = new this.membersModel(createMembersDto);
    return createdMembers.save();
  }

  findAll(): Promise<Members[]> {
    return this.membersModel.find().exec();
  }

  findOne(hn: string): Promise<Members> {
    return this.membersModel.findOne({ hn }).exec();
  }

  async update(
    hn: string,
    createMembersDto: CreateMembersDTO,
  ): Promise<Members> {
    const update = await this.membersModel
      .findOneAndUpdate({ hn }, createMembersDto)
      .exec();

    if (update) {
      return await this.findOne(hn);
    }
  }

  delete(hn: string): Promise<Object> {
    return this.membersModel.deleteOne({ hn });
  }

  countAll(): Promise<Number> {
    return this.membersModel.estimatedDocumentCount();
  }
}
