<script>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'

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
        Giro: ''
      },
      seleccion: ''
    }
  },
  watch: {},
  emits: ['update:empresa'],
  methods: {
    emitData() {
      console.log(this.empresa)
      this.$emit('update:empresa', this.empresa)
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
        <div class="col-sm-3">
          <material-input
            id="rut"
            type="rut"
            variant="static"
            label="Rut Empresa"
            placeholder="Con guión"
            v-model="empresa.rut"
          />
        </div>
        <div class="col-sm-5">
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
        <div class="col-sm-4">
          <material-input
            id="Giro"
            variant="static"
            type="text"
            is-required
            label="Giro"
            placeholder="Giro"
            v-model="empresa.Giro"
          />
        </div>
      </div>
    </div>
    <div class="row mt-4 text-start">
      <LocalidadForm></LocalidadForm>
    </div>
  </div>
  <button class="mb-5" @click="emitData">Next</button>
</template>