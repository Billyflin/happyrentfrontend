import axios from '@/axios'

export const getPropiedades = async () => {
  return await axios.get('/api/v1/propiedad')
}

export const getPropiedad = async (id) => {
  return axios.post(`/api/v1/propiedad/info`,{id})
}

export const getPropiedadesProyection = async () => {
  return axios.get(`/api/v1/resumenPropiedades`)
}

export const getPropiedadById = async (id) => {
  return axios.post('/api/v1/propiedad/detalle', { id })
}

export const createPropiedad = async (formData) => {
  return axios.post('/api/v1/propiedad/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const updatePropiedad = async (propiedad) => {
  return axios.put(`/api/v1/propiedad/${propiedad.id}`, propiedad)
}

export const deletePropiedad = async (id) => {
  return await axios.delete(`/api/v1/propiedad/delete`, {
    data: { id }
  });
}

export const getPropiedadServices = async (id) => {
  return await axios.post('/api/v1/propiedad/servicios', { id })
}

export const addPropiedadService = async (idPropiedad, numeroCliente,proveedorServicio) => {
  return await axios.post('/api/v1/propiedad/servicios/save', { idPropiedad, numeroCliente,proveedorServicio })
}

export const testPropiedadService = async ( numeroCliente,proveedorServicio) => {
  return await axios.post('/api/v1/propiedad/servicios/test', {  numeroCliente,proveedorServicio })
}

export const deletePropiedadService = async (id) => {
  return await axios.post('/api/v1/propiedad/servicios/delete', { id })
}

export const saveInventario = async (inventario, archivos, idPropiedad) => {
  console.log(idPropiedad, "desde el form")
  const formData = new FormData();

  formData.append('inventario', new Blob([JSON.stringify(inventario)], { type: 'application/json' }));

  archivos.forEach((archivo) => {
    formData.append('archivos', archivo);
  });

  formData.append('idPropiedad', idPropiedad);

  try {
    const response = await axios.post('/api/v1/propiedad/guardar-inventario', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al guardar el inventario:', error);
    throw error;
  }
}

export const getInventario = async (id) => {
  return await axios.post(`/api/v1/propiedad/inventario`,{id})
}