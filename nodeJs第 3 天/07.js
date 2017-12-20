/**
 * Created by Winux-R on 2017/12/19.
 */
const express = require("express");
const bosyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("form");
});

app.use(bosyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
    console.log(JSON.stringify(req.body));
});
app.listen(3001);