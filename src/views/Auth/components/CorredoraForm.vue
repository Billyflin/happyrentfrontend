<script>

import { useVuelidate } from '@vuelidate/core'
import LocalidadForm from '@/views/Shared/LocalidadForm.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'

export default {
  components: {
    LocalidadForm,
    MaterialInput,
  },
  name: 'CorredoraForm',
  data() {
    return {
      empresa: {
        type: 'empresa',
        rut: '',
        nombre: '',
        razonSocial: '',
        giro: '',
        direccion: {
          calle: '',
          numero: '',
          detalle: '',
          codigoPostal: '',
          pais: '',
          region: '',
          ciudad: ''
        }
      }
    }
  },
  setup() {
    const v$ = useVuelidate()
    return { v$ }
  },
  watch: {},
  emits: ['update:empresa', 'next:step'],
  methods: {
    emitData() {
      console.log(this.empresa)
      this.v$.$validate()
      if (!this.v$.$error) {
        this.$emit('update:empresa', this.empresa)
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
      </div>
      <div class="row mt-4">
        <div class="col-sm-6">
          <material-input id="nombreEmpresa"
                          v-model="empresa.nombre"
                          is-required
                          label="Nombre Comercial"
                          placeholder="Nombre Empresa"
                          type="text"
                          variant="static"
          />
        </div>
        <div class="col-sm-6">
          <material-input
            id="rut"
            v-model="empresa.rut"
            label="Rut Empresa"
            placeholder="Con guión"
            type="rut"
            variant="static"
          />
        </div>
        <div class="col-sm-4 mt-4">
          <material-input
            id="emailEmpresa"
            v-model="empresa.email"
            label="Email Empresa"
            placeholder="correo@empresa.cl"
            type="email"
            variant="static"
          />
        </div>
        <div class="col-sm-4 mt-4">
          <material-input
            id="razonSocial"
            v-model="empresa.razonSocial"
            is-required
            label="Razón Social"
            placeholder="Razón Social"
            type="text"
            variant="static"
          />
        </div>
        <div class="col-sm-4 mt-4">
          <material-input
            id="Giro"
            v-model="empresa.giro"
            is-required
            label="Giro"
            placeholder="Giro"
            type="text"
            variant="static"
          />
        </div>

      </div>
    </div>
    <div class="row text-start">
      <LocalidadForm v-model="empresa.direccion" />
    </div>
  </div>
  <div class="mt-4 button-row d-flex">
    <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button" @click="emitData">
      Siguiente
    </button>
  </div>
</template>