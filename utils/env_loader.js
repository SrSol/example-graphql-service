const fs = require('fs');

/*
 * Parses a string or buffer into an object
 * @param {String|Buffer} src - source to be parsed
 * @returns {Object}
*/
function parse(src) {
    const obj = {};

    // convert Buffers before splitting into lines and processing
    src.toString().split('\n').forEach((line) => {
        // matching "KEY' and 'VAL' in 'KEY=VAL'
        const machedResult = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/); // eslint-disable-line
        // matched?
        if (machedResult != null) {
            const key = machedResult[1];
            // default undefined or missing values to empty string
            let value = machedResult[2] ? machedResult[2] : '';
            // remove any surrounding quotes and extra spaces
            value = value.trim();
            obj[key] = value;
        }
    });

    return obj;
}

/*
 * Main entry point into dotenv. Allows configuration before loading .env
 * @param {Object} options - valid options: path ('.env'), encoding ('utf8')
 * @returns {Boolean}
*/
function load(options) {
    let path = '.env';
    let encoding = 'utf8';

    if (options) {
        path = options.path ? options.path : path;
        encoding = options.encoding ? options.encoding : encoding;
    }

    try {
        // specifying an encoding returns a string instead of a buffer
        const parsedObj = parse(fs.readFileSync(path, { encoding }));
        Object.keys(parsedObj).forEach((key) => {
            process.env[key] = process.env[key] || parsedObj[key];
        });
        return { parsed: parsedObj };
    } catch (e) {
        return { error: e };
    }
}

module.exports.load = load;
