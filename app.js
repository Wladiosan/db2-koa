const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const nunjucks = require('nunjucks')
const globalRouter = require('./src/router')
const serve = require('koa-static')

const app = new Koa()
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