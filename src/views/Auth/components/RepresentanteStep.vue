<script>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import { useVuelidate } from '@vuelidate/core'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'

export default {
  components: {
    LocalidadForm,
    MaterialInput,
    MaterialChoices
  },
  name: 'RepresentanteStep',
  props: {
    user: Object
  },
  setup() {
    const v$ = useVuelidate()
    return { v$ }
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
      ],
      representante: {
        persona: {
          rut: '',
          nombres: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          telefono: '',
          ocupacion: '',
          email: '',
          estadoCivil: '',
          nacionalidad: '',
          direccion: {
            calle: '',
            numero: '',
            codigoPostal: '',
            pais: '',
            region: '',
            ciudad: ''
          }
        }
      }
    }
  },
  emits: ['update:representante', 'next:step'],
  methods: {
    emitData() {
      console.log(this.representante)
      this.v$.$validate()
      if (!this.v$.$error) {
        this.$emit('update:representante', this.representante)
      }
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="row mt-4">
      <!--  Seccion Empresa-->
      <div class="row mt-4">
        <h5 class=" mt-3 mb-3">Representante Legal</h5>
      </div>
      <div class="row mt-4">
        <div class="col-sm-3">
          <material-input
            id="Rut"
            type="rut"
            variant="static"
            label="Rut Representante"
            placeholder="Con guión"
            v-model="representante.persona.rut"
          />
        </div>
        <div class="col-sm-3">
          <material-input
            id="Ocupacion"
            type="text"
            is-required
            variant="static"
            label="Ocupación Representante"
            placeholder="Ingeniero"
            v-model="representante.persona.ocupacion"
          />
        </div>
        <div class="col-md-3">
          <MaterialChoices id="estadoCivil" :options="opcionsEstadoCivil"
                           name="estadoCivil" label="Estado Civil"
                           v-model:text-choice="representante.persona.estadoCivil"
          />
        </div>
        <div class="col-md-3">
          <MaterialChoices id="nacionalidad" :options="nacionalidad" label="Nacionalidad"
                           v-model:text-choice="representante.persona.nacionalidad" name="Nacionalidad" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <material-input
            id="NombreRepresentanteLegal"
            variant="static"
            is-required
            type="text"
            label="Nombre Representante"
            placeholder="Nombre"
            v-model="representante.persona.nombres"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoPaternoRepresentanteLegal"
            variant="static"
            type="text"
            is-required
            label="Apellido Paterno Representante"
            placeholder="Apellido"
            v-model="representante.persona.apellidoPaterno"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoMaternoRepresentanteLegal"
            variant="static"
            type="text"
            is-required
            label="Apellido Materno Representante"
            placeholder="Apellido"
            v-model="representante.persona.apellidoMaterno"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4 mt-4">
          <material-input
            id="emailRepresentanteLegal"
            type="email"
            variant="static"
            label="Email Representante"
            placeholder="Email"
            v-model="representante.persona.email"
          />
        </div>
        <div class="col-4 mt-4">
          <material-input
            id="confirmEmailRepresentanteLegal"
            type="email"
            variant="static"
            label="Confimar Email Representante"
            placeholder="Confirma Email"

          />
        </div>
        <div class="col-3 mt-4">
          <material-input
            id="numeroRepresentanteLegal"
            type="String"
            is-required
            variant="static"
            label="Numero de teléfono"
            placeholder="+569 xxxxxxxx"
            v-model="representante.persona.telefono"
          />
        </div>
      </div>
        <div class="row text-start">
          <LocalidadForm v-model="representante.persona.direccion" />
        </div>
    </div>
  </div>
  <button class="mb-5" @click="emitData">Next</button>
</template>
