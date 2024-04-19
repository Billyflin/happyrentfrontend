<script>
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useAuthStore } from '@/store/index.js'
import { onMounted, ref } from 'vue'

export default {
  name: 'PropiedadAgregarPropietario',
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
        label: `${persona.nombres} ${persona.apellidoPaterno} ${persona.apellidoMaterno} - ${persona.rut}`
      }))
    }

    onMounted(fetchPersonas)

    return { store, opcionsPersonas }
  }
}
</script>

<template>
  <div id="Propietario" class="card mt-5">
    <div class="card-header">
      <h5>Datos del Propietario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row mt-4">
        <div class="row">
          <div class="col-4 mb-4">
            <material-choices id="propietario_seleccionado"
                              v-model="propietario_existente"
                              :options="opcionsPersonas"
                              name="propietario_existente" label="Selecciona un propietario existente"
            />
          </div>

                    {{ opcionsPersonas }}
            <div class=" col " v-if="propietario_existente">

              <!--          mostrar datos del propietario seleccionado-->
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="font-weight-normal">Rut</h6>
                <p v-if="propietario_existente.value.rut">{{ propietario_existente.value.rut }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="font-weight-normal">Nombre</h6>
                <p v-if="propietario_existente.value.nombres">{{ propietario_existente.value.nombres }}
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
  </div>
</template>