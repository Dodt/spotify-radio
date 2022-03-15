import { join, dirname } from 'path';
import { fileUrlToPath } from 'url'

const currentDir = dirname(fileUrlToPath(import.meta.url))
