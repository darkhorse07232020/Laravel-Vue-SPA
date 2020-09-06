// axios
import axios from 'axios'

// const baseURL = 'http://dd17c0dde83b.ngrok.io'
const baseURL = 'http://localhost:8000'

export default axios.create({
  baseURL
})
