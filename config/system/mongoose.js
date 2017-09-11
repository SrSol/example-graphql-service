const mongoose = require('mongoose');
const fs = require('fs');

const Logger = require('./../../utils/logger');

mongoose.Promise = global.Promise;

const logger = new Logger();
let walk;

/*
* Load the mongoose models
*
* @param {function} callback A callback function
*/
function loadModels(callback) {
    const modelsPath = `${__dirname}/../../models`;

    walk = (path) => {
        fs.readdirSync(path).forEach((file) => {
            const newPath = `${path}/${file}`;
            const stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$|coffee$)/.test(file)) {
                    require(newPath);
                }
            } else if (stat.isDirectory()) {
                walk(newPath);
            }
        });
    };
    walk(modelsPath);

    if (callback) callback();
}

/*
* Connect to DB
*
* @param {function} callback A callback function
*/
exports.connect = (callback) => {
    const options = {
        user: process.env.MONGODB_USER ? process.env.MONGODB_USER : '',
        password: process.env.MONGODB_PASSWORD ? process.env.MONGODB_PASSWORD : '',
    };

    const db = mongoose.connect(`${process.env.MONGODB_URI}`,
    options, (err) => {
        if (err) {
            logger.warn('Could not connect to MongoDB!');
            logger.error(err);
        } else {
            logger.info('MongoDB connection established');
            // Enabling mongoose debug mode if required
            mongoose.set('debug', (process.env.MONGODB_DEBUG === 'true'));

            // Call callback FN
            if (callback) callback(db);
        }
    });
}

/*
* Disconnect from DB
*
* @param {function} callback A callback function
*/
exports.disconnect = (callback) => {
    mongoose.disconnect((err) => {
        if (err) {
            logger.warn('Could not disconnect to MongoDB!');
            logger.error(err);
        } else {
            logger.info('Disconnected from MongoDB.');
            if (callback) callback();
        }
    });
}

/*
* Initialize Mongoose
*
* @param {function} callback A callback function
*/
exports.init = (callback) => {
    this.connect(() => {
        loadModels(() => {
            logger.info('Loaded Models');
            if (callback) callback();
        });
    });
}
