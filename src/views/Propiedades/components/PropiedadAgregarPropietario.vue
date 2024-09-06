<script>
import { onMounted, ref } from 'vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import { usePersonasStore } from '@/store/personasStore.js'

export default {
  name: 'PropiedadAgregarPropietario',
  components: {
    MaterialChoices,
  },
  data() {
    return {
      propietario_existente: null
    }
  },
  emits: ['update:propietario', 'update:propietarioPreview'],
  setup() {
    const store = usePersonasStore()
    let opcionsPersonas = ref([])

    const fetchPersonas = async () => {
      await store.fetchPersonas()
      console.log(store.personas)
      opcionsPersonas.value = formatPersonas(store.personas)
    }

    const formatPersonas = (personas) => {
      return personas.map(persona => {
        let label = persona.type === 'empresa'
          ? `${persona.rut} - ${persona.nombre} - ${persona.calle} ${persona.numero} ${persona.ciudad} ${persona.region} ${persona.pais} - ${persona.type}`
          : `${persona.rut} - ${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno} - ${persona.calle} ${persona.numero} ${persona.ciudad} ${persona.region} ${persona.pais} - ${persona.type}`

        return {
          value: persona,
          label: label
        }
      })
    }

    onMounted(fetchPersonas)
    return { store, opcionsPersonas }
  },
  watch: {
    propietario_existente: {
      handler: function(val) {
        if (val && val.value) {
          console.log(val.value)
          this.$emit('update:propietario', { id: val.value.id, type: val.value.type })
          this.$emit('update:propietarioPreview', val.value)
        }
      },
      deep: true
    }
  }

}
</script>

<template>
  <div id="Propietario" >

      <div class="row">
        <div class="col-12 mb-4">
          <material-choices id="propietario_seleccionado"
                            v-model:model-value="propietario_existente"
                            :options="opcionsPersonas"
                            label="Selecciona un propietario existente" name="propietario_existente"
          />
        </div>

        <div v-if="propietario_existente">


          <div v-if="propietario_existente.value.type === 'persona'" class=" col ">

            <!--          mostrar datos del propietario seleccionado-->
            <div v-if="propietario_existente.value.rut" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Rut</h6>
              <p>{{ propietario_existente.value.rut }}</p>
            </div>
            <div v-if="propietario_existente.value.type" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Tipo</h6>
              <p class="text-capitalize">{{ propietario_existente.value.type }}</p>
            </div>
            <div v-if="propietario_existente.value.nombre" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Nombre</h6>
              <p class="text-bolder">{{ propietario_existente.value.nombre }}
                {{ propietario_existente.value.apellidoPaterno }} {{ propietario_existente.value.apellidoMaterno }}</p>
            </div>
            <div v-if="propietario_existente.value.email" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Correo</h6>
              <p>{{ propietario_existente.value.email }}</p>
            </div>
            <div v-if="propietario_existente.value.telefono" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Telefono</h6>
              <p>{{ propietario_existente.value.telefono }}</p>
            </div>
            <div v-if="propietario_existente.value.ocupacion" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Ocupación</h6>
              <p class="text-capitalize">{{ propietario_existente.value.ocupacion }}</p>
            </div>
            <div v-if="propietario_existente.value.estadoCivil"
                 class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Estado Civil</h6>
              <p class="text-capitalize">{{ propietario_existente.value.estadoCivil }}</p>
            </div>
            <div v-if="propietario_existente.value.nacionalidad"
                 class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Nacionalidad</h6>
              <p class="text-capitalize">{{ propietario_existente.value.nacionalidad }}</p>

            </div>
            <div v-if="propietario_existente.value.direccion" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Dirección</h6>
              <p class="text-capitalize">{{ propietario_existente.value.direccion.calle }},
                {{ propietario_existente.value.direccion.numero }}, {{ propietario_existente.value.direccion.detalle }},
                {{ propietario_existente.value.direccion.ciudad }},
                {{ propietario_existente.value.direccion.region }}, {{ propietario_existente.value.direccion.pais }}
              </p>
            </div>
          </div>
          <div v-else-if="propietario_existente.value.type === 'empresa'" class="col">
            <!--          mostrar datos de la empresa seleccionada-->
            <div v-if="propietario_existente.value.rut" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Rut</h6>
              <p>{{ propietario_existente.value.rut }}</p>
            </div>
            <div v-if="propietario_existente.value.type" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Tipo</h6>
              <p class="text-capitalize">{{ propietario_existente.value.type }}</p>
            </div>
            <div v-if="propietario_existente.value.nombre" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Nombre</h6>
              <p class="text-capitalize text-bold">{{ propietario_existente.value.nombre }}</p>
            </div>
            <div v-if="propietario_existente.value.email" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Correo</h6>
              <p>{{ propietario_existente.value.email }}</p>
            </div>
            <div v-if="propietario_existente.value.telefono" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Telefono</h6>
              <p>{{ propietario_existente.value.telefono }}</p>
            </div>
            <div v-if="propietario_existente.value.giro" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Giro</h6>
              <p class="text-capitalize">{{ propietario_existente.value.giro }}</p>
            </div>
            <div v-if="propietario_existente.value.razonSocial"
                 class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Razón Social</h6>
              <p class="text-capitalize">{{ propietario_existente.value.razonSocial }}</p>
            </div>
            <div v-if="propietario_existente.value.direccion" class="d-flex justify-content-between align-items-center">
              <h6 class="font-weight-normal">Dirección</h6>
              <p class="text-capitalize">{{ propietario_existente.value.direccion.calle }},
                {{ propietario_existente.value.direccion.numero }}, {{ propietario_existente.value.direccion.detalle }},
                {{ propietario_existente.value.direccion.ciudad }} ,
                {{ propietario_existente.value.direccion.region }}, {{ propietario_existente.value.direccion.pais }}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
</template>