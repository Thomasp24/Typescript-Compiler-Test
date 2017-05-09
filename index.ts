import * as ts from "typescript";
import MyCompilerHost from "./MyCompilerHost";

const code: string = `
class HelloWorld {
    constructor() {}
    public sayHelloTo(name: string) {
        console.log("Hello " - name); // <-- COMPILER ERROR
    }
}`;
const sourceFilePaths: string[] = ["HelloWorld.ts"];
const index = 0; /* in this case there is only 1 file */
const compilerOptions: ts.CompilerOptions = {noEmitOnError: true, target: ts.ScriptTarget.ES5, noImplicitAny: true, module: ts.ModuleKind.CommonJS};

let compilerHost: MyCompilerHost = new MyCompilerHost(compilerOptions);

compilerHost.addFile(sourceFilePaths[index], code);

let program = ts.createProgram(sourceFilePaths, compilerOptions, compilerHost);
program.getSourceFiles().forEach(file => {
    console.log(file.getFullText());
});
let emitResult = program.emit();
let diagnostics = emitResult.diagnostics;
diagnostics.forEach(diagnostic => {
    console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
});