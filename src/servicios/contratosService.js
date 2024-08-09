import axios from '@/axios'

export const getMisContratos = async () => {
  return await axios.get('/api/v1/contrato')
}
export const getContrato = async (id) => {
  console.log(id)
  return await axios.post(`/api/v1/contrato/info`, {id});
}

export const getContratosProyection = async () => {
  return axios.get(`/api/v1/contrato/contratos`)
}

export const postContrato = async (contrato) => {
  return await axios.post('/api/v1/contrato', contrato)
}

export const getDocumento = async (id) => {
  return await axios.get(`/api/v1/contrato/reporte/${id}`, { responseType: 'blob' }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `contrato_${id}.pdf`) // o cualquier otro nombre de archivo
    document.body.appendChild(link)
    link.click()
  })
    .catch((error) => {
      console.error(error)
    })
}

export const getContratoByPropiedadId = async (id) => {
  return await axios.post('/api/v1/contrato/active', { id })
}