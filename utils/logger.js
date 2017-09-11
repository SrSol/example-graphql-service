const winston = require('winston');
const moment = require('moment');

/**
 * Provides a singleton for a logger.
 */
let instance = null;

class Logger {
    constructor() {
        if (!instance) {
            instance = Logger.createInstance();
        }
        return instance;
    }

    static createInstance() {
        const loggerInstance = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({
                    colorize: true,
                    timestamp: () => {
                        const date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                        return date;
                    },
                }),
            ],
        });
        return loggerInstance;
    }
}

module.exports = Logger;
