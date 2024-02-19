import {defineStore} from 'pinia'

import axios from 'axios';

import router from "@/router";
import {createPersistedState} from "pinia-plugin-persistedstate";

export const useAppStore = defineStore({
    id: 'app', state: () => ({
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        sidebarType: 'bg-gradient-dark',
        color: 'primary',
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
    }), actions: {
        toggleConfigurator() {
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
            this.isNavFixed = this.isNavFixed === false;
        }, toggleEveryDisplay() {
            this.showNavbar = !this.showNavbar
            this.showSidenav = !this.showSidenav
            this.showFooter = !this.showFooter
        }, toggleHideConfig() {
            this.hideConfigButton = !this.hideConfigButton
        }, setColor(payload) {
            this.color = payload
        },
    }
})


export const useAuthStore = defineStore("auth", {
    state: () => ({
        auth: null, isLoggedIn: false, errMsg: "", userInfo: null, rememberMe: false, isAdmin: false,propiedades: [],
    }), persist: true, actions: {
        async loginHandler(username, password) {
            await axios.post('http://localhost:8080/api/authenticate', {username, password}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    this.auth = response.data.token;
                    this.isLoggedIn = true;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.auth}`;
                    this.getCurrentUser();
                    router.push({name: 'Propiedades'});
                })
                .catch((err) => {
                    switch (err.response.status) {
                        case 400:
                            this.errMsg = "Invalid username or password";
                            break;
                        case 401:
                            this.errMsg = "Invalid username or password";
                            break;
                        case 404:
                            this.errMsg = "No account found with that username";
                            break;
                        default:
                            this.errMsg = "An error occurred";
                            break;
                    }
                });
        }, async getCurrentUser() {
            if (this.auth) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.auth}`;
                await axios.get('http://localhost:8080/api/user', {})
                    .then((response) => {
                        this.userInfo = response.data;
                        this.isAdmin = this.userInfo.authorityDtoSet.some(a => a.authorityName === 'ROLE_ADMIN');
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        }, userSignOut() {
            this.auth = null;
            this.isLoggedIn = false;
            this.userInfo = null;
            this.rememberMe = false;
            this.isAdmin = false;
            delete axios.defaults.headers.common['Authorization'];
            this.propiedades = []
            router.push({name: 'SignIn'});

        }, setRememberMe(value) {  // Agrega este método
            this.rememberMe = value;
        }, async getPropiedades() {
            if (this.userInfo) {
                const userId = this.userInfo.persona.id
                await axios.get(`http://localhost:8080/propiedad/user/${userId}`)
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
        storage: window.localStorage, filter: (mutation, state) => state.rememberMe,
    }),],
});


export const useRegisterFormStore = defineStore({
    id: 'registerForm',
    state: () => ({
        form: {
            username: '',
            password: '',
            nickname: '',
            persona: {
                nombres: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                email: '',
                direccion: {
                    calle: '',
                    numero: null,
                    ciudad: '',
                    region: '',
                    pais: '',
                    codigoPostal: ''
                },
                telefono: '',
                estadoCivil: '',
                nacionalidad: ''
            },
            authorityDtoSet: []
        }
    }),
    actions: {
        setForm(payload) {
            this.form = payload;
        },
        setAuthority(authorityName) {
            this.form.authorityDtoSet.push({ authorityName });
        }
    }
});
