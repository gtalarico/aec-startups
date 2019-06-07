import axios from 'axios'

const $axios = axios.create({
  baseURL: '/.netlify/functions',
  timeout: 10000 // 10 seconds
})

// Response Interceptor to handle and log errors
$axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default {
  fetchRecords() {
    return $axios.get('airtable').then(response => {
      return response.data
    })
  }
}
