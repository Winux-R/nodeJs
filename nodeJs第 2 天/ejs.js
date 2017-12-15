/**
 * Created by Winux-R on 2017/12/15.
 */
const ejs = require("ejs");

let string = "success: <%= a %>";
let data = {
    a: 6
};

let html = ejs.render(string, data);

console.log(html);