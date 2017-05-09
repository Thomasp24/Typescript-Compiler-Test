"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var MyCompilerHost_1 = require("./MyCompilerHost");
var code = "\nclass HelloWorld {\n    constructor() {}\n    public sayHelloTo(name: string) {\n        console.log(\"Hello \" - name); // <-- COMPILER ERROR\n    }\n}";
var sourceFilePaths = ["HelloWorld.ts"];
var index = 0; /* in this case there is only 1 file */
var compilerOptions = { noEmitOnError: true, target: ts.ScriptTarget.ES5, noImplicitAny: true, module: ts.ModuleKind.CommonJS };
var compilerHost = new MyCompilerHost_1.default(compilerOptions);
compilerHost.addFile(sourceFilePaths[index], code);
var program = ts.createProgram(sourceFilePaths, compilerOptions, compilerHost);
program.getSourceFiles().forEach(function (file) {
    console.log(file.getFullText());
});
var emitResult = program.emit();
var diagnostics = emitResult.diagnostics;
diagnostics.forEach(function (diagnostic) {
    console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
});
//# sourceMappingURL=index.js.map