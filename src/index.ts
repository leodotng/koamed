import *  as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-router";
import * as json from "koa-json";

// new Koa app instance
const app = new Koa();
// new router app instance

const router = new Router();

// Hello World
router.get("/", async (ctx, next) => {
    ctx.body = { msg: "Hello world!" };
     await next();
});

// Middlewares
app.use(json());
app.use(logger());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Koa started");
});