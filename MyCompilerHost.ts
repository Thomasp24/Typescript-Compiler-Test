import MyLanguageServiceHost from "./MyLanguageServiceHost";
import * as ts from "typescript";
export default class MyCompilerHost extends MyLanguageServiceHost implements ts.CompilerHost {
    constructor(settings: ts.CompilerOptions) { super(settings); }
    getSourceFile(filename: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void): ts.SourceFile {
        var text = this.files[filename];
        if (!text) return null;
        return ts.createSourceFile(filename, text, languageVersion);
    }
    writeFile = (filename: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void) => {};
    getCanonicalFileName = (fileName: string) => fileName;
    useCaseSensitiveFileNames = () => true;
    getNewLine = () => "\n";
    getDirectories = path => ts.sys.getDirectories(path);
    fileExists = fileName => ts.sys.fileExists(fileName);
    readFile = fileName => ts.sys.readFile(fileName);
}