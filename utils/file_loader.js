const fs = require('fs');

/**
 * Load every file in any directory
 * @param  {string} path
 */
function loader(path, callback) {
    fs.readdirSync(path).forEach((file) => {
        const newPath = `${path}/${file}`;
        const stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                callback(newPath, stat);
            }
        } else if (stat.isDirectory()) {
            loader(newPath, callback);
        }
    });
}

module.exports = loader;
