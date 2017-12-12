/**
 * Created by Winux-R on 2017/12/11.
 */
var http = require("http");
var server = http.createServer(function (req, res) {
    // res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("<div>start!</div>");
});

server.listen(3000, function () {
    console.log("server start");
});