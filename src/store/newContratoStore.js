import { defineStore } from 'pinia'

export const useNewContratoStore = defineStore('newContrato', {
  state: () => ({
    valorRenta: 0,
    moneda: 'Pesos',
    periodoReajusteContrato: 'Anual',

    fechaInicioContrato: new Date(),

    mesesGarantia: 1,
    valorCorretaje: 10,

    duracionMeses: 2,
    plazoAvisoDias: 30,
    garantia: 2,

    comparecencia: null,
    clausula1: null,
    clausula2: null,
    clausula3: null,
    clausula4: null,
    clausula5: null,
    clausula6: null,
    clausula7: null,
    clausula8: null,
    clausula9: null,
    clausula10: null,
    clausula11: null,
    clausula12: null,
    clausula13: null,
    clausula14: null,
    clausula15: null,
    clausula16: null,
    clausula17: null,
    clausula18: null,

    comparecenciaEdit: false,
    clausula1edit: false,
    clausula2edit: false,
    clausula3edit: false,
    clausula4edit: false,
    clausula5edit: false,
    clausula6edit: false,
    clausula7edit: false,
    clausula8edit: false,
    clausula9edit: false,
    clausula10edit: false,
    clausula11edit: false,
    clausula12edit: false,
    clausula13edit: false,
    clausula14edit: false,
    clausula15edit: false,
    clausula16edit: false,
    clausula17edit: false,
    clausula18edit: false
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'newContrato',
        storage: localStorage
      }
    ]
  },
  actions: {
    clearAll() {
      this.valorRenta = 0
      this.moneda = 'Pesos'
      this.periodoReajusteContrato = 'Anual'
      this.fechaInicioContrato = new Date()
      this.mesesGarantia = 1
      this.valorCorretaje = 10
      this.duracionMeses = 2
      this.plazoAvisoDias = 30
      this.garantia = 2
      this.comparecencia = null
      this.clausula1 = null
      this.clausula2 = null
      this.clausula3 = null
      this.clausula4 = null
      this.clausula5 = null
      this.clausula6 = null
      this.clausula7 = null
      this.clausula8 = null
      this.clausula9 = null
      this.clausula10 = null
      this.clausula11 = null
      this.clausula12 = null
      this.clausula13 = null
      this.clausula14 = null
      this.clausula15 = null
      this.clausula16 = null
      this.clausula17 = null
      this.clausula18 = null
      this.comparecenciaEdit = false
      this.clausula1edit = false
      this.clausula2edit = false
      this.clausula3edit = false
      this.clausula4edit = false
      this.clausula5edit = false
      this.clausula6edit = false
      this.clausula7edit = false
      this.clausula8edit = false
      this.clausula9edit = false
      this.clausula10edit = false
      this.clausula11edit = false
      this.clausula12edit = false
      this.clausula13edit = false
      this.clausula14edit = false
      this.clausula15edit = false
      this.clausula16edit = false
      this.clausula17edit = false
      this.clausula18edit = false
    },
    updateClausula(clausulaKey, content) {
      this[clausulaKey] = content
    }
  }
})
