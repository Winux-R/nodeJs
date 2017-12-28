/**
 * Created by VictorJin on 2017/12/27.
 */
const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    if (req.session.name === "jinxin") {
        res.send("欢迎" + req.session.name);
    } else {
        res.send("请登录");
    }
});

app.get("/login", (req, res) => {
    req.session.name = "jinxin";
    res.send("你已成功登录")
});

app.listen(3000, () => {
    console.log("server start");
});