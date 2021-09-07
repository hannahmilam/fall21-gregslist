import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

// @ts-ignore
const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jobs'
})
class JobsService {
  async addJob(jobData) {
  let res = await api.post('', jobData)
  console.log(res);
  ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async getJob(){
    let res = await api.get()
    console.log(res)
    ProxyState.jobs = res.data.map(j => new Job(j))
    console.log(res)
  }

  async deleteJob(jobId){
    await api.delete(jobId)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobId)
  }

}

export const jobsService = new JobsService()