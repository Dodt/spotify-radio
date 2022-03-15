import { join, dirname } from 'path';
import { fileUrlToPath } from 'url'

dirname(fileUrlToPath(import.meta.url))
