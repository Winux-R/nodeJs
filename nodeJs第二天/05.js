/**
 * Created by Winux-R on 2017/12/14.
 */
const http = require("http");
const router = require("./router.js");

http.createServer( (req, res) => {
    if (req.url === "/") {
        router.showIndex(req, res);
    } else if (req.url.substr(0, 9) === "/student/") {
        router.showStudent(req, res);
    } else {
        router.show404(req, res);
    }
}).listen(3005, () => {
    console.log("serve start");
})