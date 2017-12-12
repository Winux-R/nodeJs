/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");

http.createServer( (req, res) => {
    let url = req.url;
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"})
    if (url.substr(0, 9) === "/student/") {
        if (/\w{6}/.test(url.substr(9))) {
            res.end("查询学生信息！");
        } else {
            res.end("学生学号位数不对！");
        }
    } else if (url.substr(0, 9) === "/teacher/") {
        if (/\w{6}/.test(url.substr(9))) {
            res.end("查询老师信息！");
        } else {
            res.end("老师学号位数不对！");
        }
    }
}).listen(3006, () => {
    console.log("server start");
});