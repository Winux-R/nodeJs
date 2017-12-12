/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");
const fs = require("fs");

http.createServer( (req, res) => {
    fs.mkdir("./album", () => {
        console.log("创建成功！");
    });
    res.end();
}).listen(3008, () => {
    console.log("server start");
})