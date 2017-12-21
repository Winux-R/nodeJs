/**
 * Created by Winux-R on 2017/12/19.
 */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(req.query);
    res.send();
});

app.listen(3000);