import pino from 'pino';

const isDevelopment = process.env.NODE_ENV !== 'production';

const logger = pino({
    level: isDevelopment ? 'info' : 'warn', // Log everything in development, only warnings/errors in production
    prettyPrint: isDevelopment, // Pretty print in development for readability
});

const logWrapper = {
    debug: (msg, ...args) => logger.debug(msg, ...args),
    info: (msg, ...args) => logger.info(msg, ...args),
    warn: (msg, ...args) => logger.warn(msg, ...args),
    error: (msg, ...args) => logger.error(msg, ...args),
};

export default logWrapper;
