import { defineStore } from 'pinia'
import { getPropiedad, getPropiedades } from '../servicios/propiedadesService'

export const usePropiedadesStore = defineStore('propiedades', {
  state: () => ({
    propiedades: [],
    propiedad: null,
    loading: false
  }),
  actions: {
    async fetchPropiedad(id) {
      try {
        this.loading = true
        console.log('id', id)
        const response = await getPropiedad(id).then(
          (response) => {
            console.log('response', response)
            this.propiedad = response.data
          }
        ).finally(
          () => {
            console.log('finally')
            this.loading = false
          }
        )
      } catch (err) {
        console.error(err)
      } finally {

      }
  }
  }
})
