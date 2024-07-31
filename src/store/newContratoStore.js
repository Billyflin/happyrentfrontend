import { defineStore } from 'pinia'

export const useNewContratoStore = defineStore('newContrato', {
  state: () => ({
    valorRenta: 0,



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
    clausula18edit: false,
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
    updateClausula(clausulaKey, content) {
      this[clausulaKey] = content;
    }
  }
})
