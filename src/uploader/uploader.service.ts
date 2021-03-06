import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { promisify } from 'util';

import { Injectable } from '@nestjs/common';

const readDir = promisify(fs.readdir);

export type FileList = string[];

const UPLOAD_FOLDER = path.resolve(__dirname, './upload_folder');

@Injectable()
export class UploaderService {
  constructor() {
    fse.ensureDirSync(UPLOAD_FOLDER);
  }
  async listFiles(): Promise<FileList> {
    const files = await readDir(UPLOAD_FOLDER);
    return files;
  }
}
