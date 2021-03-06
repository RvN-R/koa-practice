const Koa = require("koa");
const KoaRouter = require("koa-router");
const BodyParser = require("koa-bodyparser");

import { getCoupons } from "./getCoupons";

const port: number = 3000;
const app = new Koa();
const router = new KoaRouter();
app.use(BodyParser());

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => console.log("Listening to port 3000"));

// GET method

router.get("/", getCoupons);
