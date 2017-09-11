const queriesResolver = require('./queries');
const mutationsResolver = require('./mutations');
const typesResolver = require('./types');

module.exports = Object.assign({},
    queriesResolver,
    mutationsResolver,
    typesResolver
);
