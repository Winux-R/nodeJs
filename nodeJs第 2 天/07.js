/**
 * Created by Winux-R on 2017/12/14.
 */
const http = require("http");
const querystring = require("querystring");

http.createServer( (req, res) => {
    if (req.url === "/dopost" && req.method.toLowerCase() === "post") {
        let allData = "";
        req.addListener("data", (chunk) => {
            allData += chunk;
            // console.log(allData);
        });
        req.addListener("end", () => {
            let dataString = allData.toString();
            let dataObj = querystring.parse(dataString);
            console.log(dataObj);
            console.log(dataObj.sex);
            console.log(dataObj.img);
        })
    }
}).listen(3007, () => {
    console.log("server start");
})