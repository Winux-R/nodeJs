/**
 * Created by Winux-R on 2017/12/15.
 */
const express = require("express");

const app = express();

app.get("/admin/login", (req, res) => {
    res.send("管理员登录")
});
app.get("/:usename/:id", (req, res) => {
    res.send(`${req.params["usename"]}:${req.params["id"]}`)
});
app.listen(3004, () => {
    console.log("server start");
});