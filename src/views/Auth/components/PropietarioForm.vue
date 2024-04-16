<template>
  <form class="row">
    <div class="col-md-6 mt-4">
      <material-input id="rut" variant="dynamic" label="RUT" is-required type="String" v-model="persona.rut" />
    </div>
    <div class="col-md-6 mt-4">
      <material-input id="nombres" variant="dynamic" label="Nombres" v-model="persona.nombres" />
    </div>
    <div class="col-md-6 mt-4">
      <material-input id="apellidoPaterno" variant="dynamic" label="Apellido Paterno"
                      v-model="persona.apellidoPaterno" />
    </div>
    <div class="col-md-6 mt-4">
      <material-input id="apellidoMaterno" variant="dynamic" label="Apellido Materno"
                      v-model="persona.apellidoMaterno" />
    </div>
    <div class="col-md-6 mt-4">
      <material-input id="telefono" variant="dynamic" label="Teléfono" is-required type="String"
                      v-model="persona.telefono" />
    </div>
    <div class="col-md-6 mt-4">
      <material-input id="ocupacion" variant="dynamic" label="Ocupación" is-required type="String"
                      v-model="persona.ocupacion" />
    </div>
    <div class="col-md-6 mt-4">
      <material-input id="email" variant="dynamic" label="Email" is-required type="String"
                      v-model="persona.email" success/>
    </div>
    <div class="col-md-12 mt-4">
      <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
  </form>
</template>
<script setup>
import { reactive } from 'vue'
import MaterialInput from '@/components/MaterialInput.vue'

const persona = reactive({
  rut: '',
  nombres: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  telefono: '',
  ocupacion: '',
  email: '',
})

</script>
