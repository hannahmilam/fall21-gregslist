import { ProxyState } from "../AppState.js";
import { Animal } from "../Models/Animal.js";

class AnimalsService {
  addAnimal(animalData) {
    console.log('animalData')
    let testAnimal = new Animal(animalData)
    ProxyState.animals = [...ProxyState.animals, testAnimal]
  }

}

export const animalsService = new AnimalsService()