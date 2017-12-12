/**
 * Created by Winux-R on 2017/12/12.
 */

const http = require('http');

const server = http.createServer( (req, res) => {
    console.log("服务器接收路径" + req.url);
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.write("我是1标题<br/>");
    res.write("我是2标题<br/>");
    res.write("我是3标题<hr/>");
    res.end("<div>success</div>");
});

server.listen(3002, () => {
    console.log("server start");
})