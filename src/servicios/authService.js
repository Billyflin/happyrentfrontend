import axios from '@/axios'

export const authenticate = async (username, password) => {
  return await axios.post('/api/v1/auth/authenticate', { username, password })
}

export const getCurrentUser = async () => {
  return await axios.get('/api/v1/auth/user')
}


export const changePassword = async (password, oldPassword) => {
  return await axios.post('/api/v1/auth/change-password', { password,oldPassword })
}

export const crearUsuario = async (usuario) => {
  return await axios.post('/api/v1/auth/perfil', usuario)
}


export const agregarCuentaBancaria = async (cuenta) => {
  return await axios.post('/api/v1/bank', cuenta)
}

export const obtenerCuentasBancarias = async () => {
  return await axios.get('/api/v1/bank')
}

export const borrarCuentaBancaria = async (id) => {
  return await axios.post(`/api/v1/bank/delete`, {id} )
}

export const setCuentaActual = async (id) => {
  return await axios.post('/api/v1/bank/current',{id} )
}

export const obtenerCuentaActual = async () => {
  return await axios.get('/api/v1/bank/current')
}