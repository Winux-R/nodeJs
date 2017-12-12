/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");
const fs = require("fs");

http.createServer( (req, res) => {
    if (req.url === '/favicon.ico') {
        return;
    }
    fs.readdir("./album", (err, data) => {
        console.log(data);
        res.end();
    });
}).listen(3009, () => {
    console.log("server start");
})