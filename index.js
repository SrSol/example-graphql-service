const loadEnv = require('./utils/env_loader');
const { init } = require('./config/system/mongoose');
const koa = require('./config/system/koa');

const parsedObject = loadEnv.load({
    path: process.argv[2] ? process.argv[2] : './config/system_variables.env'
});

// Mongoose and Server Initialization
init(() => koa());
