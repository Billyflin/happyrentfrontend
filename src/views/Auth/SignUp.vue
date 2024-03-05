<template>
  <div class="bg-white">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div
                class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
              >
                <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                     :style="{ 'backgroundImage': 'url(' + Image + ')' }">
                </div>

              </div>
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                <div class="card card-plain">
                  <div class="pb-0 card-header bg-transparent mb-4">
                    <h4 class="font-weight-bolder">Registro </h4>
                    <p class="mb-0">Ingresa tus datos para crear una cuenta!</p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="submitForm">
                      <div v-if="err" class="row mb-3 mt-3">
                        <span class="badge badge-danger">{{err}}</span>
                      </div>
                      <div class="mb-3">
                        <material-input id="name" type="text" label="Nombre Usuario" name="name" size="lg"
                                        v-model="name" />
                      </div>
                      <div class="mb-3">
                        <material-input id="email" type="email" label="Correo" name="email" size="lg" v-model="email" />
                      </div>
                      <div class="mb-3">
                        <material-input id="password" type="password" label="Contraseña" name="password" size="lg"
                                        v-model="password" />
                      </div>
                      <div class="mb-3">
                        <material-input id="passwordConfirm" type="password" label="Confirma tu contraseña"
                                        name="passwordConfirm" size="lg" v-model="passwordConfirm" />
                      </div>
                      <div v-if="passwordMismatch" class="row mb-3 mt-3">
                        <span class="badge badge-danger">Las contraseñas no coinciden</span>
                      </div>
                      <material-checkbox v-model="accept" id="flexCheckDefault" class="font-weight-light" checked>
                        Acepto los
                        <a href="" class="text-dark font-weight-bolder"
                        >Términos y Condiciones</a
                        >
                      </material-checkbox>
                      <div class="text-center">
                        <material-button class="mt-4" variant="gradient" color="primary" fullWidth size="lg"
                        >Registrarse
                        </material-button
                        >
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Tienes una cuenta?
                      <router-link :to="{name: 'SignIn'}" class="text-primary text-gradient font-weight-bold"
                      >Sign In
                      </router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, ref, watch, watchEffect } from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import Image from '@/assets/img/illustrations/illustration-signin.jpg'
import { useAppStore,useRegisterFormStore } from '@/store/index.js'
import { useRouter } from 'vue-router'
import axios from 'axios'


const body = document.getElementsByTagName('body')[0]
const formStore = useRegisterFormStore()
const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store


const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const passwordMismatch = ref(false)
const accept = ref(false)
const err = ref('')

const router = useRouter()
const loading = ref(false)
const submitForm = () => {
  if (passwordMismatch.value) {
    console.log('Las contraseñas no coinciden');
    return;
  }
  if (!accept.value) {
    console.log('Debes aceptar los términos y condiciones');
    return;
  }
  const user = {
    username: name.value,
    password: password.value,
    email: email.value,
    authorityDtoSet: [
      {
        authorityName: "ROLE_PROVICIONAL"
      }
    ]
  };
  loading.value = true;

  axios.post(`${import.meta.env.VITE_SERVER_URL}:8080/api/signup`, user)
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          router.push({name: 'RegistroExitoso'});
        }
        loading.value = false;
      })
      .catch(error => {
        console.error(error);
        err.value = error.response.data.message;
        loading.value = false;
      });
};


watch([password, passwordConfirm], () => {
    passwordMismatch.value = password.value !== passwordConfirm.value
  }
)


watchEffect(() => {
})

onBeforeMount(() => {
  toggleEveryDisplay()
  toggleHideConfig()
  body.classList.remove('bg-gray-100')
})

onBeforeUnmount(() => {
  toggleEveryDisplay()
  toggleHideConfig()
  body.classList.add('bg-gray-100')
})
</script>
