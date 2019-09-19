import axios from 'axios'

const api = {
  requestVoteData(url, params = {}) {
    return axios.get(url, {
      params
    })
  }
}
export {
  api
}
