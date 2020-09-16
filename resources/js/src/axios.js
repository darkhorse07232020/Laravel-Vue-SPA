// axios
import axios from 'axios'

// const baseURL = 'http://279d840705bb.ngrok.io'
const baseURL = 'http://localhost:8010'

export default axios.create({
  baseURL
})
