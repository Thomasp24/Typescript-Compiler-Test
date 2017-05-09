"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MyLanguageServiceHost_1 = require("./MyLanguageServiceHost");
var ts = require("typescript");
var MyCompilerHost = (function (_super) {
    __extends(MyCompilerHost, _super);
    function MyCompilerHost(settings) {
        var _this = _super.call(this, settings) || this;
        _this.writeFile = function (filename, data, writeByteOrderMark, onError) { };
        _this.getCanonicalFileName = function (fileName) { return fileName; };
        _this.useCaseSensitiveFileNames = function () { return true; };
        _this.getNewLine = function () { return "\n"; };
        _this.getDirectories = function (path) { return ts.sys.getDirectories(path); };
        _this.fileExists = function (fileName) { return ts.sys.fileExists(fileName); };
        _this.readFile = function (fileName) { return ts.sys.readFile(fileName); };
        return _this;
    }
    MyCompilerHost.prototype.getSourceFile = function (filename, languageVersion, onError) {
        var text = this.files[filename];
        if (!text)
            return null;
        return ts.createSourceFile(filename, text, languageVersion);
    };
    return MyCompilerHost;
}(MyLanguageServiceHost_1.default));
exports.default = MyCompilerHost;
//# sourceMappingURL=MyCompilerHost.js.map