export default class Animal {
    private age: number;
    public name: string;
    
    constructor (age:number, name:string) {
        this.age = age;
        this.name = name;
    }

    public displayAnimalInfo(){
        console.log("Name is " + this.name + " age is " + this.age); 
    }
}
