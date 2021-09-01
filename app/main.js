import { AnimalsController } from "./Controllers/AnimalsController.js";
import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
class App {
  carsController = new CarsController()
  housesController = new HousesController()

  animalsController = new AnimalsController()
}

window["app"] = new App();
