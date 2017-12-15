/**
 * Created by Winux-R on 2017/12/13.
 */
const http = require("http");
const fs = require("fs");

http.createServer( (req, res) => {
    if (req.url === "/favicon.ico") {
        return ;
    }
    fs.readdir('./album', (err, files) => {
        let wenjianjia = [];
        (function interator(i) {
            if (i === files.length) {
                console.log(wenjianjia);
                return ;
            }
           fs.stat("./album/" + files[i], (err, status) => {
               if (status.isDirectory()) {
                   wenjianjia.push(files[i]);
               }
               interator(i+1)
           });
        })(0);
        res.end();
    })
}).listen(3010, () => {
    console.log("server start");
})