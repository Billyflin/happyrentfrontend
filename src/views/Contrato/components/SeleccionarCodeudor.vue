<script>
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useAuthStore } from '@/store/index.js'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'SeleccionarCodeudor',
  components: {
    MaterialButton,
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
  watch: {
    propietario_existente: {
      handler: function(val) {
        if (val !== undefined) {
          const store = useAuthStore()
          store.codeudor = val.value
        }
      },
      deep: true
    }
  },
  setup() {
    const store = useAuthStore()
    let opcionsPersonas = ref([])

    watch(() => store.arrendatario, (newValue) => {
      console.log(newValue, 'desde pinia')
    }, { deep: true })


    const fetchPersonas = async () => {
      await store.getPersonas()
      console.log(store.personas)
      opcionsPersonas.value = formatPersonas(store.personas)
    }

    const formatPersonas = (personas) => {
      return personas.map(persona => {
        let label = persona.type === 'empresa'
          ? `${persona.rut} - ${persona.nombre} - ${persona.direccion.calle} ${persona.direccion.numero} ${persona.direccion.ciudad} ${persona.direccion.region} ${persona.direccion.pais} - ${persona.type}`
          : `${persona.rut} - ${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno} - ${persona.direccion.calle} ${persona.direccion.numero} ${persona.direccion.ciudad} ${persona.direccion.region} ${persona.direccion.pais} - ${persona.type}`

        return {
          value: persona,
          label: label
        }
      })
    }

    onMounted(fetchPersonas)
    onUnmounted(() => {
    })

    return { store, opcionsPersonas }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div>
        <h5>Seleccionar Codeudor o Aval</h5>
        <p class="mx-2 mt-4"> Acá puedes seleccionar al codeudor previamente registrados, en caso de no tener
          registrado puedes agregar uno termporal o agregar uno nuevo en la pestaña
          <strong class="text-primary">Personas</strong>.
        </p>
      </div>
      <material-button class="col-2" color="danger" size="md"
                       @click="store.codeudor = null;this.$emit('update:modelValue',false)">
        Sin Codeudor
      </material-button>
    </div>


    <div class="card-body pt-0">
      <div class="row mx-4">
        <div class="col-12  mb-4">
          <material-choices id="propietario_seleccionado"
                            v-model="propietario_existente"
                            :options="opcionsPersonas"
                            label="Selecciona un arrendatario existente" name="propietario_existente"
          />
        </div>

      </div>
      <!--      <span v-if="error" class="text-danger">{{ error }}</span>-->
      <div v-if="propietario_existente" class="mx-4 col ">


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
            <p class="text-bolder text-capitalize">{{ propietario_existente.value.nombre }}
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
          <div v-if="propietario_existente.value.estadoCivil" class="d-flex justify-content-between align-items-center">
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
            <p class="text-capitalize">{{ propietario_existente.value.direccion.calle }}
              {{ propietario_existente.value.direccion.numero }},
              {{ propietario_existente.value.direccion.ciudad }} ,
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
          <div v-if="propietario_existente.value.razonSocial" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Razón Social</h6>
            <p class="text-capitalize">{{ propietario_existente.value.razonSocial }}</p>
          </div>
          <div v-if="propietario_existente.value.direccion" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Dirección</h6>
            <p class="text-capitalize">{{ propietario_existente.value.direccion.calle }}
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