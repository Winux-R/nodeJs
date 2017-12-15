/**
 * Created by Winux-R on 2017/12/15.
 */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/hahaha", (req, res) => {
    res.send("haha success");
});
app.get(/^\/student\/([\d]{10})$/, (req, res) => {
    res.send("学生信息，学号" + req.params[0]);
});
app.get("/teacher/:gonghao", (req, res) => {
    res.send("老师信息，工号" + req.params["gonghao"]);
})
app.listen(3000, () => {
    console.log("server start");
});