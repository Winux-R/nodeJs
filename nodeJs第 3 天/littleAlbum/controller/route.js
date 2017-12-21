/**
 * Created by VictorJin on 2017/12/20.
 */
const file = require("../models/files.js");

exports.showIndex = function (req, res) {
    file.getAllAlbum((err, allAlbum) => {
        if (err) {
            res.send(err);
            return
        }
        res.render("index", {
            "album": allAlbum
        });
    });
};

exports.showAlbum = function (req, res) {
    file.getAllImages(req.params.albumName, (err, img) => {
        if (err) {
            res.send(err);
            return
        }
        res.render("album", {
            "albumurl": req.params.albumName,
            "images": img
        })
    });
};