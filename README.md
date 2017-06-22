nodeJS 
======
nodeJS常用核心模块
------
#### * util.inherits
实现对象间原型继承的函数。通俗的讲就是B继承自A，利用util.inherits(C, B)实现C继承A的函数但不继承B，是不是很简单，哈哈哈哈！！！
###### 举个栗子吧：

```javascript
const util = require("util");

function B () {
	this.value = "valFB";
	this.fun = function () {
		console.log("B的console" + this.value);
	};	
}

B.prototype.showName = function () {
	console.log(this.value);
}

function C () {
	this.value = "valueFC";
}

util.inherits(C, B);
let objB = new B();
objB.showName(); // valFB
let objC = new C();
objC.showName(); // valFC
objC.fun(); //报错，不能继承B
```


