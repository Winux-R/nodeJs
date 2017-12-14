/**
 * Created by Winux-R on 2017/12/13.
 */
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

http.createServer( (req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (req.url === "/") {
        pathname = "index.html";
    }
    let extname = path.extname(pathname);
    let mime = getMime(extname);
    fs.readFile("./static/" + pathname, (err, data) => {
        if (req.url == "/favicon.ico") {
            return;
        }
        if (err) {
            fs.readFile("./static/404.html", (err, data) => {
                res.writeHead(404, {"Content-type": "text/html;charset=UTF-8"});
                res.end(data);
            })
        } else {
            res.writeHead(200, {"Content-type": mime});
            res.end(data);
        }
    });

}).listen(3011, () => {
    console.log("server start");
});

function getMime (extname) {
    switch (extname) {
        case ".html":
            return "text/html";
        case ".css:":
            return "text/css";
        case ".jpg":
            return "image/jpg"
    }
};
