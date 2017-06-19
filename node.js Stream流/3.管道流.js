/**
 * Created by Jinxin on 2017/6/19.
 */
const fs = require("fs");

let readStream = fs.createReadStream("inputPipe.txt");

let writeStream = fs. createWriteStream("outputPipe.txt");

readStream.setEncoding("utf8");

//普通方式实现
/*readStream.on("data", function (chunk) {
    writeStream.write(chunk, "utf8");
    writeStream.end();
    writeStream.on("error", function () {
        console.log("写入出现问题");
    });
});*/

//pipe方式实现
readStream.pipe(writeStream);

readStream.on("end", function () {
    console.log("读取完毕")
});

readStream.on("error", function () {
    console.log("读取出现问题");
});

console.log("管道流实现完成");
