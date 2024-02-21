<template>
  <div class="pt-3 bg-white multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <div class="container-fluid">
      <div class="card card-body mx-3 mx-md-1 mt-n6">
        <div class="row">
          <div class="mt-3 row">
            <div class="col-12 col-md-6 col-xl-4 position-relative">
              <div class="card card-plain h-100">
                <div class="p-3 pb-0 card-header">
                  <h6 class="mb-0">Perfil</h6>
                  <p v-if="firstloginData.perfil === '1'" class="text-sm mb-0">Corredor</p>
                  <p v-if="firstloginData.perfil === '2'" class="text-sm mb-0">Propietario</p>
                </div>
                <div class="p-3 pb-0 card-header mt-0">
                  <h6 class="mb-0">Datos empresa</h6>
                </div>
                <div class="p-3 card-body mt-0">
                  <ul class="list-group">
                    <li class="pt-0 text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Razón Social:</strong> {{ firstloginData.empresaData.rsocial }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Rut:</strong> {{ firstloginData.empresaData.rutempresa }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Giro:</strong> {{ firstloginData.empresaData.giro }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Email: </strong> {{ firstloginData.empresaData.emailempresa }}
                    </li>
                  </ul>
                </div>
                <div v-if="firstloginData.empresaData.tipoEmpresa === '1'" class="p-3 pb-0 card-header mt-0">
                  <h6 class="mb-0">Representante Legal</h6>
                </div>
                <div v-if="firstloginData.empresaData.tipoEmpresa === '1'" class="p-3 card-body mt-0">
                  <ul class="list-group">
                    <li class="pt-0 text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Nombres:</strong> {{ firstloginData.empresaData.representante.nombres }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Apellido Paterno:</strong>
                      {{ firstloginData.empresaData.representante.apellido_paterno }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">Apellido Materno:</strong>
                      {{ firstloginData.empresaData.representante.apellido_materno }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">rut: </strong>
                      {{ firstloginData.empresaData.representante.rutrepresentante }}
                    </li>
                    <li class="text-sm border-0 list-group-item ps-0">
                      <strong class="text-dark">mail: </strong>
                      {{ firstloginData.empresaData.representante.emailrepresentante }}
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="vertical dark" />
            </div>
            <div class="col-12 col-md-6 col-xl-4 mt-md-0 mt-4 position-relative">
              <div class="p-3 pb-0 card-header">
                <h6 class="mb-0">Datos Banco</h6>
              </div>
              <div class="p-3 card-body mt-0">
                <ul class="list-group">
                  <li class="pt-0 text-sm border-0 list-group-item ps-0">
                    <strong class="text-dark">Banco:</strong> {{ firstloginData.bancoData.banco_name }}
                  </li>
                  <li class="text-sm border-0 list-group-item ps-0">
                    <strong class="text-dark">Rut Cuenta:</strong> {{ firstloginData.bancoData.rutcuenta }}
                  </li>
                  <li v-if="firstloginData.bancoData.tipoCuenta === 1" class="text-sm border-0 list-group-item ps-0">
                    <strong class="text-dark">tipoCuenta:</strong> Corriente
                  </li>
                  <li v-if="firstloginData.bancoData.tipoCuenta === 2" class="text-sm border-0 list-group-item ps-0">
                    <strong class="text-dark">tipoCuenta:</strong> Vista
                  </li>
                  <li class="text-sm border-0 list-group-item ps-0">
                    <strong class="text-dark">numeroCuenta: </strong> {{ firstloginData.bancoData.numeroCuenta }}
                  </li>
                  <li class="text-sm border-0 list-group-item ps-0">
                    <strong class="text-dark">mail: </strong> {{ firstloginData.bancoData.emailBanco }}
                  </li>
                </ul>
              </div>
              <hr class="vertical dark" />
            </div>
            <div class="mt-4 col-12 col-xl-4 mt-xl-0">
              <div class="card card-plain h-100">
                <div class="p-3 pb-0 card-header">
                  <h6 class="mb-0">Plan</h6>
                </div>
                <div class="p-3 card-body">aca poner informacion del plan, que se muestre en seccion planes.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 button-row d-flex">
      <button class="mb-0 btn bg-gradient-light js-btn-prev" type="button" title="Prev" @click="executePrevStep">
        Prev
      </button>
      <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="executeNextStep">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import {firstloginStore} from '@/store'
import router from '@/router'
import {useUserStore} from '@/store/user'
import {axiosPublic} from '@/axiosConfig'

export default {
  props: {
    nextStep: Function,
    prevStep: Function,
  },

  setup(props) {
    const firstloginData = firstloginStore()
    const selectedPlan = ref('')
    const selectedOption = ref(firstloginData.perfil)
    const userStore = useUserStore()

    const jsonData = JSON.stringify(firstloginData)
    watch(
      () => firstloginData,
      (newFirstloginData, oldFirstloginData) => {
        selectedOption.value = newFirstloginData.perfil
      },
      {deep: true}
    )
    const executeNextStep = async () => {
      const jsonData = JSON.stringify(firstloginData)
      console.log('firstloginData en formato JSON:', jsonData)

      const response = await axiosPublic.post('/firstlogin', {body: jsonData})

      if (response.status == '200') {
        await router.push('/sign-in')
      } else {
        console.error('Error al hacer la solicitud:', error)
      }

      /*
      fetch('http://localhost:3000/firstlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      })
        .then(response => response.text())
        .then(data => console.log('Respuesta del servidor:', data))
        .catch(error => console.error('Error al hacer la solicitud:', error));
        */
      // await router.push('/sign-in');
    }
    const executePrevStep = () => {
      props.prevStep()
    }

    return {
      firstloginData,
      userStore,
      selectedOption,
      selectedPlan,
      executeNextStep,
      executePrevStep,
      uniqueId: Math.random().toString(36).substr(2, 9), // Genera un ID único
    }
  },
}
</script>
