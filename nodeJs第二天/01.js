 /**
 * Created by Winux-R on 2017/12/14.
 */
const http = require("http");

http.createServer( (req, res) => {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end("成功");
}).listen(3000, () => {
    console.log("server start");
});