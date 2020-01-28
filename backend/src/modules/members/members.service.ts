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
  async create(createMembersDto: CreateMembersDTO): Promise<Members> {
    const createdMembers = new this.membersModel(createMembersDto);
    return await createdMembers.save();
  }

  async findAll(): Promise<Members[]> {
    return await this.membersModel.find().exec();
  }
}
