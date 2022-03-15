import pino from 'pino';

const log = pino({
  enabled: !(!!process.env.LOG_DISABLED)
})