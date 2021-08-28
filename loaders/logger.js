const winston  = require("winston")

const LoggerInstance = winston.createLogger({
    level:"info",
    transports:[new winston.transports.Console()]
});

module.exports = LoggerInstance;

