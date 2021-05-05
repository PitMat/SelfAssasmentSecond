import { Mammals } from "./mammals";

export class Human extends Mammals{
    walk():string{
        return "two legs"
    }
}