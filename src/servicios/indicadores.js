import axios from '@/axios.js'

export const getIPC = async () => {
  return await axios.get('/indicadores/ipc')
}

export const getUTM = async () => {
  return await axios.get('/indicadores/utm')
}

export const getUF = async () => {
  return await axios.get('/indicadores/uf')
}

export const getDolar = async () => {
  return await axios.get('/indicadores/dolar')
}

export const getLastUpdate = async () => {
  return await axios.get('/indicadores/update')
}

export const getUTMuntil = async (date) => {
  return await axios.post(`/indicadores/utm`, { date })
}

export const getUFuntil = async (date) => {
  return await axios.post(`/indicadores/uf`, { date })
}

export const getDolaruntil = async (date) => {
  return await axios.post(`/indicadores/dolar`, { date })
}

export const getIPCuntil = async (date) => {
  return await axios.post(`/indicadores/ipc`, { date })
}
