export default class Cat {
    private color: string;

    constructor(color?: string) {
        console.log('Before ' + this.color);
        this.color = color || 'blue';
        console.log('After ' + this.color);
    }
    displayCatInfo(): void {
        let color: string = 'red';
        console.log("The color of the cat is " + this.color);
    }
}
