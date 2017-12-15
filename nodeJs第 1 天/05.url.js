/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");
const url = require("url");

const server = http.createServer( (req, res) => {
    res.end(url.parse(req.url).pathname);
}).listen(3004, () => {
    console.log("server start");
})