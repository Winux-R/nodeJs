/**
 * Created by Jinxin on 2017/6/20.
 */
const server = require("./server");
const router = require("./router");

server.start(router.router);