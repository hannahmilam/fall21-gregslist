export class House {
  constructor(houseData){
    this.type = houseData.type 
    this.price = houseData.price
    this.rooms = houseData.rooms
    this.bathrooms = houseData.bathrooms
    this.floors = houseData.floors
    this.garage = houseData.garage 
    this.year = houseData.year
    this.description = houseData.description
    this.img = houseData.img
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-4 mb-4 listing">
      <div class="card custom-font">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <p class="d-flex justify-content-between">
          ${this.type} | ${this.year} </p>
          <p class="d-flex justify-content-between">Price: $${this.price}</p>
          <p class="d-flex justify-content-between">Bedrooms: ${this.rooms} | Bathrooms: ${this.bathrooms}</p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}