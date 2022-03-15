import { join, dirname } from 'path';
import { fileUrlToPath } from 'url'

const currentDir = dirname(fileUrlToPath(import.meta.url))
const root = join(currentDir, '../')
const audioDirectory = join(currentDir, '../')

