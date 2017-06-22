/**
 * Created by Jinxin on 2017/6/20.
 */
const url = require("url");
const http = require("http");

function start(route) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        if (pathname === "/index") {
            route(pathname);
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("index");
        } else {
            response.write("other website");
        }
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("服务器已启动");
}

exports.start = start;