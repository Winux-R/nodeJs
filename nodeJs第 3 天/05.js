/**
 * Created by Winux-R on 2017/12/15.
 */
const express = require("express");

const app = express();

app.use("/", (req, res,next) => {
    res.write("one" + "\n");
    next();
});

app.use("/admin", (req,res) => {
    res.write(req.originalUrl + "\n");
    res.write(req.path + "\n");
    res.write(req.baseUrl + "\n");
    res.end("你好")
});

app.listen(3005, () => {
    console.log("server start");
})