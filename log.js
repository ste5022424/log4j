const config = require('config');
const log4js = require('log4js');


log4js.addLayout('json', function (config) {
    return function (logEvent) { return JSON.stringify(logEvent); }
});

log4js.configure(config.logger);

module.exports = {
    log4js,
    getLogger: log4js.getLogger
}