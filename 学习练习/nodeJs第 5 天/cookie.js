/**
 * Created by VictorJin on 2017/12/27.
 */
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send(req.cookies.dizhi)
});

app.get("/jiaxiang", (req, res) => {
    let arr = req.cookies.dizhi || [];
    arr.push(req.query.dizhi);
    res.cookie("dizhi", arr, {maxAge: 90000, httpOnly: true});
    res.send(arr);
});

app.listen(3000, () => {
    console.log("server start");
});