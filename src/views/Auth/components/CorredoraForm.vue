<script>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useVuelidate } from '@vuelidate/core'

export default {
  components: {
    LocalidadForm,
    MaterialInput,
    MaterialChoices
  },
  name: 'CorredoraForm',
  data() {
    return {
      empresa: {
        rut: '',
        razonSocial: '',
        giro: '',
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
                          variant="static"
                          type="text"
                          is-required
                          label="Nombre Empresa"
                          placeholder="Nombre Empresa"
                          v-model="empresa.nombre"
          />
        </div>
        <div class="col-sm-6">
          <material-input
            id="rut"
            type="rut"
            variant="static"
            label="Rut Empresa"
            placeholder="Con guión"
            v-model="empresa.rut"
          />
        </div>
        <div class="col-sm-6 mt-4">
          <material-input
            id="razonSocial"
            variant="static"
            type="text"
            is-required
            label="Razón Social"
            placeholder="Razón Social"
            v-model="empresa.razonSocial"
          />
        </div>
        <div class="col-sm-6 mt-4">
          <material-input
            id="Giro"
            variant="static"
            type="text"
            is-required
            label="Giro"
            placeholder="Giro"
            v-model="empresa.giro"
          />
        </div>
      </div>
    </div>
    <div class="row text-start">
      <LocalidadForm v-model="empresa.direccion" />
    </div>
  </div>
  <div class="mt-4 button-row d-flex">
    <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="emitData">
      Siguiente
    </button>
  </div>
</template>