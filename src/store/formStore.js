import { defineStore } from 'pinia'

export const useRegisterFormStore = defineStore({
  id: 'registerFormStore',
  state: () => ({
    selectedCategory: null,
    form: {
      username: '',
      password: '',
      id: 0,
      persona: {
        id: 0,
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        nombreCompleto: '',
        direccion: {
          id: 0,
          calle: '',
          numero: 1,
          detalle: '',
          ciudad: '',
          region: '',
          pais: '',
          codigoPostal: ''
        },
        telefono: '',
        email: '',
        estadoCivil: '',
        nacionalidad: ''
      },
      isActivated: true,
      email: '',
      authorities: [
        {
          authority: ''
        }
      ],
      firstLogin: true,
      activated: true
    },
    activeStep: 0,
    formSteps: 4
  }),
  getters: {
    activeClass: (state) => (index) =>
      state.activeStep === index ? 'js-active position-relative' : ''
  },
  actions: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId
      this.$set(this, 'formData', {})
    },
    updateFormData(data) {
      this.formData = { ...this.formData, ...data }
      this.formData.product.category.categoryId = this.selectedCategory
      this.formData.product.category.categoryName = this.categories[this.selectedCategory - 1].name
    },
    nextStep() {
      if (this.selectedCategory === null) {
        alert('Por favor, selecciona una categoría antes de continuar.')
        return
      }
      if (this.activeStep < this.formSteps) {
        this.activeStep += 1
      }
    },
    prevStep() {
      if (this.activeStep > 0) {
        this.activeStep -= 1
      }
    }
  }
})
