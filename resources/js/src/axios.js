// axios
import axios from 'axios'

const baseURL = 'http://localhost:8000'

export default axios.create({
  baseURL,
  // You can add your headers here
  headers: {
      'type': `application/json`
  }
})
