import { Controller, Get, Post } from '@nestjs/common';
import { UploaderService, FileList } from './uploader.service';

@Controller('uploader')
export class UploaderController {
  constructor(private uploaderService: UploaderService) {}
  @Get('list')
  findAll(): Promise<FileList> {
    return this.uploaderService.listFiles();
  }

  @Post()
  create(): Promise<FileList> | Record<string, never> {
    return this.uploaderService.listFiles();
  }
}
