import * as ts from 'typescript';
import {} from "fs";
export default class MyLanguageServiceHost implements ts.CompilerHost {
  files: { [fileName: string]: string } = {}
  private compilationSettings: ts.CompilerOptions;
  constructor(settings: ts.CompilerOptions) { this.compilationSettings = settings; }
  getSourceFile(filename: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void): ts.SourceFile {
    var text = this.files[filename];
    if (!text) return null;
    return ts.createSourceFile(filename, text, languageVersion);
  }
  getCompilationSettings = () => this.compilationSettings;
  getDefaultLibFileLocation = () => ts.getDefaultLibFilePath(this.getCompilationSettings());
  getDefaultLibFileName = _ => this.getDefaultLibFileLocation();
  getDirectories = (path: string): string[] => [];
  writeFile = (filename: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void) => {}
  getCurrentDirectory = () => ts.sys.getCurrentDirectory();
  getCanonicalFileName = (fileName: string) => fileName;
  useCaseSensitiveFileNames = () => true;
  getNewLine = () => "\n";
  fileExists = (fileName: string) => !!this.files[fileName];
  readFile = (fileName: string) => this.files[fileName];
  addFile(fileName: string, body: string) {
    this.files[fileName] = body;
  }
}
