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

/**
 * Controller is used for http request and service called
 */
@Controller('members-detail')
export class MembersDetailController {
  constructor(private readonly membersDetailService: MembersDetailService) {}

  /**
   * GET, POST, PUT, DELETE http methods start at this point
   */
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<MembersDetail> {
    return await this.membersDetailService.findOne(_id).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post('/datatable')
  async datatable(@Body() req) {
    return await this.membersDetailService.datatable(req).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post()
  async create(
    @Body() createMembersDetailDTO: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    return await this.membersDetailService
      .create(createMembersDetailDTO)
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Put(':_id')
  async update(
    @Param('_id') _id: string,
    @Body() createMembersDetailDTO: CreateMembersDetailDTO,
  ): Promise<MembersDetail> {
    return await this.membersDetailService
      .update(_id, createMembersDetailDTO)
      .catch(err => {
        throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Delete(':_id')
  async remove(@Param('_id') _id: string) {
    return await this.membersDetailService.delete(_id);
  }
}
