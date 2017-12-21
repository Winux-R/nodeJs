/**
 * Created by Jinxin on 2017/6/19.
 */
const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
