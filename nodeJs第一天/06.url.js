/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require("http");
const url = require("url");

http.createServer( (req, res) => {
    let queryObj = url.parse(req.url, true).query;
    let name = queryObj.name;
    let age = queryObj.age;
    let sex = queryObj.sex;
    res.end("服务器收到了表单请求：" + name + age + sex);
}).listen(3005, () => {
    console.log("server start");
});