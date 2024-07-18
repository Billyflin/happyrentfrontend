import { defineStore } from 'pinia'
import { getContratos } from '../servicios/contratosService'

export const useContratosStore = defineStore('contratos', {
  state: () => ({
    contratos: [],
  }),
  actions: {
    async fetchContratos() {
      try {
        const response = await getContratos()
        this.contratos = response.data
      } catch (err) {
        console.error(err)
      }
    },
  }
})
