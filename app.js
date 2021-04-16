const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router')
const views = require('koa-views')
const nunjucks = require('nunjucks')
const globalRouter = require('./src/router')
const serve = require('koa-static')
const Redis = require('ioredis')

const app = new Koa()

const redis = new Redis()
app.context.redis = redis

app.use(bodyParser());
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        if(err.isJoi) {
            ctx.throw(400, err.details[0].message)
        }
        console.log(err)
        ctx.throw(400, 'Something wrong')
    }
})

const router = new Router()

const port = process.env.PORT || 3005

const nunjucksEnvironment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(path.join(__dirname, './src/templates/'))
);

const render = views(path.join(__dirname, 'src/templates/'), {
    extension: 'njk',
    options: {
        nunjucksEnv: nunjucksEnvironment,
    },
    map: {
        njk: 'nunjucks'
    }
})


app.use(render)

app.use(serve(path.join(__dirname, './src')))

router.use('/', globalRouter.router.routes())

app.use(router.routes())

app.listen(port, () => {
    console.log(`Server is starting at PORT: ${port}`)
})