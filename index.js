const logger = require('./log').getLogger('logtest');
logger.trace('testTrace');
logger.debug('testDebug');
logger.info('testInfo');
logger.warn('testWarn');
logger.error('testError');
logger.fatal('testFatal');