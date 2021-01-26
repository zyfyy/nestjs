import { Controller, Get } from '@nestjs/common';

import { Cat } from './schemas/cat.schema';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getAllCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
