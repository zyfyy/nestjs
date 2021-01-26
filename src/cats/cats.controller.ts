import { Controller, Get, Logger } from '@nestjs/common';

import { Cat } from './schemas/cat.schema';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  private readonly logger = new Logger(CatsController.name);

  @Get()
  async getAllCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('create')
  async createCat(): Promise<Cat> {
    this.logger.debug('create cat...');
    this.logger.log('create cat...');
    this.logger.warn('create cat...');
    this.logger.error('create cat...');
    return this.catsService.create({
      name: 'cat1',
      age: 12,
      breed: 'dx',
    });
  }
}
