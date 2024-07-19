import axios from 'axios'

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
  'Access-Control-Allow-Credentials': true
}

axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default instance
