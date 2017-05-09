"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var MyLanguageServiceHost = (function () {
    function MyLanguageServiceHost(settings) {
        var _this = this;
        this.files = {};
        this.getCompilationSettings = function () { return _this.compilationSettings; };
        this.getDefaultLibFileLocation = function () { return ts.getDefaultLibFilePath(_this.getCompilationSettings()); };
        this.getDefaultLibFileName = function (_) { return _this.getDefaultLibFileLocation(); };
        this.getDirectories = function (path) { return []; };
        this.writeFile = function (filename, data, writeByteOrderMark, onError) { };
        this.getCurrentDirectory = function () { return ts.sys.getCurrentDirectory(); };
        this.getCanonicalFileName = function (fileName) { return fileName; };
        this.useCaseSensitiveFileNames = function () { return true; };
        this.getNewLine = function () { return "\n"; };
        this.fileExists = function (fileName) { return !!_this.files[fileName]; };
        this.readFile = function (fileName) { return _this.files[fileName]; };
        this.compilationSettings = settings;
    }
    MyLanguageServiceHost.prototype.getSourceFile = function (filename, languageVersion, onError) {
        var text = this.files[filename];
        if (!text)
            return null;
        return ts.createSourceFile(filename, text, languageVersion);
    };
    MyLanguageServiceHost.prototype.addFile = function (fileName, body) {
        this.files[fileName] = body;
    };
    return MyLanguageServiceHost;
}());
exports.default = MyLanguageServiceHost;
//# sourceMappingURL=MyLanguageServiceHost.js.map