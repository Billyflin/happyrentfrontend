<template>
  <!--  Seccion Propiedad-->
  <formulario-propiedad-contrato   />

  <!--  Seccion Enviar Correo-->
  <div id="Solicitar datos" class="card mt-5">
    <div class="card-header">
      <h5>Solicitar datos al arrendatario </h5>
      <p class="mb-0 text-sm">
        El arrendatario recibirá un correo con un link para completar los datos necesarios para el contrato.
        Estos pueden ser verificados por el arrendador cuando sean completados.
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input
            id="email"
            type="email"
            variant="static"
            label="Email"
            placeholder="Email"
            :disabled="isEmailDisabled"
          />
        </div>
        <div class="col-4">
          <material-input
            id="confirmEmail"
            type="email"
            variant="static"
            label="Confimar Email"
            placeholder="Confirma Email"
            :disabled="isConfirmEmailDisabled"
          />
        </div>
        <div class="col-4">
          <MaterialButton class="mt-4" variant="gradient" color="primary" fullWidth @click="blockearInputs">Enviar
          </MaterialButton>
        </div>
      </div>
      <div v-if="isEmailDisabled" class="row mt-3">
          <span class="badge badge-success">Correo enviado</span>

      </div>
    </div>
  </div>

  <!--  Seccion arrendador-->
  <div id="Arrendador" class="card mt-5">
    <div class="card-header">
      <h5>Datos del arrendador</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-sm-4 col-3">
          <label class="form-label ms-0">Tipo Arrendador</label>
          <select
            id="choices-tipo-arrendador"
            class="form-control"
            name="choices-tipo-arrendador"
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
            label="Rut Arrendador"
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
            id="NombreArrendador"
            variant="static"
            label="Nombre Arrendador"
            placeholder="Nombre"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoPaternoArrendador"
            variant="static"
            label="Apellido Paterno Arrendador"
            placeholder="Apellido"
          />
        </div>
        <div class="col-4">
          <material-input
            id="ApellidoMaternoArrendador"
            variant="static"
            label="Apellido Materno Arrendador"
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
        <h5>Contacto Arrendador</h5>
      </div>
      <div class="row">
        <div class="col-4 mt-4">
          <material-input
            id="emailArrendador"
            type="email"
            variant="static"
            label="Email Arrendador"
            placeholder="Email"
          />
        </div>
        <div class="col-4 mt-4">
          <material-input
            id="confirmEmailArrendador"
            type="email"
            variant="static"
            label="Confimar Email Arrendador"
            placeholder="Confirma Email"
          />
        </div>
        <div class="col-2 mt-4">
          <material-input
            id="ArrendadorPhoneNumber"
            type="phone"
            variant="static"
            label="Numero de teléfono"
            placeholder="+569 xxxxxxxx"
          />
        </div>

      </div>

      <div class="card-category mt-4">
        <h5>Dirección Arrendador</h5>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-3 mt-4">
            <material-input
              id="calleDirectionArrendador"
              variant="static"
              label="Calle"
              placeholder="Calle"
            />
          </div>
          <div class="col-1 mt-4">
            <material-input
              id="numeroDirectionArrendador"
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
  <!--  Seccion Reajuste-->
  <div id="Reajuste" class="card mt-5">
    <div class="card-header">
      <h5>Configuración Pagos y Reajustes</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input
            id="valorArriendo"
            type="number"
            variant="static"
            label="Valor Arriendo"
            placeholder="Valor Arriendo"
          />
        </div>
        <div class="col-4">
          <material-input
            id="fechaInicio"
            type="date"
            variant="static"
            label="Fecha Inicio"
            placeholder="Fecha Inicio"
          />
        </div>
        <div class="col-4">
          <material-input
            id="fechaTermino"
            type="date"
            variant="static"
            label="Fecha Termino"
            placeholder="Fecha Termino"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <material-input
            id="reajuste"
            type="number"
            variant="static"
            label="Reajuste"
            placeholder="Reajuste"
            v-model="reajusteValue"
            @input="updateProgressBar"
          />
        </div>
        <div class="col-4">
          <material-progress
            color="success"
            variant="gradient"
            :model-value="progressValue"
          />
        </div>
      </div>
      <div class="row">

        <div class="col-sm-4 col-3">
          <label class="form-label mt-4 ms-0">Meses de duración del contrato</label>
          <select
            id="choices-day"
            class="form-control"
            name="choices-day"
          ></select>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import * as Choices from 'choices.js'
import MaterialButton from '@/components/MaterialButton.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import Dropzone from 'dropzone'
import MaterialProgress from '@/components/MaterialProgress.vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'

export default {
  name: 'SideNavItem',
  components: {
    FormularioPropiedadContrato,
    MaterialProgress,
    MaterialButton,
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
  mounted() {
    let myDropzone = new Dropzone('#propiedadImg', {
      maxFiles: 6,
      acceptedFiles: 'image/*',
      autoProcessQueue: false,
      addRemoveLinks: true,
      dictRemoveFile: 'Eliminar',
      dictDefaultMessage: 'Arrastra aquí tus imágenes',
      dictFallbackMessage: 'Tu navegador no soporta arrastrar y soltar para subir archivos',
      dictInvalidFileType: 'No puedes subir este tipo de archivo',
      dictFileTooBig: 'El archivo es muy grande',
      dictCancelUpload: 'Cancelar subida'


    })

    myDropzone.on('addedfile', (file) => {
      if (myDropzone.files.length > 6) {
        myDropzone.removeFile(myDropzone.files[0])
      }
      console.log(`Archivo añadido: ${file.name}`)
    })


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
    if (document.getElementById('choices-tipo-propiedad')) {
      var gender = document.getElementById('choices-tipo-propiedad')
      new Choices(gender, {
        allowHTML: true
      })
    }
    if (document.getElementById('choices-tipo-arrendador')) {
      new Choices(document.getElementById('choices-tipo-arrendador'), {
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
