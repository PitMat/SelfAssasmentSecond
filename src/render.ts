import { Animal } from "./Animal";
import animalsJSON from "../animals.json";
import { iAnimals } from "./interfaces/iAnimals";
import { Piranha } from "./Fish/Piranha";
import { Human } from "./Mammals/Human";
import { Raven } from "./Birds/Raven";
import { Lion } from "./Mammals/Lion";
import { iAnimal } from "./interfaces/iAnimal";

export class Render {
  animals: Animal[] = [];

  display() {
    animalsJSON.data.forEach((animal) => this.createAnimal(animal as iAnimals));
    for (let animal of this.animals) {
      console.log(animal.toString());
    }
  }
  createAnimal(data: iAnimals) {
    let animal;
    switch (data.type) {
      case "human":
        animal = new Human(
          data.value.name,
          data.value.mass
        );

      case "lion":
        animal = new Lion(
          data.value.name,
          data.value.mass
        )


        break;
      case "piranha":
        animal = new Piranha(
          data.value.name,
          data.value.mass

        );

        break;
      case "raven":
        animal = new Raven(
          data.value.name,
          data.value.mass
        );

        break;
      default:
        throw new Error("There is not such an animal");
    }
    this.animals.push(animal);
  }
}


// export class Render
// {
//     display()
//     {
//         console.log("Hello world");
//     }
// }