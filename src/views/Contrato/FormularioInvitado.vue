<template>
  <div class="container-sm">
  <div>
  <h1>Formulario de invitado</h1>
  <div id="Arrendador" class="card mt-5">
    <div class="card-header">
      <h5>Datos del arrendatario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-sm-4 col-3">
          <MaterialChoices
            id="choices-tipo-arrendatario"
            name="choices-tipo-arrendatario"
            label="Tipo Arrendatario"
            :options="[
        { value: 'Empresa', text: 'Empresa' },
        { value: 'Persona Natural', text: 'Persona Natural' }
      ]"
            v-model="tipoArrendatario"
            @change = "console.log('tipoArrendatario', tipoArrendatario)"
          />
        </div>
        <div class="col-sm-3">
          <material-input
            id="Rut"
            type="text"
            variant="static"
            label="Rut Arrendatario"
            placeholder="Con guión"
          />
        </div>
        <div class="col-sm-3">
          <material-input
            id="RazonSocial"
            variant="static"
            label="Razón Social"
            placeholder="Razón Social"
          />
        </div>
        <div class="col-sm-2">
          <material-input
            id="Giro"
            variant="static"
            label="Giro"
            placeholder="Giro"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <material-input
            id="NombreArrendatario"
            variant="static"
            label="Nombre Arrendatario"
            placeholder="Nombre"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoPaternoArrendatario"
            variant="static"
            label="Apellido Paterno Arrendatario"
            placeholder="Apellido"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoMaternoArrendatario"
            variant="static"
            label="Apellido Materno Arrendatario"
            placeholder="Apellido"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2 col-2">
          <MaterialChoices
            id="choices-estadoCivil-arrendatario"
            name="choices-estadoCivil-arrendatario"
            label="Estado Civil"
            :options="[
          { value: 'Soltero', text: 'Soltero' },
          { value: 'Casado', text: 'Casado' },
          { value: 'Divorciado', text: 'Divorciado' },
          { value: 'Viudo', text: 'Viudo' },
          { value: 'Separado', text: 'Separado' },
          { value: 'Conviviente', text: 'Conviviente' }
        ]"
            v-model="selectedEstadoCivil"
          />
        </div>
        <div class="col-sm-2 col-2">
          <MaterialChoices
            id="choices-nacionalidad-arrendatario"
            name="choices-nacionalidad-arrendatario"
            label="Nacionalidad"
            :options="[
          { value: 'Chileno', text: 'Chileno' }
        ]"
            v-model="selectedNacionalidad"
            :isDisabled="true"
          />
        </div>
      </div>


      <div class="card-category mt-4">
        <h5>Contacto Arrendatario</h5>
      </div>
      <div class="row">
        <div class="col-4 mt-4">
          <material-input
            id="emailArrendatario"
            type="email"
            variant="static"
            label="Email Arrendatario"
            placeholder="Email"
          />
        </div>
        <div class="col-4 mt-4">
          <material-input
            id="confirmEmailArrendatario"
            type="email"
            variant="static"
            label="Confimar Email Arrendatario"
            placeholder="Confirma Email"
          />
        </div>
        <div class="col-2 mt-4">
          <material-input
            id="ArrendatarioPhoneNumber"
            type="phone"
            variant="static"
            label="Numero de teléfono"
            placeholder="+569 xxxxxxxx"
          />
        </div>

      </div>

      <div class="card-category mt-4">
        <h5>Dirección Arrendatario</h5>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-3 mt-4">
            <material-input
              id="calleDirectionArrendatario"
              variant="static"
              label="Calle"
              placeholder="Calle"
            />
          </div>
          <div class="col-1 mt-4">
            <material-input
              id="numeroDirectionArrendatario"
              type="number"
              variant="static"
              label="Número"
              placeholder="n°"
            />
          </div>
          <div class="row">
            <div class="col-sm-2 col-2">
              <MaterialChoices
                id="choices-pais-arrendatario"
                name="choices-pais-arrendatario"
                label="País"
                :options="[
          { value: 'Chile', text: 'Chile'},
          {value: 'Argentina', text: 'Argentina'}
          // Agrega más opciones aquí
        ]"
                v-model="selectedPais"
              />
            </div>
            <div class="col-sm-2 col-2">
              <MaterialChoices
                id="choices-region-arrendatario"
                name="choices-region-arrendatario"
                label="Región"
                :options="regions.map(region => ({ value: region, text: region }))"
                v-model="selectedRegion"
                :isDisabled="!selectedPais"
              />
            </div>
            <div class="col-sm-3 col-2">
              <MaterialChoices
                id="choices-ciudad-arrendatario"
                name="choices-ciudad-arrendatario"
                label="Ciudad"
                :options="ciudades.map(ciudad => ({ value: ciudad, text: ciudad }))"
                v-model="selectedCiudad"
                :isDisabled="!selectedRegion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p>El valor de uuid es: {{ this.uuid }}</p>
