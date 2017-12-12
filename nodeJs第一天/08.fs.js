/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    fs.readFile('./txt/test.txt', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);

    });
}).listen(3007, () => {
    console.log("server start");
});