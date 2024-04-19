<template>
  <div class="row">
    <div class="col-md-3 mt-5">
      <material-input id="rut" variant="dynamic" label="RUT" is-required type="rut"
                      v-model="persona.rut" />
    </div>
    <div class="col-md-3 mt-4">
      <MaterialChoices id="estadoCivil" :options="opcionsEstadoCivil"
                       name="estadoCivil" label="Estado Civil" v-model="seleccion"
      />
    </div>
    <div class="col-md-3 mt-4">
      <MaterialChoices id="nacionalidad" :options="nacionalidad" label="Nacionalidad"
                      v-model="seleccionNacionalidad"  name="Nacionalidad"/>
    </div>
    <div class="col-md-4 mt-4">
      <material-input id="telefono" variant="dynamic" label="Teléfono"   is-required type="String"
                      v-model="persona.telefono" />
    </div>
    <div class="col-md-4 mt-4">
      <material-input id="email" variant="dynamic" label="Email" is-required type="email"
                      v-model="persona.email" success />
    </div>
    <div class="col-md-4 mt-4">
      <material-input id="nombres" variant="dynamic" is-required label="Nombres" v-model="persona.nombres" />
    </div>
    <div class="col-md-4 mt-4">
      <material-input id="apellidoPaterno" variant="dynamic" is-required label="Apellido Paterno"
                      v-model="persona.apellidoPaterno" />
    </div>
    <div class="col-md-4 mt-4">
      <material-input id="apellidoMaterno" variant="dynamic" is-required label="Apellido Materno"
                      v-model="persona.apellidoMaterno" />
    </div>
    <div class="col-md-4 mt-4">
      <material-input id="ocupacion" variant="dynamic" label="Ocupación" is-required type="String"
                      v-model="persona.ocupacion" />
    </div>
  </div>
    <button class="mb-5" @click="emitData">Next</button>
</template>
<script>
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'


export default {
  components: {
    MaterialInput,
    MaterialChoices
  },
  name: 'PropietarioForm',
  data(){
    return {
      opcionsEstadoCivil: [
        { value: 'soltero', text: 'Soltero' },
        { value: 'casado', text: 'Casado' },
        { value: 'divorciado', text: 'Divorciado' },
        { value: 'viudo', text: 'Viudo' }
      ],
      nacionalidad: [
        { value: 'chile', text: 'Chile' },
        { value: 'argentina', text: 'Argentina' },
      ],
      persona: {
        rut: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        ocupacion: '',
        email: '',
        estadoCivil: '',
        nacionalidad: ''
      },
      seleccion:'',
      seleccionNacionalidad:''
    }
  },
  watch: {
    seleccion: function(value) {
      this.persona.estadoCivil = value.label
    },
    seleccionNacionalidad: function(value) {
      this.persona.nacionalidad = value.label
    }
  },
  emits: ['update:persona'],
  methods: {
    emitData() {
      console.log(this.persona)
      this.$emit('update:persona', this.persona)
    }
  },
}
</script>
