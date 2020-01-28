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
import { MembersService } from './members.service';
// import { ReadMembersDTO } from './dto/read-members.dto';
import { Members } from './interfaces/members.interface';
import { CreateMembersDTO } from './dto/create-members.dto';
import { padStart } from 'lodash';

/**
 * Controller is used for http request and service called
 */
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  /**
   * GET, POST, PUT, DELETE http methods start at this point
   */
  @Get()
  async findAll(): Promise<Members[]> {
    return await this.membersService.findAll().catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Get(':hn')
  async findOne(@Param('hn') hn: string): Promise<Members> {
    return await this.membersService.findOne(hn.toUpperCase()).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post()
  async create(@Body() createMembersDTO: CreateMembersDTO): Promise<Members> {
    const countMembers = await this.membersService.countAll();

    return await this.membersService
      .create({
        hn: `HN-${padStart(Number(countMembers) + 1, 6, 0)}`,
        ...createMembersDTO,
      })
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Put(':hn')
  async update(
    @Param('hn') hn: string,
    @Body() createMembersDTO: CreateMembersDTO,
  ) {
    return await this.membersService
      .update(hn.toUpperCase(), createMembersDTO)
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Delete(':hn')
  async remove(@Param('hn') hn: string) {
    return await this.membersService.delete(hn.toUpperCase());
  }
}
