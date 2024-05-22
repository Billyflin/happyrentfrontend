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
          <material-input id="nombres" v-model="persona.nombre" is-required label="Nombres" variant="dynamic" />
        </div>
        <div class="col-md-4 mt-4">
          <material-input id="apellidoPaterno" v-model="persona.apellidoPaterno" is-required label="Apellido Paterno"
                          variant="dynamic" />
        </div>
        <div class="col-md-4 mt-4">
          <material-input id="apellidoMaterno" v-model="persona.apellidoMaterno" is-required label="Apellido Materno"
                          variant="dynamic" />
        </div>
        <div class="col-md-2 mt-5">
          <material-input id="rut" v-model="persona.rut" is-required label="RUT" type="rut"
                          variant="dynamic" />
        </div>
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
        <div class="col-md-4 mt-2">
          <material-input id="telefono" v-model="persona.telefono" is-required label="Teléfono" placeholder="9 xxxxxxxx"
                          type="telefono"
                          variant="static" />
        </div>
        <div class="col-md-6 mt-4">
          <material-input id="email" v-model="persona.email" is-required label="Email" type="text"
                          variant="dynamic" />
        </div>
        <LocalidadForm v-model="persona.direccion" />
      </div>
    </div>
  </div>
  <div class="row">
    <material-button class="mt-2 mb-6" full-width size="lg" variant="success" @click="emitData"> Crear Persona
    </material-button>
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