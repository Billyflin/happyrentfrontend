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
        { value: 'Don.', text: 'Don' },
        { value: 'Doña.', text: 'Doña' }
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
        fechaNacimiento: '',
        email: '',
        estadoCivil: '',
        nacionalidad: '',
        direccion: {
          calle: '',
          numero: '',
          detalle: '',
          numeroOficina: '',
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
        <h5 class=" mt-3 mb-3">REPRESENTANTE LEGAL</h5>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <material-input
            id="NombreRepresentanteLegal"
            v-model="representante.nombre"
            is-required
            label="Nombre"
            placeholder="Nombre"
            type="text"
            variant="static"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoPaternoRepresentanteLegal"
            v-model="representante.apellidoPaterno"
            is-required
            label="Apellido Paterno"
            placeholder="Apellido"
            type="text"
            variant="static"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoMaternoRepresentanteLegal"
            v-model="representante.apellidoMaterno"
            is-required
            label="Apellido Materno"
            placeholder="Apellido"
            type="text"
            variant="static"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-2  mt-4">
          <MaterialChoices id="pronombres" v-model:text-choice="representante.tratamiento" :options="pronombres"
                           label="Pronombres" name="Pronombres" variant="static" />
        </div>
        <div class="col-sm-2  mt-4">
          <material-input
            id="Rut"
            v-model="representante.rut"
            label="Rut"
            placeholder="Con guión"
            type="rut"
            variant="static"
          />
        </div>
        <div class="col-4 mt-4">
          <material-input
            id="emailRepresentanteLegal"
            v-model="representante.email"
            label="Email"
            placeholder="Email"
            type="email"
            variant="static"
          />
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
        <div class="col-md-2">
          <MaterialChoices id="estadoCivil" v-model:text-choice="representante.estadoCivil"
                           :options="opcionsEstadoCivil" label="Estado Civil"
                           name="estadoCivil" variant="static"
          />
        </div>
        <div class="col-md-2">
          <MaterialChoices id="nacionalidad" v-model:text-choice="representante.nacionalidad" :options="nacionalidad"
                           label="Nacionalidad" name="Nacionalidad" variant="static"/>
        </div>
        <div class="col-md-2">
          <material-input
            id="FechaNacimientoRepresentanteLegal"
            v-model="representante.fechaNacimiento"
            is-required
            label="Fecha de Nacimiento"
            placeholder="dd/mm/aaaa"
            type="date"
            variant="static"
          />
        </div>
        <div class="col-sm-3">
          <material-input
            id="Ocupacion"
            v-model="representante.ocupacion"
            is-required
            label="Ocupación "
            placeholder="Ingeniero"
            type="text"
            variant="static"
          />
        </div>
        <div class="col-sm-3">
          <material-input
            id="numeroRepresentanteLegal"
            v-model="representante.telefono"
            is-required
            label="teléfono"
            placeholder="9 xxxxxxxx"
            type="telefono"
            variant="static"
          />
        </div>

      </div>

      <div class="row text-start">
        <LocalidadForm v-model="representante.direccion" />
      </div>
    </div>
  </div>
  <div class="mt-4 button-row d-flex">
    <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button" @click="emitData">
      Siguiente
    </button>
  </div>
  <!--  <button class="mb-5" @click="emitData">Next</button>-->
</template>
