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
    perfil: Object
  },
  setup() {
    const v$ = useVuelidate()
    return { v$ }
  },
  data() {
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
      ],
      representante: {
        type: 'persona',
        rut: '',
        nombre: '',
        apellidoPaterno: '',
        tratamiento: '',
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
  },
  emits: ['update:representante', 'next:step'],
  methods: {
    emitData() {
      console.log(this.representante)
      this.v$.$validate()
      if (!this.v$.$error) {
        this.$emit('update:representante', this.representante)
this.$emit('next:step')
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
        <div class="col-4">
          <material-input
            id="NombreRepresentanteLegal"
            variant="static"
            is-required
            type="text"
            label="Nombre Representante"
            placeholder="Nombre"
            v-model="representante.nombre"
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
            v-model="representante.apellidoPaterno"
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
            v-model="representante.apellidoMaterno"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-1  mt-4">
          <MaterialChoices id="pronombres" :options="pronombres" label="Pronombres"
                           v-model:text-choice="representante.tratamiento" name="Pronombres" />
        </div>
        <div class="col-sm-3  mt-4">
          <material-input
            id="Rut"
            type="rut"
            variant="static"
            label="Rut Representante"
            placeholder="Con guión"
            v-model="representante.rut"
          />
        </div>
        <div class="col-4 mt-4">
          <material-input
            id="emailRepresentanteLegal"
            type="email"
            variant="static"
            label="Email Representante"
            placeholder="Email"
            v-model="representante.email"
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

        </div>
      <div class="row mt-4">
        <div class="col-md-3">
          <MaterialChoices id="estadoCivil" :options="opcionsEstadoCivil"
                           name="estadoCivil" label="Estado Civil"
                           v-model:text-choice="representante.estadoCivil"
          />
        </div>
        <div class="col-md-3">
          <MaterialChoices id="nacionalidad" :options="nacionalidad" label="Nacionalidad"
                           v-model:text-choice="representante.nacionalidad" name="Nacionalidad" />
        </div>
        <div class="col-sm-3">
          <material-input
            id="Ocupacion"
            type="text"
            is-required
            variant="static"
            label="Ocupación Representante"
            placeholder="Ingeniero"
            v-model="representante.ocupacion"
          />
        </div>
        <div class="col-sm-3">
          <material-input
            id="numeroRepresentanteLegal"
            type="String"
            is-required
            variant="static"
            label="Numero de teléfono"
            placeholder="+569 xxxxxxxx"
            v-model="representante.telefono"
          />
        </div>

      </div>

      <div class="row text-start">
        <LocalidadForm v-model="representante.direccion" />
      </div>
    </div>
  </div>
  <div class="mt-4 button-row d-flex">
    <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="emitData">
      Siguiente
    </button>
  </div>
<!--  <button class="mb-5" @click="emitData">Next</button>-->
</template>
