<script>
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useAuthStore } from '@/store/index.js'
import { onMounted, ref } from 'vue'

export default {
  name: 'SeleccionarArrendatario',
  components: {
    MaterialSwitch,
    MaterialInput,
    MaterialChoices,
    LocalidadForm
  },
  data() {
    return {
      propietario_existente: null
    }
  },
  setup() {
    const store = useAuthStore()
    let opcionsPersonas = ref([])

    const fetchPersonas = async () => {
      await store.getPersonas()
      console.log(store.personas)
      opcionsPersonas.value = formatPersonas(store.personas)
    }

    const formatPersonas = (personas) => {
      return personas.map(persona => ({
        value: persona,
        label: `${persona.rut} - ${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno} - ${persona.direccion.calle} ${persona.direccion.numero} ${persona.direccion.ciudad} ${persona.direccion.region} ${persona.direccion.pais} - ${persona.type}`
      }))
    }

    onMounted(fetchPersonas)

    return { store, opcionsPersonas }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h5>Seleccionar Arrendatario</h5>
      <p class="mx-2 mt-4"> Acá puedes seleccionar de los arrendatarios previamente registrados, en caso de no tener registrado a el arrendatario debes ir a la
        pestaña
        <router-link class="text-bold" to="/Personas">Personas</router-link>
        para completar el registro.
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="row mx-4">
        <div class="col-12  mb-4">
            <material-choices id="propietario_seleccionado"
                              v-model="propietario_existente"
                              :options="opcionsPersonas"
                              name="propietario_existente" label="Selecciona un arrendatario existente"
            />
          </div>

        </div>
        <div class="mx-4 col " v-if="propietario_existente">
            <div v-if="propietario_existente.value.type==='persona'">

          <!--          mostrar datos del propietario seleccionado-->
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Rut</h6>
            <p v-if="propietario_existente.value.rut">{{ propietario_existente.value.rut }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Nombre</h6>
            <p class="text-bolder" v-if="propietario_existente.value.nombre">{{ propietario_existente.value.nombre }}
              {{ propietario_existente.value.apellidoPaterno }} {{ propietario_existente.value.apellidoMaterno }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Correo</h6>
            <p v-if="propietario_existente.value.email">{{ propietario_existente.value.email }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Telefono</h6>
            <p v-if="propietario_existente.value.telefono">{{ propietario_existente.value.telefono }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Ocupación</h6>
            <p v-if="propietario_existente.value.ocupacion">{{ propietario_existente.value.ocupacion }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Estado Civil</h6>
            <p v-if="propietario_existente.value.estadoCivil">{{ propietario_existente.value.estadoCivil }}</p>

          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Nacionalidad</h6>
            <p v-if="propietario_existente.value.nacionalidad">{{ propietario_existente.value.nacionalidad }}</p>

          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Dirección</h6>
            <p v-if="propietario_existente.value.direccion">{{ propietario_existente.value.direccion.calle }}
              {{ propietario_existente.value.direccion.numero }},
              {{ propietario_existente.value.direccion.ciudad }} ,
              {{ propietario_existente.value.direccion.region }}, {{ propietario_existente.value.direccion.pais }}
            </p>
          </div>
            </div>

        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
