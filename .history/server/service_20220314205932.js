export class Service {
  createFileStream(filename) {
    fs.createReadStream(filename)
  }
}