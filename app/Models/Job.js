export class Job {
  constructor(jobData){
  this.jobTitle = jobData.jobTitle
  this.salary = jobData.salary
  this.companyName = jobData.companyName
  this.imgUrl = jobData.imgUrl
  this.description = jobData.description
  }
  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-4 mb-4 listing">
      <div class="card custom-font">
        <img src="${this.imgUrl}" alt="listing image" class="rounded">
        <div class="card-body">
          <p class="d-flex justify-content-between">
          ${this.jobTitle} | ${this.companyName} </p>
          <p class="d-flex justify-content-between">${this.salary}</p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}