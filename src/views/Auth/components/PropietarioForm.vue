<template>
  <div class="row">
    <div class="row mt-4">
      <div class="col-md-4 mt-4">
        <material-input id="nombres" v-model="persona.nombre" is-required label="Nombres" variant="static" placeholder="Nombres"/>
      </div>
      <div class="col-md-4 mt-4">
        <material-input id="apellidoPaterno" v-model="persona.apellidoPaterno" is-required label="Apellido Paterno"
                        variant="static" placeholder="Apellido"/>
      </div>
      <div class="col-md-4 mt-4">
        <material-input id="apellidoMaterno" v-model="persona.apellidoMaterno" is-required label="Apellido Materno"
                        variant="static" placeholder="Apellido"/>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-2 mt-4">
        <MaterialChoices id="pronombres" v-model:text-choice="persona.tratamiento" :options="pronombres"
                         label="Pronombres" name="Pronombres" />
      </div>
      <div class="col-md-2 mt-4">
        <material-input id="rut" v-model="persona.rut" is-required label="RUT" type="rut"
        variant="static" />
    </div>
      <div class="col-4 mt-4">
        <material-input id="email" placeholder="Email" v-model="persona.email" is-required label="Email" type="text"
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
    </div>
    <div class="row mt-4">
      <div class="col-md-2 mt-4">
        <MaterialChoices id="estadoCivil" v-model:text-choice="persona.estadoCivil"
                         :options="opcionsEstadoCivil" label="Estado Civil" name="estadoCivil" />
      </div>
      <div class="col-md-2 mt-4">
        <MaterialChoices id="nacionalidad" v-model:text-choice="persona.nacionalidad" :options="nacionalidad"
                         label="Nacionalidad" name="Nacionalidad" />
      </div>
      <div class="col-md-2 mt-4">
        <material-input
          id="FechaNacimientoRepresentanteLegal"
          v-model="persona.fechaNacimiento"
          is-required
          label="Fecha de Nacimiento"
          placeholder="dd/mm/aaaa"
          type="date"
          variant="static"
        />
      </div>
      <div class="col-md-3 mt-4">
        <material-input id="ocupacion" v-model="persona.ocupacion" is-required label="Ocupación" type="text"
                        variant="static" />
      </div>
      <div class="col-md-3 mt-4">
      <material-input id="telefono" v-model="persona.telefono" is-required label="Teléfono" placeholder="9 xxxxxxxx"
      type="telefono"
      variant="static" />
    </div>

    </div>
    <LocalidadForm v-model="persona.direccion" />
  </div>
  <div class="mt-4 button-row d-flex">
    <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button" @click="emitData">
      Siguiente
    </button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import LocalidadForm from '@/views/Shared/LocalidadForm.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'

export default {
  components: {
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
      fechaNacimiento: '',
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
      tratamiento: '',
      estadoCivil: ''
    })
    const v$ = useVuelidate()
    return { persona, v$ }
  },
  data() {
    return {
      pronombres: [
        { value: 'Don.', text: 'Don.' },
        { value: 'Doña.', text: 'Doña.' }
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
  emits: ['update:persona', 'next:step'],
  methods: {
    emitData() {
      this.v$.$validate()
      // console.log(this.v$)
      // console.log(this.persona)
      if (!this.v$.$error) {
        this.$emit('update:persona', this.persona)
        this.$emit('next:step')
      }
    }
  }
}
</script>
