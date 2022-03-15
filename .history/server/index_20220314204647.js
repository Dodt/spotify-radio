import server from './server.js';
import { logger } from './utils.js'

server.listen(3000)
.on('listening', () => console.log('server running!!'))