import Koa from 'koa';
import Router from '@koa/router';
import p from 'phin';

const app = new Koa();
const router = new Router();

router.get('/prod1', async ctx => {
    ctx.type = 'json';
    var res = await p('https://board.event-camp.org/wp-json/wp/v2/posts?&per_page=2');
    ctx.body = res.body;
})

router.get('/prod2', async ctx => {
    ctx.type = 'json';
    var res = await p('https://board.event-camp.org/wp-json/wp/v2/posts?&per_page=2');
    ctx.body = res.body;
})

app .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);