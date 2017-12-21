/**
 * Created by VictorJin on 2017/12/20.
 */
const fs = require("fs");

exports.getAllAlbum = function (callback) {
    fs.readdir("./uploads", (err, files) => {
        if (err) {
            callback("没有", null);
            return ;
        }
        let allAlbum = [];
        ( function iterator(i) {
            if (i === files.length) {
                callback(null, allAlbum);
                return ;
            }
            fs.stat("./uploads/" + files[i], (err, stats) => {
                if (err) {
                    callback("找不到文件" + files[i], null);
                }
                if (stats.isDirectory()) {
                    allAlbum.push(files[i]);
                }
                iterator(++i);
            })
        })(0);
    });
};

exports.getAllImages = function (albumName, callback) {
    fs.readdir("./uploads/" + albumName, (err, files) => {
        let images = [];
        if (err) {
            callback(err, null);
            return;
        }
        ( function iterator(i) {
            if (i === files.length) {
                callback(null, images);
                return;
            }
            fs.stat("./uploads/" + albumName + "/" + files[i], (err, stats) => {
                if (err) {
                    callback("找不到文件" + files[i], null);
                }
                if (stats.isFile()) {
                    images.push(files[i]);
                }
                console.log(images);
                iterator(++i);
            });
        })(0)
    })
};