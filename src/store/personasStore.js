import { defineStore } from 'pinia'
import { getPersona, getPersonas, getSolicitud } from '@/servicios/personasService.js'

export const usePersonasStore = defineStore('personas', {
  state: () => ({
    persona: null,
    personas: [],
    solicitud: null
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
    async fetchPersona(id) {
      try {
        const response = await getPersona(id)
        this.persona = response.data
        console.log(this.persona, 'Persona')
      } catch (err) {
        console.error(err)
      }
    },
    async fetchSolicitud(id) {
      try {
        const response = await getSolicitud(id)
        this.solicitud = response.data
      } catch (err) {
        console.error(err)
      }
    }
  }
})
