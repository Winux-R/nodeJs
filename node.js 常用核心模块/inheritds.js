/**
 * Created by Jinxin on 2017/6/22.
 */
const util = require("util");

function B() {
    this.value = "valFB";
    this.fun = function () {
        console.log("B的console" + this.value);
    };
}

B.prototype.showName = function () {
    console.log(this.value);




};

function C() {
    this.value = "valueFC";
}

util.inherits (C, B);
let objB = new B();
objB.showName(); // valFB

let objC = new C();
objC.showName(); // valFC
objC.fun(); //报错, 不能继承B