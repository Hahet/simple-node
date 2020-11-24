const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log('client request')
  ctx.body = 'Hello World';
});

app.listen(3000);
console.log('app listen on 3000...');
