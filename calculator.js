"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.plus = function (a, b) {
        return a + b;
    };
    Calculator.prototype.minus = function (a, b) {
        return a - b;
    };
    Calculator.prototype.divide = function (a, b) {
        return a / b;
    };
    Calculator.prototype.times = function (a, b) {
        return a * b;
    };
    Calculator.prototype.modulo = function (a, b) {
        return a % b;
    };
    Calculator.prototype.greaterThan = function (a, b) {
        return a > b;
    };
    Calculator.prototype.lesserThan = function (a, b) {
        return a < b;
    };
    Calculator.prototype.greaterOrEqualTo = function (a, b) {
        return a >= b;
    };
    Calculator.prototype.lesserOrEqualTo = function (a, b) {
        return a <= b;
    };
    Calculator.prototype.equals = function (a, b) {
        return a === b;
    };
    Calculator.prototype.notEquals = function (a, b) {
        return a !== b;
    };
    Calculator.prototype.equalsTruthy = function (a, b) {
        return a === b;
    };
    Calculator.prototype.notEqualsFalsy = function (a, b) {
        return a !== b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map