</div>
  </div>
</template>
<script>
import * as Choices from 'choices.js'
import MaterialInput from '@/components/MaterialInput.vue'
import { useAppStore } from '@/store/index.js'
import { onMounted, onUnmounted } from 'vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
// todo re importar para el uuid
// import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// const route = useRoute()
// const uuid = ref(route.params.uuid)
// console.log(uuid.value) // Imprime el valor de uuid en la consola

export default {
  name: 'FormularioInvitado',
  components: {
    MaterialChoices,
    MaterialInput
  }, data() {
    return {
      selectedEstadoCivil: null,
      selectedNacionalidad: null,
      tipoArrendatario: null,
      isEmailDisabled: false,
      isConfirmEmailDisabled: false,
      reajusteValue: 0.0, // Valor inicial del input
      progressValue: 0.0, // Valor inicial de la barra de progreso
      selectedPais: null,
      selectedRegion: null,
      selectedCiudad: null,
      regions: ['Región Metropolitana', 'Valparaíso', 'Biobío'],
      ciudades: ['Santiago', 'Viña del Mar', 'Concepción']
    }
  },
  methods: {
    blockearInputs() {
      this.isEmailDisabled = true
      this.isConfirmEmailDisabled = true
    },
    actualizarRegiones() {
      console.log('llegamos a seleccionar')
    },
    updateProgressBar() {
      this.progressValue = Math.min(Math.max(this.reajusteValue, 0.0), 0.30)
    }
  },

  watch: {
    selectedPais(newPais) {
      if (newPais === 'Chile') {
        this.regions = ['Región Metropolitana', 'Valparaíso', 'Biobío']
      } else {
        this.regions = []
      }
      this.selectedRegion = null
      this.selectedCiudad = null
    },
    selectedRegion(newRegion) {
      if (newRegion === 'Región Metropolitana') {
        this.ciudades = ['Santiago', 'Puente Alto', 'Maipú']
      } else if (newRegion === 'Valparaíso') {
        this.ciudades = ['Viña del Mar', 'Valparaíso', 'Quilpué']
      } else if (newRegion === 'Biobío') {
        this.ciudades = ['Concepción', 'Talcahuano', 'Chillán']
      } else {
        this.ciudades = []
      }
      this.selectedCiudad = null
    }
  },
  setup() {
    const store = useAppStore()
    const { toggleEveryDisplay, toggleHideConfig } = store
    onMounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      toggleHideConfig()
    })
  },
  mounted() {
    console.log('País seleccionado:', this.selectedPais)
    console.log('Región seleccionada:', this.selectedRegion)
    console.log('Ciudad seleccionada:', this.selectedCiudad)


    // TODO, arreglar esto para que se vea lindo
    if (document.getElementById('choices-day')) {
      var day = document.getElementById('choices-day')
      setTimeout(function() {
        new Choices(day)
      }, 1)

      for (let y = 1; y <= 31; y++) {
        var optn1 = document.createElement('OPTION')
        optn1.text = y
        optn1.value = y

        if (y == 1) {
          optn1.selected = true
        }

        day.options.add(optn1)
      }
    }
  }
}
</script>