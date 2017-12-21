/**
 * Created by Winux-R on 2017/12/15.
 */
const express = require("express");

const app = express();

app.get("/AAB", (req, res) => {
    res.send("你好");
});
app.get("/student/:id", (req, res) => {
    res.send(req.params["id"]);
});
app.listen(3003, () => {
    console.log("server start");
});