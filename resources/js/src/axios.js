// axios
import axios from 'axios'

// const baseURL = 'http://7a14824d3794.ngrok.io'
const baseURL = 'http://localhost:8000'

export default axios.create({
  baseURL
})
