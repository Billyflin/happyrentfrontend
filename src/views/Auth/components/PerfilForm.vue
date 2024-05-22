<template>
  <div class="pt-3 bg-white multisteps-form__panel" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Empecemos con información básica</h5>
        <p>Dejanos saber de tí.</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="mb-4 col-4">
          <material-input id="nombres" v-model="persona.nombres" label="Nombres" variant="dynamic" />
        </div>
        <div class="col-4 mb-4">
          <material-input id="apellidoPaterno" v-model="persona.apellidoPaterno" label="Apellido Paterno"
                          variant="dynamic" />
        </div>
        <div class="col-4 mb-4">
          <material-input id="apellidoMaterno" v-model="persona.apellidoMaterno" label="Apellido Materno"
                          variant="dynamic" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-6 col-6">
          <material-choices id="estadoCivil" v-model="estado"
                            :options="opcionsEstadoCivil"
                            label="Estado Civil"
                            name="estadoCivil" />
          <!--                            :search-enabled="false"-->
        </div>
        <div class="col-sm-6 col-6">
          <material-choices id="nacionalidad"
                            v-model="nacionalidad"
                            :options="opcionsNacionalidad"
                            label="Nacionalidad"
                            name="nacionalidad"
          />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3 mt-4">
          <material-input id="telefono" v-model="persona.telefono" is-required label="Teléfono" type="String"
                          variant="dynamic" />
        </div>
        <div class="col-4 mt-4 mb-3">
          <material-input id="ocupacion" v-model="persona.ocupacion" is-required label="Ocupación" type="String"
                          variant="dynamic" />
        </div>
        <div class="col-5 mt-4 mb-3">
          <material-input id="email" v-model="persona.email" is-required label="Email" type="String"
                          variant="dynamic" />

        </div>
        <div class="col-5 mt-4 mb-3">
          <material-input id="rut" v-model="persona.rut" is-required label="RUT" type="String" variant="dynamic" />

        </div>

      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" title="Next" type="button"
                @click="nextStep">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from '@/assets/js/tooltip.js'
import MaterialInput from '@/components/MaterialInput.vue'
import { useAppStore } from '@/store/index.js'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  name: 'PerfilForm',
  components: { MaterialChoices, MaterialInput },
  data() {
    return {

      opcionsNacionalidad: [
        { value: 'Argentino', label: 'Argentino' },
        { value: 'Chileno', label: 'Chileno', selected: true },
        { value: 'Peruano', label: 'Peruano' },
        { value: 'Boliviano', label: 'Boliviano' },
        { value: 'Colombiano', label: 'Colombiano' },
        { value: 'Ecuatoriano', label: 'Ecuatoriano' }

      ],
      opcionsEstadoCivil: [
        { value: 'Anulado', label: 'Anulado' },
        { value: 'Casado', label: 'Casado' },
        { value: 'Conviviente', label: 'Conviviente' },
        { value: 'Divorciado', label: 'Divorciado' },
        { value: 'Separado', label: 'Separado' },
        { value: 'Soltero', label: 'Soltero', selected: true },
        { value: 'Viudo', label: 'Viudo' },
        { value: 'Otro', label: 'Otro' }
      ],

      estado: '',
      nacionalidad: '',
      persona: {
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        estadoCivil: '',
        nacionalidad: '',
        telefono: '',
        ocupacion: '',
        email: '',
        rut: ''

      }
    }
  },
  methods: {
    nextStep() {
      this.$emit('update-persona', this.persona)
      this.$emit('next-step')
    }
  },
  watch: {
    estado(nuevoEstado) {
      this.persona.estadoCivil = nuevoEstado.value
      this.$emit('update-persona', this.persona)
    },
    nacionalidad(nuevaNacionalidad) {
      this.persona.nacionalidad = nuevaNacionalidad.value
      this.$emit('update-persona', this.persona)
    }
  },
  mounted() {
    const store = useAppStore()
    setTooltip(store.bootstrap)
  },
  beforeUnmount() {
    this.$emit('update-persona', this.persona)
  }
}
</script>
