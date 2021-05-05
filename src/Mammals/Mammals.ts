import {Animal} from "../Animal";

export abstract class Mammals extends Animal{
   breathe():string{
       return "Breathe with lungs"
   }
}

