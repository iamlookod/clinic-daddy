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
import { HistoriesService } from './histories.service';
// import { ReadHistoriesDTO } from './dto/read-histories.dto';
import { CreateHistoriesDTO } from './dto/create-histories.dto';
import { Histories } from './interfaces/histories.interface';

/**
 * Controller is used for http request and service called
 */
@Controller('histories')
export class HistoriesController {
  constructor(private readonly historiesService: HistoriesService) {}

  /**
   * GET, POST, PUT, DELETE http methods start at this point
   */

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Histories[]> {
    return await this.historiesService.findByName(name).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Post('/datatable')
  async datatable(@Body() req) {
    return await this.historiesService.datatable(req).catch(err => {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
