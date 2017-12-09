/**
 * Created by Jinxin on 2017/6/19.
 */
const fs = require("fs");

let data = "";

let readStream = fs.createReadStream("input.txt");

readStream.setEncoding("utf8");

readStream.on("data", function (chunk) {
    data += chunk;
});

readStream.on("end",function () {
    console.log(data);
});

readStream.on("error", function () {
    console.log("获取数据流出现问题");
});

console.log("获取数据流完毕");