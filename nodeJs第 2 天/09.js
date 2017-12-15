/**
 * Created by Winux-R on 2017/12/15.
 */
const ejs = require("ejs");
const fs = require("fs");
const http = require("http");

http.createServer( (req,res) => {
    fs.readFile("./ejs/09.ejs", (err, data) => {
        let template = data.toString();
        let dictionary = {
            a: 6,
            news: ["server", "start"]
        };
        let html = ejs.render(template, dictionary);
        res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
        res.end(html);
    });

}).listen(3009, () => {
    console.log("server start");
})