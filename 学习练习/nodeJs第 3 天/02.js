/**
 * Created by Winux-R on 2017/12/15.
 */
const express = require("express");

const app = express();

app.use(express.static('./public'));

app.listen(3002, () => {
    console.log("server start");
});