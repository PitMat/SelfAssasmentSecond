export abstract class Animal {
    name: string;
    mass: number;



    constructor(name: string, mass: number) {
        this.name = name;
        this.mass = mass;

    }

    toString() {
        return `Animal ${this.name}, ${this.walk()} , ${this.mass}`;

    }


    walk(): string {
        return "";
    }

    breatch(): string {
        return "";
    }

}