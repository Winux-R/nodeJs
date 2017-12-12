/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");
const fs = require("fs");
const server = http.createServer( (req, res) => {
    if (req.url === "/") {
        fs.readFile("./html/test.html", (err, data) => {
            res.writeHead(200, {"content-type": "text/html;chartset=UTF-8"});
            res.end(data);
        });
    } else if (req.url === "/jpg") {
        fs.readFile("./jpg/0.jpg", (err, data) => {
            res.writeHead(200, {"content-type": "image/jpg"});
            res.end(data);
        });
    } else if (req.url === "/css") {
        fs.readFile("./css/test.css", (err, data) => {
            res.writeHead(200, {"content-type": "text/css"});
            res.end(data);
        })
    } else {
        res.writeHead(200, {"content-type": "text/html;chartset=UTF-8"});
        res.end("no this page!")
    }
})

server.listen(3001, () => {
    console.log("server start");
})