"use strict";
exports.__esModule = true;
var Koa = require("koa");
var KoaRouter = require("koa-router");
var BodyParser = require("koa-bodyparser");
var getCoupons_1 = require("./getCoupons");
var port = 3000;
var app = new Koa();
var router = new KoaRouter();
app.use(BodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, function () { return console.log("Listening to port 3000"); });
// GET method
router.get("/", getCoupons_1.getCoupons);
