import { defineStore } from 'pinia'
import { getPersonas } from '@/servicios/personasService.js'

export const usePersonasStore = defineStore('personas', {
  state: () => ({
    personas: [],
  }),
  actions: {
    async fetchPersonas() {
      try {
        const response = await getPersonas()
        this.personas = response.data
      } catch (err) {
        console.error(err)
      }
    },
  }
})
