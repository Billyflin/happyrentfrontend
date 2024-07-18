import axios from '../axios'

export const getPersonas = async () => {
  return await axios.get('/perfil/info')
}
