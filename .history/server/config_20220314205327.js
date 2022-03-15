import { join, dirname } from 'path';
import { fileUrlToPath } from 'url'

const currentDir = dirname(fileUrlToPath(import.meta.url))
const root = join(currentDir, '../')
const audioDirectory = join(root , 'audio')
const publicDirectory = join(root , 'public')


export default {
  dir: {
    root,
    publicDirectory,
    audioDirectory,
    songsDirectory: join(audioDirectory, 'songs'),
    fxDirectory: join(audioDirectory, 'fx'),
  }
}
