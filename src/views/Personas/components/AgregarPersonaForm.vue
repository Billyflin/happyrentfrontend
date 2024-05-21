<template>
  <div class=" card">
    <div class="pb-0 card-header">
      <h3>
        Agregar Persona
      </h3>
    </div>
    <div class="card-body pt-4 p-3">
      <div class="row">
        <div class="col-md-4 mt-4">
          <material-input id="nombres" variant="dynamic" is-required label="Nombres" v-model="persona.nombre" />
        </div>
        <div class="col-md-4 mt-4">
          <material-input id="apellidoPaterno" variant="dynamic" is-required label="Apellido Paterno"
                          v-model="persona.apellidoPaterno" />
        </div>
        <div class="col-md-4 mt-4">
          <material-input id="apellidoMaterno" variant="dynamic" is-required label="Apellido Materno"
                          v-model="persona.apellidoMaterno" />
        </div>
        <div class="col-md-2 mt-5">
          <material-input id="rut" variant="dynamic" label="RUT" is-required type="rut"
          v-model="persona.rut" />
        </div>
        <div class="col-md-3 mt-4">
          <MaterialChoices id="estadoCivil" :options="opcionsEstadoCivil"
          name="estadoCivil" label="Estado Civil" v-model:text-choice="persona.estadoCivil" />
        </div>
        <div class="col-md-3 mt-4">
          <MaterialChoices id="nacionalidad" :options="nacionalidad" label="Nacionalidad"
          v-model:text-choice="persona.nacionalidad" name="Nacionalidad" />
        </div>
        <div class="col-md-4 mt-5">
          <material-input id="ocupacion" variant="dynamic" label="Ocupación" is-required type="text"
          v-model="persona.ocupacion" />
        </div>
        <div class="col-md-4 mt-2">
          <material-input id="telefono" variant="static" label="Teléfono" is-required type="telefono"
                          placeholder="9 xxxxxxxx"
          v-model="persona.telefono" />
        </div>
        <div class="col-md-6 mt-4">
          <material-input id="email" variant="dynamic" label="Email" is-required type="text"
          v-model="persona.email" />
        </div>
        <LocalidadForm v-model="persona.direccion" />
      </div>
    </div>
  </div>
  <div class="row">
    <material-button variant="success" size="lg" class="mt-2 mb-6" full-width @click="emitData"> Crear Persona </material-button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import axios from 'axios'
import router from '@/router/index.js'

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
      telefono: '',
      ocupacion: '',
      direccion: {
        calle: '',
        numero: '',
        codigoPostal: '',
        pais: '',
        region: '',
        ciudad: ''
      },
      email: '',
      estadoCivil: ''
    })
    const v$ = useVuelidate()
    return { persona, v$ }
  },
  data() {
    return {
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
    emitData() {
      this.v$.$validate()
      // console.log(this.v$)
      // console.log(this.persona)
      if (!this.v$.$error) {
        axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/api/v1/perfil`, this.persona).then((response) => {
          console.log(response)
          router.push('/Personas')
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>