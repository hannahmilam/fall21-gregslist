export function getHouseFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="type" class="">Type:</label>
    <select name="type" id="type" required class="form-control">
      <option disabled selected value="">Please Choose House Type</option> 
      <option>Single Family Home</option>
      <option>Multi Family Home </option>
      <option>Dublex</option>
      <option>Townhome</option>
      <option>Apartment/Condo</option>
    </select>
  </div>
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" required>
  </div>
  <div class="form-group">
    <label for="rooms" class="">Bedrooms:</label>
    <input type="number" class="form-control" name="rooms" id="rooms" min="0" max="20" required>
  </div>
  <div class="form-group">
    <label for="bathrooms" class="">Bathrooms:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms" min="0" max="20" required>
  </div>
  <div class="form-group">
    <label for="floors" class="">Floors:</label>
    <input type="number" class="form-control" name="floors" id="floors" min="0" max="20" required>
  </div>
  <div class="form-group">
    <label for="garage" class="">Garage:</label>
    <select type="garage" class="form-control" name="garage" id="garage"><option disabled selected value="">Please Choose Garage Type</option> 
    <option>No Garage</option>
    <option>Car Port</option>
    <option>One Car</option>
    <option>Two Car</option>
    <option>Three Car</option>
    <option>Two Car with RV</option>
    <option>Three Car with RV</option></select>
  </div>
  <div class="form-group">
    <label for="year" class="">Year:</label>
    <input type="year" class="form-control" name="year" id="year">
  </div>
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">Image:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}