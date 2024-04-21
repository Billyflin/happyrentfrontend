import { defineStore } from 'pinia'

import axios from 'axios'

import router from '@/router'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import * as process from 'echarts'

export const useAppStore = defineStore({
  id: 'app', state: () => ({
    hideConfigButton: true,
    isPinned: true,
    showConfig: false,
    sidebarType: 'bg-white',
    color: 'happLight',
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    isDarkMode: false,
    navbarFixed: 'position-sticky shadow-blur left-auto top-1 z-index-sticky px-0 mx-4',
    absolute: 'position-absolute px-4 mx-0 w-100 z-index-2',
    bootstrap: null
  }), actions: {
    toggleConfigurator() {
      this.hideConfigButton = !this.hideConfigButton
      this.showConfig = !this.showConfig

    }, navbarMinimize() {
      const sidenav_show = document.querySelector('.g-sidenav-show')

      if (sidenav_show.classList.contains('g-sidenav-pinned')) {
        sidenav_show.classList.remove('g-sidenav-pinned')
        this.isPinned = true
      } else {
        sidenav_show.classList.add('g-sidenav-pinned')
        this.isPinned = false
      }
    }, navbarFixed() {
      this.isNavFixed = this.isNavFixed === false
    }, toggleEveryDisplay() {
      this.showNavbar = !this.showNavbar
      this.showSidenav = !this.showSidenav
      this.showFooter = !this.showFooter
    }, toggleHideConfig() {
      this.hideConfigButton = !this.hideConfigButton
    }, setColor(payload) {
      this.color = payload
    }
  }
})


export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: null, isLoggedIn: false, errMsg: '', userInfo: {"authorityDtoSet":[]},
    rememberMe: false, isAdmin: false, propiedades: [],
    propiedad: { },
    personas: [],
  }), persist: true, actions: {
    async loginHandler(username, password) {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}:8080/api/authenticate`, { username, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          this.auth = response.data.token
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.auth}`
          this.getCurrentUser()
          this.isLoggedIn = true
        })
        .catch((err) => {
          switch (err.response.status) {
            case 400:
              this.errMsg = 'Invalid username or password'
              break
            case 401:
              this.errMsg = 'Invalid username or password'
              break
            case 404:
              this.errMsg = 'No account found with that username'
              break
            default:
              this.errMsg = 'An error occurred'
              break
          }
        })
    }, async getCurrentUser() {
      if (this.auth) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.auth}`
        await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/api/user`, {})
          .then((response) => {
            this.userInfo = response.data
            this.isAdmin = this.userInfo.authorityDtoSet.some(a => a.authorityName === 'ROLE_ADMIN')
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }, userSignOut() {
      this.auth = null
      this.isLoggedIn = false
      this.userInfo = null
      this.rememberMe = false
      this.isAdmin = false
      delete axios.defaults.headers.common['Authorization']
      this.propiedades = []
      this.personas = []
      router.push({ name: 'SignIn' })

    }, setRememberMe(value) {  // Agrega este método
      this.rememberMe = value
    },
 async getPersonas() {
      if (this.userInfo) {
        await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/personas/all`)
          .then((response) => {
            this.personas = response.data
            console.log(response.data)
          })
          .catch((err) => {
            console.error(err)
          })
      }

 }
  , async getPropiedades() {
      if (this.userInfo) {
        const userId = this.userInfo.id
        await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/propiedad`)
          .then((response) => {
            this.propiedades = response.data
            console.log(response.data)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
  }, plugins: [createPersistedState({
    storage: window.localStorage, filter: (mutation, state) => state.rememberMe
  })]
})


export const useRegisterFormStore = defineStore({
  id: 'registerFormStore', state: () => ({
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
      authorityDtoSet: [{
        authorityName: ''
      }],
      firstLogin: true,
      activated: true
    },
    activeStep: 0,
    formSteps: 4
  }), getters: {
    activeClass: (state) => (index) => state.activeStep === index ? 'js-active position-relative' : ''
  },actions: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
      this.$set(this, 'formData', {});

    },
    updateFormData(data) {
      this.formData = {...this.formData, ...data};
      this.formData.product.category.categoryId = this.selectedCategory;
      this.formData.product.category.categoryName = this.categories[this.selectedCategory - 1].name;
    },
    nextStep() {
      if (this.selectedCategory === null) {
        alert('Por favor, selecciona una categoría antes de continuar.');
        return;
      }
      if (this.activeStep < this.formSteps) {
        this.activeStep += 1;
      }
    },
    prevStep() {
      if (this.activeStep > 0) {
        this.activeStep -= 1;
      }
    }
  }
});
