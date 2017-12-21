/**
 * Created by VictorJin on 2017/12/21.
 */
const express = require("express");
const route = require("./control");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.static("./images"));

app.get("/", route.showStartPage);

app.get("/:alnumName", route.showPicture);

app.use((req, res) => {
   res.render("404")
});

app.listen(3000, () => {
   console.log("server start");
});