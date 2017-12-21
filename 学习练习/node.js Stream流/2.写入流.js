/**
 * Created by Jinxin on 2017/6/19.
 */
const fs = require("fs");

let data = "写入文件练习";

let writeStream = fs.createWriteStream("output.txt");

writeStream.write(data, "utf8");

writeStream.end();

writeStream.on("error", function () {
    console.log("写入文件出现问题");
});

writeStream.on("finish", function () {
    console.log("写入成功");
});

console.log("写入数据流完毕");