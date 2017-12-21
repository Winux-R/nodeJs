/**
 * Created by Winux-R on 2017/12/14.
 */
const http = require("http");

http.createServer( (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
        res.end("成功");
    } else {
        res.writeHead(404, {"Content-type": "text/html;charset=UTF-8"});
        res.end("失败");
    }

}).listen(3001, () => {
    console.log("server start");
})