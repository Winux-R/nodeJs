/**
 * Created by VictorJin on 2017/12/21.
 */
const fs = require("fs");
exports.getAllAlbum = function (callback) {
    fs.readdir("./images", (err, files) => {
        if (err) {
            callback(err, null);
            return ;
        }
        let albumArr = [];
        ( function ergodic(i) {
            if (i === files.length) {
                callback(null, albumArr);
                return ;
            }
            fs.stat("./images/" + files[i], (err, status) => {
                if (status.isDirectory()) {
                    console.log(files[i]);
                    albumArr.push(files[i]);
                }
                ergodic(++i);
            });
        })(0);
    });

};
exports.getAllImages = function (alnumName, callback) {
    fs.readdir("./images/" + alnumName, (err, files) => {
        if (err) {
            callback(err, null);
            return;
        }
        console.log(files);
        let imageArr = [];
        (function ergodic(i) {
            if (i === files.length) {
                callback(null, imageArr);
                return ;
            }
            fs.stat("./images/" + alnumName + "/" + files[i], (err, status) => {
                if (status.isFile()) {
                    imageArr.push(files[i]);
                }
                ergodic(++i);
            } )
        })(0)
    })
};