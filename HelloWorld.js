"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var HelloWorld = (function () {
    function HelloWorld() {
        this.calculator = new calculator_1.Calculator();
    }
    HelloWorld.prototype.sayHelloTo = function (name) {
        console.log("Hello " + name);
        var x = 5 >= 4 ? 1 : 2;
        if (5 >= 4) { }
        do { } while (5 >= 4);
        while (5 >= 4) { }
        for (var i = 0; i < 10; i++) { }
    };
    return HelloWorld;
}());
//# sourceMappingURL=HelloWorld.js.map