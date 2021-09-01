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
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>Bedrooms: ${this.rooms}, Bathrooms: ${this.bathrooms}</span>
            <span>Price: $${this.price}, year built: ${this.year}</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}