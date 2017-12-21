/**
 * Created by VictorJin on 2017/12/20.
 */
const express = require("express");
const route = require("./controller");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.get("/", route.showIndex);

app.get("/:albumName", route.showAlbum);

app.use((req, res) => {
   res.render("err", {
       "baseurl": req.params.albumName
   });
});

app.listen(3000, () => {
    console.log("server start");
});