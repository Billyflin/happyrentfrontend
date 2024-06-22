<template>
  <div class="container-fluid mt-4" v-if="isTokenValid">
    <div class="row mt-3 align-items-center">
      <div class="col-5">
        <router-link to="/">
          <div class="d-flex">
            <div class="row mt-3">
              <img alt="Logo" class="btn btn-link px-3" height="90" src="../../assets/img/logos/LogoHapp.svg" width="100" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-2 text-center">
        <h1>Solicitud</h1>
      </div>
    </div>
    <div id="Arrendatario" class="card">
      <div class="card-header">
        <h5>Datos del Arrendatario</h5>
      </div>
      <div class="card-body pt-0">
        <!--        Contenido?-->
        <div class="row" v-if="!sending">
          <div class="col-md-2 mt-4">
            <material-input id="rut" v-model="persona.rut" is-required label="RUT" type="rut"
                            variant="static" />
          </div>
          <div class="col-md-3 mt-4">
            <MaterialChoices id="estadoCivil" v-model:text-choice="persona.estadoCivil"
                             :options="opcionsEstadoCivil" label="Estado Civil" name="estadoCivil" />
          </div>
          <div class="col-md-3 mt-4">
            <MaterialChoices id="nacionalidad" v-model:text-choice="persona.nacionalidad" :options="nacionalidad"
                             label="Nacionalidad" name="Nacionalidad" />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="ocupacion" v-model="persona.ocupacion" is-required label="Ocupación" type="text"
                            variant="static" />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="telefono" v-model="persona.telefono" is-required label="Teléfono"
                            placeholder="9 xxxxxxxx"
                            type="telefono"
                            variant="static" />
          </div>
          <div class="col-md-6 mt-4">
            <material-input id="email" v-model="persona.email" is-required label="Email" type="text"
                            variant="static" />
          </div>
          <div class="col-md-2 mt-4">
            <MaterialChoices id="pronombres" v-model:text-choice="persona.tratamiento" :options="pronombres"
                             label="Pronombres" name="Pronombres" />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="nombres" v-model="persona.nombre" is-required label="Nombres"
                            variant="static" />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="apellidoPaterno" v-model="persona.apellidoPaterno" is-required
                            label="Apellido Paterno"
                            variant="static" />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="apellidoMaterno" v-model="persona.apellidoMaterno" is-required
                            label="Apellido Materno"
                            variant="static" />
          </div>
          <LocalidadForm v-model="persona.direccion" />


        </div>
        <div class="row" v-else>
          <div class="col-12 text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Enviando...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <material-button :disabled="sending" class="mt-4 " @click="emitData" full-width size="lg" variant="success">Enviar
    </material-button>
  </div>
  <p>{{ token }}</p>
  <p>{{ isTokenValid }}</p>
  https://localhost:8443/temporal?idUsuario=


</template>

<script>
import { useAppStore } from '@/store/index.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useVuelidate } from '@vuelidate/core'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { validate as isValidUUID } from 'uuid'
import axios from 'axios'

export default {
  name: 'Solicitud',
  components: { MaterialChoices, LocalidadForm, MaterialSwitch, MaterialButton, MaterialInput },
  props: {
    token: String,
    required: true
  }, data() {
    return {
      pronombres: [
        { value: 'Sr.', text: 'Sr.' },
        { value: 'Sra.', text: 'Sra.' },
        { value: 'Srta.', text: 'Srta.' }
      ],
      opcionsEstadoCivil: [
        { value: 'Soltero', text: 'Soltero' },
        { value: 'Casado', text: 'Casado' },
        { value: 'Divorciado', text: 'Divorciado' },
        { value: 'Viudo', text: 'Viudo' },
        { value: 'Separado', text: 'Separado' },
        { value: 'Conviviente', text: 'Conviviente' }
      ],
      nacionalidad: [
        { value: 'Chile', text: 'Chile' },
        { value: 'Argentina', text: 'Argentina' },
        { value: 'Perú', text: 'Perú' }
      ]
    }
  },
  methods: {
    async emitData() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.sending = true
        try {
          await axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/temporal?idUsuario=${this.token}`,
            this.persona
          ).then((it) => {
              console.log(it)
              this.$router.push({ name: 'Dashboard' })
            }
          ).catch((err) => {
              console.error(err)
              if (err.response && err.response.status === 500 && err.response.data === 'Token Invalido.') {
                this.isTokenValid = false
              }
              console.error(err)
            }
          ).finally(() => {
              this.sending = false
            }
          )
        } catch (error) {
          console.error(error)
        }
      }
    }

  },
  setup(props) {
    const store = useAppStore()
    const sending = ref(false)
    const isTokenValid = computed(() => isValidUUID(props.token))
    const { toggleEveryDisplay } = store
    const persona = ref({
      type: 'persona',
      rut: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      ocupacion: '',
      direccion: {
        calle: '',
        numero: '',
        detalle:'',
        codigoPostal: '',
        pais: '',
        region: '',
        ciudad: ''
      },
      email: '',
      tratamiento: '',
      estadoCivil: ''
    })
    const v$ = useVuelidate()


    onMounted(() => {
      toggleEveryDisplay()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
    })
    return {
      persona,
      v$,
      isTokenValid,
      sending
    }
  }
}
</script>