<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'
import Dropzone from 'dropzone'
import MaterialButton from '@/components/MaterialButton.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'

let myDropzone = null

const tiposPropiedad = {
  casa: {
    numeroDePisos: null,
    numeroDeHabitaciones: null,
    numeroDeBanios: null,
    estacionamientos: null,
    piscina: null,
    jardines: null,
    patio: null,
    metrosCuadradosDeTerreno: null,
    metrosCuadradosDeConstruccion: null,
    antiguedad: null
  },
  terreno: {
    area: null,
    tipoTerreno: null,
    usoSuelo: null,
    topografia: null,
    servicios: null,
    formaTerreno: null,
    frente: null
  },
  departamento: {
    type: 'departamento',
    piso: null,
    banios: null,
    estacionamientos: null,
    habitaciones: null,
    bodegas: null,
    metrosCuadrados: null,
    descripcion: null
  },
  bodega: {
    type: 'bodega',
    piso: null,
    numero: null,
    descripcion: null
  },
  estacionamiento: {
    type: 'estacionamiento',
    piso: null,
    numero: null,
    descripcion: null
  },
  local: {
    type: 'local',
    piso: null,
    numero: null,
    descripcion: null
  },
  oficina: {
    type: 'oficina',
    piso: null,
    banios: null,
    cocinas: null,
    numeroDeOficinas: null,
    numeroDeComedores: null,
    numeroDeEstacionamientos: null,
    descripcion: null
  }
}
const opcionsTipoPropiedad = [
  { value: 'bodega', label: 'Bodega' },
  { value: 'casa', label: 'Casa', selected: true },
  { value: 'departamento', label: 'Departamento' },
  { value: 'local', label: 'Local' },
  { value: 'terreno', label: 'Terreno' },
  { value: 'oficina', label: 'Oficina' },
  { value: 'estacionamiento', label: 'Estacionamiento' }
]
const imagenPortadaData = ref('')
const propiedad = ref({
  type: 'terreno',
  direccion: {
    calle: '',
    numero: 0,
    comuna: '',
    region: '',
    ciudad: '',
    pais: '',
    codigoPostal: ''
  },
  propietario: {
    id: '',
    type: ''
  },
  // inicialmente, asignamos los campos de 'terreno'
  ...tiposPropiedad.casa
})


watchEffect(() => {
  // Primero, obtenemos las propiedades del tipo seleccionado
  const propiedadesTipo = tiposPropiedad[propiedad.value.type]

  // Luego, eliminamos las propiedades antiguas del objeto 'propiedad'
  for (const key in propiedad.value) {
    if (!(key in propiedadesTipo) && key !== 'type' && key !== 'direccion' && key !== 'imagenPortada' && key !== 'propietario') {
      delete propiedad.value[key]
    }
  }

  // Finalmente, agregamos las nuevas propiedades al objeto 'propiedad'
  for (const key in propiedadesTipo) {
    if (!(key in propiedad.value)) {
      propiedad.value[key] = propiedadesTipo[key]
    }
  }
})
const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}

const openDropzone = () => {
  myDropzone.hiddenFileInput.click()
}
const removeImage = () => {
  myDropzone.removeAllFiles()
  imagenPortadaData.value = null
      emit('update:imagenPortada', null)
}


const emit = defineEmits(['update:propiedad', 'update:imagenPortada'])
watchEffect(() => {
  emit('update:propiedad', propiedad.value)
})

onMounted(() => {
  myDropzone = new Dropzone('#productImg', {
    maxFiles: 1,
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
    if (myDropzone.files.length > 1) {
      myDropzone.removeFile(myDropzone.files[0])
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      imagenPortadaData.value = e.target.result
      console.log(imagenPortadaData.value)
    }
    reader.readAsDataURL(file)
      emit('update:imagenPortada', file)
  })
})
</script>


