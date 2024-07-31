<template>
  <div class=" card">
    <div class="pb-0 card-header">
      <h3>
        Agregar Persona
      </h3>
    </div>
    <div class="card-body pt-4 p-3">
      <div class="row">
        <div class="col-md-3 mt-4">
          <material-input id="nombres" v-model="persona.nombre" is-required label="Nombres" variant="dynamic" />
        </div>
        <div class="col-md-3 mt-4">
          <material-input id="apellidoPaterno" v-model="persona.apellidoPaterno" is-required label="Apellido Paterno"
                          variant="dynamic" />
        </div>
        <div class="col-md-3 mt-4">
          <material-input id="apellidoMaterno" v-model="persona.apellidoMaterno" is-required label="Apellido Materno"
                          variant="dynamic" />
        </div>
        <div class="col-md-3 mt-4">
          <material-input id="rut" v-model="persona.rut" is-required label="RUT" type="rut"
                          variant="dynamic" />
        </div>
        </div>
        <div class="row mt-4">
        <div class="col-md-3 mt-4">
          <MaterialChoices id="estadoCivil" v-model:text-choice="persona.estadoCivil"
                           :options="opcionsEstadoCivil" label="Estado Civil" name="estadoCivil" />
        </div>
        <div class="col-md-3 mt-4">
          <MaterialChoices id="nacionalidad" v-model:text-choice="persona.nacionalidad" :options="nacionalidad"
                           label="Nacionalidad" name="Nacionalidad" />
        </div>
        <div class="col-md-4 mt-5">
          <material-input id="ocupacion" v-model="persona.ocupacion" is-required label="Ocupación" type="text"
                          variant="dynamic" />
        </div>
          <div class="col-md-2  mt-4">
            <MaterialChoices id="pronombres" v-model:text-choice="persona.tratamiento" :options="pronombres"
                             label="Pronombres" name="Pronombres" />
          </div>
        <div class="col-md-2 mt-4">
          <material-input id="telefono" v-model="persona.telefono" is-required label="Teléfono" placeholder="9 xxxxxxxx"
                          type="telefono"
                          variant="static" />
        </div>
          <div class="col-md-2 mt-4">
            <material-input
              id="FechaNacimiento"
              v-model="persona.fechaNacimiento"
              is-required
              label="Fecha de Nacimiento"
              placeholder="dd/mm/aaaa"
              type="date"
              variant="static"
            />
          </div>
        <div class="col-md-4 mt-4">
          <material-input id="email" v-model="persona.email" is-required label="Email" type="text"
                          variant="static" />
        </div>
          <div class="col-4 mt-4">
            <material-input
              id="confirmEmailRepresentanteLegal"
              label="Confimar Email"
              placeholder="Confirma Email"
              type="email"
              variant="static"

            />
          </div>
        <LocalidadForm v-model="persona.direccion" />
      </div>
    </div>
  </div>
  <div v-if="alertMessage" class="alert" :class="alertClass" role="alert">
    {{ alertMessage }}
  </div>

  <!-- Formulario de persona -->
  <div class="row">
    <material-button :disabled="isSending" class="mt-2 mb-6" full-width size="lg" variant="success" @click="emitData">
      Crear Persona
    </material-button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import router from '@/router/index.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import LocalidadForm from '@/views/Shared/LocalidadForm.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import { postPersona } from '@/servicios/personasService.js'

export default {
  components: {
    MaterialButton,
    LocalidadForm,
    MaterialInput,
    MaterialChoices
  },
  name: 'PropietarioForm',
  setup() {
    const persona = ref({
      type: 'persona',
      rut: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      telefono: '',
      ocupacion: '',
      direccion: {
        calle: '',
        numero: '',
        detalle: '',
        codigoPostal: '',
        pais: '',
        region: '',
        ciudad: ''
      },
      email: '',
      estadoCivil: ''
    })
    const v$ = useVuelidate()
    const isSending = ref(false)
    const alertMessage = ref('')
    const alertClass = ref('')

    return { persona, v$, isSending, alertMessage, alertClass }
  },
  data() {
    return {
      pronombres: [
        { value: 'Don.', text: 'Don' },
        { value: 'Doña.', text: 'Doña' }
      ],
      opcionsEstadoCivil: [
        { value: 'soltero', text: 'Soltero' },
        { value: 'casado', text: 'Casado' },
        { value: 'divorciado', text: 'Divorciado' },
        { value: 'viudo', text: 'Viudo' }
      ],
      nacionalidad: [
        { value: 'chile', text: 'Chile' },
        { value: 'argentina', text: 'Argentina' }
      ]
    }
  },
  emits: ['update:persona', 'next:step'],
  methods: {
    showAlert(message, type) {
      this.alertMessage = message
      this.alertClass = type === 'success' ? 'alert-success' : 'alert-danger'
      setTimeout(() => {
        this.alertMessage = ''
        this.alertClass = ''
      }, 3000)
    },
    async emitData() {
      await this.v$.$validate()
      if (!this.v$.$error) {
        this.isSending = true // Deshabilita el botón
        postPersona(this.persona).then((response) => {
          this.showAlert('Persona creada exitosamente.', 'success')
          setTimeout(() => {
            router.push('/Personas')
          }, 3000)
        }).catch((error) => {
          this.showAlert('Error al crear la persona: ' + error.response.data, 'error')
          console.log(error)
        })
      }
    }
  }
}
</script>
