/**
 * Created by Winux-R on 2017/12/14.
 */
const http = require("http");
const fd = require("formidable");
const util = require("util");
const fs = require("fs");

http.createServer( (req, res) => {
    if (req.url === "/dopost" && req.method.toLowerCase() === "post") {
        let form = new fd.IncomingForm();
        form.uploadDir = "./uploads";
        form.parse(req, function(err, fields, files) {
            console.log(util.inspect({fields: fields, files: files}));
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end("success");
        });
    } else if (req.url === "/") {
        fs.readFile("./html/aa.html", (err, data) => {
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"})
            res.end(data);
        });
    }
}).listen(3008, () => {
    console.log("server start");
})