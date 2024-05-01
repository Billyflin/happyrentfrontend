<script>
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'
import { useAuthStore } from '@/store/index.js'
import { onMounted, ref, watch } from 'vue'

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
  emits: ['update:propietario'],
  setup() {
    const store = useAuthStore()
    let opcionsPersonas = ref([])

    const fetchPersonas = async () => {
      await store.getPersonas()
      console.log(store.personas)
      opcionsPersonas.value = formatPersonas(store.personas)
    }

    const formatPersonas = (personas) => {
      return personas.map(persona => {
        let label = persona.type === 'empresa'
          ? `${persona.rutEmpresa} - ${persona.nombre} - ${persona.direccion.calle} ${persona.direccion.numero} ${persona.direccion.ciudad} ${persona.direccion.region} ${persona.direccion.pais} - ${persona.type}`
          : `${persona.rut} - ${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno} - ${persona.direccion.calle} ${persona.direccion.numero} ${persona.direccion.ciudad} ${persona.direccion.region} ${persona.direccion.pais} - ${persona.type}`;

        return {
          value: persona,
          label: label
        }
      });
    }


    onMounted(fetchPersonas)
    return { store, opcionsPersonas }
  },
  watch: {
    propietario_existente: {
      handler: function (val) {
        if (val && val.value) {
          console.log(val.value.id)
          this.$emit('update:propietario', {id:val.value.id,type: val.value.type})
        }
      },
      deep: true
    }
  }

}
</script>

<template>
  <div id="Propietario" class="card mt-5">
    <div class="card-header">

      <h5>Seleccionar Propietario</h5>
      <p> Acá puedes seleccionar de los propietarios previamente registrados, en caso de no tener ninguno debes ir a la
        pestaña
        <router-link class="text-bold" to="/Personas">Personas</router-link>
        para completar el registro
      </p>
    </div>
    <div class="card-body pt-0">
      {{ propietario_existente}}

      <div class="row">
        <div class="col-12 mb-4">
          <material-choices id="propietario_seleccionado"
                            v-model:model-value="propietario_existente"
                            :options="opcionsPersonas"
                            name="propietario_existente" label="Selecciona un propietario existente"
          />
        </div>

        <!--                    {{ opcionsPersonas }}-->
        <!--          {{propietario_existente.value.id}}-->
        <div class=" col " v-if="propietario_existente">

          <div v-if="propietario_existente.value.rutEmpresa" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Rut Empresa</h6>
            <p>{{ propietario_existente.value.rutEmpresa }}</p>
          </div>

          <!--          mostrar datos del propietario seleccionado-->
          <div  v-if="propietario_existente.value.rut" class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Rut</h6>
            <p>{{ propietario_existente.value.rut }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="font-weight-normal">Nombre</h6>
            <p v-if="propietario_existente.value.nombre">{{ propietario_existente.value.nombre }}
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