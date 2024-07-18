import { defineStore } from 'pinia'
import { getPropiedades } from '../servicios/propiedadesService'

export const usePropiedadesStore = defineStore('propiedades', {
  state: () => ({
    propiedades: [],
  }),
  actions: {
    async fetchPropiedades() {
      try {
        const response = await getPropiedades()
        this.propiedades = response.data
      } catch (err) {
        console.error(err)
      }
    },
  }
})
