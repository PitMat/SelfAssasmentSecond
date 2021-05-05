import { Animal } from "../Animal";

export abstract class Birds extends Animal {
    breathe(): string {
        return "Breathe with lungs"
    }
}

