import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
function _drawHouses() {
    let template = ''
    ProxyState.houses.forEach(house => template += house.CardTemplate)
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  addHouse(){
   event.preventDefault()
   /**
    * @type{HTMLFormElement}
    */
   // @ts-ignore
   const form = event.target

   const houseData = {
    type: form.type.value,
    price: form.price.value,
    rooms: form.rooms.value,
    bathrooms: form.bathrooms.value,
    floors: form.floors.value,
    garage: form.garage.value,
    year: form.year.value,
    description: form.description.value,
    img: form.img.value,
   }

   try {
     housesService.addHouse(houseData)
   } catch (error) {
     form.make.classList.add('border-danger')
     console.error(error)
     return
   }
   form.reset()
  }
  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    List House For Sale
  </button>
    `
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }

 

}