import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HousesService{
addHouse(houseData) {
  let testHouse = new House(houseData)
  ProxyState.houses = [...ProxyState.houses, testHouse]
}
}
export const housesService = new HousesService()