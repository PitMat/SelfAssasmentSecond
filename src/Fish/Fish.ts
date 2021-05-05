import { Animal } from "../Animal";

export abstract class Fish extends Animal {
    breathe(): string {
        return "Breathe with gill"
    }
}
