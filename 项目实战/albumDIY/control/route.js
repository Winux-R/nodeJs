/**
 * Created by VictorJin on 2017/12/21.
 */
const ImagesGet = require("../module/ImagesGet");

exports.showStartPage = function (req, res) {
    ImagesGet.getAllAlbum((err, album) => {
        if (err) {
            res.send("资源不存在");
            return;
        }
        res.render("startPage", {
            "album": album
        });
    });
};

exports.showPicture = function (req,res) {
    ImagesGet.getAllImages(req.params.alnumName, (err, img) => {
        if (err) {
            res.send("资源不存在");
            return;
        }
        res.render("imgPage", {
            "albumurl": req.params.alnumName,
            "images": img
        });
    })
};