/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var test = /** @class */ (function () {
    function test(param) {
        this.param = param;
        this.param = param;
    }
    Object.defineProperty(test.prototype, "getParam", {
        get: function () { return this.param; },
        enumerable: false,
        configurable: true
    });
    return test;
}());
var obj = new test(69);
var body = document.querySelector('body');
var title = document.createElement('h1');
title.textContent = "testParam = ".concat(obj.getParam);
body.appendChild(title);

/******/ })()
;