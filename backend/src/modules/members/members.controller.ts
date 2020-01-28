/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Param } from '@nestjs/common';
import { MembersService } from './members.service';
import { ReadMembersDTO } from './dto/read-members.dto';
import { Members } from './interfaces/members.interface';

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
  getMembers(): ReadMembersDTO {
    return this.membersService.getMembers();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Members[]> {
    console.log(params.id);

    return await this.membersService.findAll();
    // return `This action returns a #${params.id} cat`;
  }

  @Get('/a/:id')
  async create(@Param() params): Promise<Members> {
    console.log(params.id);

    const rtn = await this.membersService.create({
      name: 'nine',
      age: 40,
    });

    console.log(rtn);

    return rtn;
    // return await this.membersService.findAll();
    // return `This action returns a #${params.id} cat`;
  }
}
