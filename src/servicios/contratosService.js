import axios from '../axios'

export const getContratos = async () => {
  return await axios.get('/contrato')
}
