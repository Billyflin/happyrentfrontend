import axios from '../axios'

export const authenticate = async (username, password) => {
  return await axios.post('/auth/authenticate', { username, password })
}

export const getCurrentUser = async () => {
  return await axios.get('/auth/user')
}
