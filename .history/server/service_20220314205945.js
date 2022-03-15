import fs from 'fs';

export class Service {
  createFileStream(filename) {
    fs.createReadStream(filename)
  }
}