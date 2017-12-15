/**
 * Created by Winux-R on 2017/12/14.
 */
const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer( (req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);
    fs.readFile("./static/" + pathname, (err, data) => {
       res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    });
}).listen(3003, () => {
    console.log("server start")
})