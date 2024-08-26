import axios from '@/axios.js'

export const getSolicitudes = async () => {
  return await axios.get('/api/v1/temporal')
}

export const aceptarSolicitud = async (id) => {
  return await axios.post('/api/v1/temporal/real', { idUsuario: id })
}

export const rechazarSolicitud = async (id) => {
  return await axios.post('/api/v1/temporal/eliminar', { idUsuario: id })
}


export const solicitarDatosCorreo = async ( email, carnet, liquidaciones, certificadoAFP, certificadoDicom, carpetaTributaria, contratoTrabajo) => {
  return await axios.post(`/api/v1/auth/perfil-temporal`, {  email, carnet, liquidaciones, certificadoAFP, certificadoDicom, carpetaTributaria, contratoTrabajo })
}

export const createSolicitud = async (token,formData) => {
  console.log(token)
  return await axios.post(`/api/v1/temporal?idUsuario=${token}`, formData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
