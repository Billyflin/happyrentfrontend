import { defineStore } from 'pinia'
import { getPersona } from '@/servicios/personasService.js'
import { getPropiedad } from '@/servicios/propiedadesService.js'

export const useContratosStore = defineStore('contratos', {
  state: () => ({
    codeudor: null,
    arrendatario: null,
    propiedad: null,
    contratoError: null,
    loading: false
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'contratos',
        storage: localStorage
      }
    ]
  },
  actions: {
    async fetchPropiedad(id) {
      try {
        this.loading = true
        console.log('id', id)
        const response = await getPropiedad(id)
          .then((response) => {
            console.log('response', response)
            this.propiedad = response.data
          })
          .finally(() => {
            console.log('finally')
            this.loading = false
          })
      } catch (err) {
        console.error(err)
      } finally {
      }
    },
    clearContratoStore() {
      this.contratoError = null
      this.codeudor = null
      this.arrendatario = null
      this.propiedad = null
    },
    async fetchArrendatario(id) {
      this.loading = true
      try {
        const response = await getPersona(id)
        this.arrendatario = response.data
      } catch (error) {
        console.error('Error fetching arrendatario:', error)
        this.contratoError = 'Error fetching arrendatario'
      } finally {
        this.loading = false
      }
    },
    async fetchCodeudor(id) {
      this.loading = true
      try {
        const response = await getPersona(id)
        this.codeudor = response.data
      } catch (error) {
        console.error('Error fetching codeudor:', error)
        this.contratoError = 'Error fetching codeudor'
      } finally {
        this.loading = false
      }
    },
    clearAll() {
      this.codeudor = null
      this.arrendatario = null
      this.propiedad = null
      this.contratoError = null
    }
  }
})
