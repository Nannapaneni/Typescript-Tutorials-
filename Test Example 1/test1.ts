import Animal from "./animal";
import Cat from "./cat";
class Test {
    public static main():number {
        // lets call the method without having to create an object
        console.log("This is an example.");
        const a: Animal = new Animal(23, "Tommy");
        a.displayAnimalInfo();
        console.log(a.name);
        const c: Cat = new Cat('Purple');
        c.displayCatInfo();              
        return 0;        
    }
}
Test.main();

