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
        auth: null, isLoggedIn: false, errMsg: "", userInfo: null, rememberMe: false, isAdmin: false,
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
                    router.push({name: 'Products'});
                })
                .catch((err) => {
                    switch (err.response.status) {
                        case 400:
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
            router.push({name: 'SignIn'});

        }, setRememberMe(value) {  // Agrega este método
            this.rememberMe = value;
        },
    }, plugins: [createPersistedState({
        storage: window.localStorage, filter: (mutation, state) => state.rememberMe,
    }),],
});


export const useFormStore = defineStore({
    id: 'form',
    state: () => ({
        selectedCategory: null,
        formData: {
            product: {
                productId: null,
                productName: null,
                brand: null,
                price:null,
                category: {
                    categoryId: null,
                    categoryName: null
                },
                stock: null,
                images: []
            }
        },
        activeStep: 0,
        formSteps: 3,
        categories: [
            { "id": 1, "title": "Refrigeración", "name": "CoolingDetails", "icon": "ac_unit" },
            { "id": 2, "title": "Gráfica", "name": "GraphicsCardDetails", "icon": "desktop_windows" },
            { "id": 3, "title": "Placa Base", "name": "MotherboardDetails", "icon": "memory" },
            { "id": 4, "title": "Fuente de poder", "name": "PowerSupplyDetails", "icon": "power" },
            { "id": 5, "title": "Procesador", "name": "ProcessorDetails", "icon": "speed" },
            { "id": 6, "title": "Memoria Ram", "name": "RAMDetails", "icon": "memory" },
            { "id": 7, "title": "Almacenamiento", "name": "StorageDetails", "icon": "save" }
        ]

    }),
    getters: {
        activeClass: (state) => (index) => state.activeStep === index ? 'js-active position-relative' : ''
    },
    actions: {
        selectCategory(categoryId) {
            this.selectedCategory = categoryId;
            this.$set(this, 'formData', {});

        },
        updateFormData(data) {
            this.formData = {...this.formData, ...data};
            this.formData.product.category.categoryId = this.selectedCategory;
            this.formData.product.category.categoryName = this.categories[this.selectedCategory - 1].name;
        },
        async enviarFormulario() {
            const url = 'http://localhost:8080/motherboardDetails';
            const formData = new FormData();

            // Agrega las imágenes al formulario
            this.formData.product.images.forEach((image, index) => {
                // Convierte la cadena base64 de la imagen en un Blob
                const byteString = atob(image.imageData.split(',')[1]);
                const mimeString = image.imageData.split(',')[0].split(':')[1].split(';')[0];
                const ab = new ArrayBuffer(byteString.length);
                const ia = new Uint8Array(ab);
                for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                const blob = new Blob([ab], {type: mimeString});

                // Agrega el Blob al formulario
                formData.append(`images`, blob);
            });

            // Crea una copia de los datos del producto sin las imágenes
            const productDataWithoutImages = { ...this.formData };
            delete productDataWithoutImages.product.images;

            // Convierte los datos del producto (sin las imágenes) en una cadena JSON
            const productData = JSON.stringify(productDataWithoutImages);
            console.log(productData);
            // Convierte la cadena JSON en un Blob con el tipo de contenido 'application/json'
            const productBlob = new Blob([productData], {type: 'application/json'});

            // Agrega el Blob al formulario
            formData.append('motherboardDetails', productBlob);

            try {
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
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



export const useCartStore = defineStore({
    id: 'cart', state: () => ({
        items: [], cartItemCount: 0, selectedProduct: null
    }), actions: {
        addToCart(item) {
            const existingItem = this.items.find(i => i.productId === item.productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({...item, quantity: 1});
            }
            this.cartItemCount = this.items.reduce((total, item) => total + item.quantity, 0);
        }, removeFromCart(item) {
            const existingItem = this.items.find(i => i.productId === item.productId);
            if (existingItem) {
                existingItem.quantity--;
                if (existingItem.quantity <= 0) {
                    this.items = this.items.filter(i => i.productId !== item.productId);
                }
            }
            this.cartItemCount = this.items.reduce((total, item) => total + item.quantity, 0);
        }, clearCart() {
            this.items = [];
            this.cartItemCount = 0;
        }, selectProduct(product) { // Acción para seleccionar un producto
            this.selectedProduct = product;
        },
    },
});


export const useTodoStore = defineStore("todo", {
    state: () => ({
        todos: null, doneTodos: null, auth: getAuth(),
    }), actions: {
        async loadTodos(sortedRef) {
            onSnapshot(sortedRef, (querySnapshot) => {
                const fbTodos = [];
                const fbDones = [];
                querySnapshot.forEach((doc) => {
                    if (doc._document.data.value.mapValue.fields.userId.stringValue === this.auth.currentUser.uid) {
                        if (!doc.data().done) {
                            const todo = {
                                id: doc.id, content: doc.data().content, done: doc.data().done,
                            };
                            fbTodos.push(todo);
                        }
                        if (doc.data().done) {
                            const doneTodos = {
                                id: doc.id, content: doc.data().content, done: doc.data().done,
                            };
                            fbDones.push(doneTodos);
                        }
                    }
                });
                this.todos = fbTodos;
                this.doneTodos = fbDones;
            });
        }, addTodoList(list, text) {
            addDoc(collection(db, list), {
                userMail: this.auth.currentUser.email,
                userId: this.auth.currentUser.uid,
                content: text,
                done: false,
                date: Date.now(),
            });
        }, deleteTodoList(list, id) {
            deleteDoc(doc(db, list, id));
        }, deleteAllTodos() {

        }, setTodoDone(id, ref) {
            const index = this.todos.findIndex((todo) => todo.id === id); // to find index of selected id
            updateDoc(doc(ref, id), {
                done: !this.todos[index].done,
            });
        }, setTodoUndone(id, ref) {
            const index = this.doneTodos.findIndex((todo) => todo.id === id); // to find index of selected id
            updateDoc(doc(ref, id), {
                done: !this.doneTodos[index].done,
            });
        }, editTodo(id, ref, changedContent) {
            updateDoc(doc(ref, id), {
                content: changedContent
            });
        },
    },
});
