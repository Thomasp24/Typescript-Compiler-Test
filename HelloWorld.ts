import {Calculator} from "./calculator";
class HelloWorld {
    private calculator: Calculator;
    constructor() {this.calculator = new Calculator();}
    public sayHelloTo(name: string) {
        console.log("Hello " + name);
        let x = 5 >= 4 ? 1 : 2;
        if (5 >= 4) {}
        do {} while (5 >= 4);
        while (5 >= 4) {}
        for (let i = 0; i < 10; i++) {}
    }
}