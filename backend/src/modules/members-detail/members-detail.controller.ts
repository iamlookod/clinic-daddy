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
import { MembersDetailService } from './members-detail.service';
// import { ReadMembersDTO } from './dto/read-members.dto';
import { MembersDetail } from './interfaces/members-detail.interface';
import { CreateMembersDetailDTO } from './dto/create-members-detail.dto';
import { padStart } from 'lodash';

/**
 * Controller is used for http request and service called
 */
@Controller('members-detail')
export class MembersDetailController {
  constructor(private readonly membersService: MembersDetailService) {}

  /**
   * GET, POST, PUT, DELETE http methods start at this point
   */
  @Get()
  async findAll(): Promise<MembersDetail[]> {
    return await this.membersService.findAll().catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post('/datatable')
  async datatable(@Body() req) {
    return await this.membersService.getMembers(req).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Get(':hn')
  async findOne(@Param('hn') hn: string): Promise<MembersDetail> {
    return await this.membersService.findOne(hn.toUpperCase()).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post()
  async create(
    @Body() createMembersDetailDTO: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    const lastestMembers = await this.membersService.lastest();
    let hn: string;
    lastestMembers
      ? (hn = `HN-${padStart(
          Number(lastestMembers.hn.split('-')[1]) + 1,
          6,
          0,
        )}`)
      : (hn = 'HN-000001');

    return await this.membersService
      .create({
        hn,
        ...createMembersDetailDTO,
      })
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Put(':hn')
  async update(
    @Param('hn') hn: string,
    @Body() createMembersDetailDTO: CreateMembersDetailDTO,
  ) {
    return await this.membersService
      .update(hn.toUpperCase(), createMembersDetailDTO)
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Delete(':hn')
  async remove(@Param('hn') hn: string) {
    return await this.membersService.delete(hn.toUpperCase());
  }
}
