const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBodyParser = require('koa-bodyparser');
const serverKoa = require('graphql-server-koa');
const cors = require('kcors');
const { makeExecutableSchema } = require('graphql-tools');

const graphqlTypes = require('./../../types');
const graphqlMutations = require('./../../schema/mutations');
const graphqlQueries = require('./../../schema/queries');
const graphqlSchema = require('./../../schema/schema');
const graphqlResolvers = require('./../../resolvers');

const Logger = require('./../../utils/logger');

const logger = new Logger();

/**
 * Initialize the Koa application
 */
function init() {
    const app = new Koa();
    const router = new KoaRouter();

    // Logger instance available from the context
    app.context.logger = logger;

    // Cross-Origin Resource Sharing(CORS)
    app.use(cors());

    // x-response-time
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
        logger.info(`X-Response-Time: ${ms}ms`);
    });

    // Logger
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        logger.info(`${ctx.method} ${ctx.url} - ${ms}`);
    });

    app.use(koaBodyParser());

    const graphQLSchema = makeExecutableSchema({
        typeDefs: [graphqlSchema, graphqlQueries, graphqlMutations, graphqlTypes],
        resolvers: graphqlResolvers,
        resolverValidationOptions: {
            requireResolversForNonScalar: (process.env.GRAPHQL_REQUIRE_RESOLVERS === 'true')
        }
    });

    router.post('/api', (ctx, next) => serverKoa.graphqlKoa(() => ({
        schema: graphQLSchema, context: ctx.state.user
    }))(ctx, next));

    if (process.env.GRAPHIQL === 'true') {
        router.get('/graphiql', serverKoa.graphiqlKoa({
            endpointURL: '/api'
        }));
    }

    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(process.env.PORT, () => {
        logger.info('%s listening at %s', process.env.APP_NAME, process.env.PORT);
    });
}

module.exports = init;
