// axios
import axios from 'axios'

const baseURL = 'http://c33b49f00dba.ngrok.io'
// const baseURL = 'http://localhost:8000'

export default axios.create({
  baseURL
})
