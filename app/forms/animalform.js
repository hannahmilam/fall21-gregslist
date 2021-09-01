export function getAnimalFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.animalsController.addAnimal()"
  id="animal-form">
  <div class="form-group"><label for="animalType">Type of Animal:</label>
  <input type="text" class="form-control" name="animalType" id="animalType">
  </div>

  <div class="form-group"><label for="breed">Breed of Animal:</label>
  <input type="text" class="form-control" name="breed" id="breed">
  </div>

  <div class="form-group"><label for="gender">Gender:</label>
  <input type="text" class="form-control" name="gender" id="gender">
  </div>

  <div class="form-group"><label for="price">Price:</label>
  <input type="text" class="form-control" name="price" id="price">
  </div>

  <div class="form-group">
    <label for="description" class="">description:</label>
    <input type="text" class="form-control" name="description" id="description" rows="5">
  </div>

  <div class="form-group">
    <label for="age" class="">Age:</label>
    <input type="text" class="form-control" name="age" id="age" rows="5">
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