<template>
  <div id="Agregar Propiedad" class="card mt-4">
    <div class="card-header">
      <h4>Agregar {{propiedad.type}}</h4>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <!--    Agregar imagenes-->

        <div class="col-xl-4 col-lg-5">
          <h5 class="font-weight-bolder">Imágen de portada</h5>
          <p>Sube una imágen de portada para tu propiedad</p>
          <img
            v-if="imagenPortadaData"
            class="w-100 border-radius-lg  mb-4 shadow-lg mx-auto"
            :src="imagenPortadaData"
            alt="portada"
          />
          <material-button class="mx-3" color="danger" v-if="imagenPortadaData" @click="removeImage">Eliminar imagen</material-button>
          <material-button @click="openDropzone">Subir imagen</material-button>
        </div>
        <div class="mx-4 col flex-grow">
        <h5 class="font-weight-bolder mb-6">Datos de la propiedad</h5>


          <material-choices id="tipo_propiedad"
                            :options="opcionsTipoPropiedad"
                            v-model:value-choice="propiedad.type"
                            name="TipoPropiedad" label="Tipo Propiedad" :serach-enabled="false" />


      <div class="row" v-if="propiedad.type === 'casa'">
        <div class="col-3 mt-3">
          <material-checkbox
            id="piscina"
            label="Piscina"
            v-model="propiedad.piscina"
          >
            ¿La propiedad tiene piscina?
          </material-checkbox>
        </div>
        <div class="col-3 mt-3">
          <material-checkbox
            id="jardines"
            label="Jardines"
            v-model="propiedad.jardines"
          >
            ¿La propiedad tiene jardines?
          </material-checkbox>
        </div>
        <div class="col-3 mb-2 mt-3">
          <material-checkbox
            id="patio"
            label="Patio"
            v-model="propiedad.patio"
          >
            ¿La propiedad tiene patio?
          </material-checkbox>
        </div>
        <div class="col-3"></div>
        <div class="col-3">
          <material-input
            id="numPisos"
            type="number"
            is-required
            variant="static"
            label="Numero de pisos"
            placeholder="1"
            v-model="propiedad.numeroDePisos"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numPiezas"
            type="number"
            is-required
            variant="static"
            label="Numero de habitaciones"
            placeholder="1"
            v-model="propiedad.numeroDeHabitaciones"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numBanos"
            type="number"
            is-required
            variant="static"
            label="Numero de baños"
            placeholder="1"
            v-model="propiedad.numeroDeBanios"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="numEstacionamientos"
            type="number"
            is-required
            variant="static"
            label="Numero de estacionamientos"
            placeholder="1"
            v-model="propiedad.estacionamientos"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="metrosCuadradosDeTerreno"
            type="number"
            is-required
            variant="static"
            label="Metros cuadrados de terreno"
            placeholder="1"
            v-model="propiedad.metrosCuadradosDeTerreno"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="metrosCuadradosDeConstruccion"
            type="number"
            is-required
            variant="static"
            label="Metros cuadrados de construccion"
            placeholder="1"
            v-model="propiedad.metrosCuadradosDeConstruccion"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <material-input
            id="antiguedad"
            type="number"
            is-required
            variant="static"
            label="Antiguedad"
            placeholder="1"
            v-model="propiedad.antiguedad"
            @input="validateInput"
          />
        </div>
      </div>
      <div class="row" v-if="propiedad.type === 'terreno'">
        <div class="col-3">
          <material-input
            id="area"
            type="number"
            is-required
            variant="static"
            label="Area"
            placeholder="1"
            v-model="propiedad.area"
            @input="validateInput"
          />
        </div>
      </div>
      <div class="row" v-if="propiedad.type==='oficina'">
        <div class="col-3">
          <material-input
            id="numPisos"
            type="number"
            is-required
            variant="static"
            label="Numero de pisos"
            placeholder="1"
            v-model="propiedad.piso"
          ></material-input>
        </div>
        <div class="col-3">
          <material-input
            id="numBanios"
            type="number"
            is-required
            variant="static"
            label="Numero de baños"
            placeholder="1"
            v-model="propiedad.banios"
          ></material-input>

        </div>
        <div class="col-3">
          <material-input
            id="numCocinas"
            type="number"
            is-required
            variant="static"
            label="Numero de cocinas"
            placeholder="1"
            v-model="propiedad.cocinas"
          ></material-input>
        </div>
        <div class="col-3">
          <material-input
            id="numOficinas"
            type="number"
            is-required
            variant="static"
            label="Numero de oficinas"
            placeholder="1"
            v-model="propiedad.numeroDeOficinas"
          ></material-input>
        </div>
        <div class="col-3">
          <material-input
            id="numComedores"
            type="number"
            is-required
            variant="static"
            label="Numero de comedores"
            placeholder="1"
            v-model="propiedad.numeroDeComedores"
          ></material-input>
        </div>
        <div class="col-3">
          <material-input
            id="numEstacionamientos"
            type="number"
            is-required
            variant="static"
            label="Numero de estacionamientos"
            placeholder="1"
            v-model="propiedad.numeroDeEstacionamientos"
          ></material-input>
        </div>
        <div class="col-3">
          <material-input
            id="descripcion"
            type="text"
            is-required
            variant="static"
            label="Descripcion"
            placeholder="Descripcion"
            v-model="propiedad.descripcion"
          ></material-input>
        </div>
      </div>


          <LocalidadForm v-model="propiedad.direccion" />

        </div>
  </div>
  </div>
  </div>
    <div>
      <div
        id="productImg"
        action="/file-upload"
        class="form-control border dropzone"
        style="display: none;"
      ></div>
    </div>
</template>
