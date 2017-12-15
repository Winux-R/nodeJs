/**
 * Created by Winux-R on 2017/12/14.
 */
exports.showIndex = function (req, res) {
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end("我是首页");
};

exports.showStudent = function (req, res) {
    let id = req.url.substr(9, 6);
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end("我是学生页面" + id);
};

exports.show404 = function (req, res) {
    res.writeHead(404, {"Content-type": "text/html;charset=UTF-8"});
    res.end("错误页面");
};