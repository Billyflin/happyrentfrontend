import axios from '../axios'

export const getPropiedades = async () => {
  return await axios.get('/propiedad')
}
