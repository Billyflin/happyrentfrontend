import axios from '@/axios'

export const getPersonas = async () => {
  return await axios.get('/api/v1/perfil/info')
}

export const postPersona = async (persona) => {
  return await axios.post('/api/v1/perfil', persona)
}

export const getPersona = async (id) => {
  return await axios.post(`/api/v1/perfil/info`, { id })
}

export const getSolicitud = async (id) => {
  return await axios.post(`/api/v1/perfil/info`, { id })
}
