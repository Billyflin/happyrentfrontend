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
          <label class="form-label ms-0">Tipo Arrendatario</label>
          <select
            id="choices-tipo-arrendatario"
            class="form-control"
            name="choices-tipo-arrendatario"
          >
            <option value="Empresa">Empresa</option>
            <option value="Persona Natural">Persona Natural</option>

          </select>
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
            v-if = "values === 'Chile'"
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
          <label class="form-label mt-4 ms-0" for="choices-estadoCivil-arrendatario">Estado Civil</label>
          <select id="choices-estadoCivil-arrendatario" class="form-control">
            <!-- Opciones de regiones según el país seleccionado -->
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Viudo">Viudo</option>
            <option value="Separado">Separado</option>
            <option value="Conviviente">Conviviente</option>
          </select>
        </div>
        <div class="col-sm-2 col-2">
          <label class="form-label mt-4 ms-0" for="choices-estadoCivil-arrendatario">Nacionalidad</label>
          <select id="choices-nacionalidad-arrendatario" class="form-control" disabled="disabled">
            <!-- Opciones de regiones según el país seleccionado -->
            <option value="Chileno">
              Chileno
            </option>
          </select>
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
          <div class="col-sm-2 col-2">
            <label class="form-label mt-4 ms-0" for="choices-pais">País</label>

            <select class="form-control" id="choices-pais-arrendatario"
                    name="choices-pais-arrendatario">
              <option value="Chile">Chile</option>
              <!-- Agrega más opciones aquí -->
            </select>

          </div>
          <div class="col-sm-2 col-2">
            <label class="form-label mt-4 ms-0" for="choices-region-arrendatario">Región</label>
            <select v-model="selectedRegion" id="choices-region-arrendatario" :disabled="!selectedPais">
              <!-- Opciones de regiones según el país seleccionado -->
              <option v-for="region in regions" :key="region">{{ region }}</option>
            </select>
          </div>

          <div class="col-sm-3 col-2">
            <label class="form-label mt-4 ms-0" for="choices-ciudad-arrendatario">Ciudad</label>
            <select v-model="selectedCiudad" id="choices-ciudad-arrendatario" :disabled="!selectedRegion">
              <!-- Opciones de ciudades según la región seleccionada -->
              <option v-for="ciudad in ciudades" :key="ciudad">{{ ciudad }}</option>
            </select>
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
// todo re importar para el uuid
// import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// const route = useRoute()
// const uuid = ref(route.params.uuid)
// console.log(uuid.value) // Imprime el valor de uuid en la consola

export default {
  name: 'FormularioInvitado',
  components: {
    MaterialInput
  }, data() {
    return {
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
    if (document.getElementById('choices-ciudad')) {
      var city = document.getElementById('choices-ciudad')
      new Choices(city)
    }
    if (document.getElementById('choices-region')) {
      var region = document.getElementById('choices-region')
      new Choices(region, {
        allowHTML: true,
        searchEnabled: false
      })
    }
    if (document.getElementById('choices-pais')) {
      const country = document.getElementById('choices-pais')
      new Choices(country,
        {
          allowHTML: true, itemSelectText: 'Presiona para seleccionar'
        })
    }
    if (document.getElementById('choices-tipo-arrendatario')) {
      new Choices(document.getElementById('choices-tipo-arrendatario'), {
        allowHTML: true
      })
    }

    // seccion arrendatario
    if (document.getElementById('choices-estadoCivil-arrendatario')) {
      new Choices(document.getElementById('choices-estadoCivil-arrendatario'), {
        allowHTML: true
      })
    }
    if (document.getElementById('choices-ciudad-arrendatario')) {
      new Choices(document.getElementById('choices-ciudad-arrendatario'))
    }
    if (document.getElementById('choices-region-arrendatario')) {
      new Choices(document.getElementById('choices-region-arrendatario'), {
        allowHTML: true,
        searchEnabled: false
      })
    }
    if (document.getElementById('choices-pais-arrendatario')) {
      new Choices(document.getElementById('choices-pais-arrendatario'),
        {
          allowHTML: true, itemSelectText: 'Presiona para seleccionar'
        })
    }
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