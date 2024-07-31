<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import Dropzone from 'dropzone'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import LocalidadForm from '@/views/Shared/LocalidadForm.vue'

let myDropzone = null

const tiposPropiedad = {
  casa: {
    amoblado: null,
    rol: null,
    numeroDePisos: null,
    habitaciones: null,
    banios: null,
    estacionamientos: null,
    piscina: null,
    jardines: null,
    patio: null,
    gastosComunes: null,
    contribuciones: null,
    aseo: null,
    metrosCuadradosDeTerreno: null,
    metrosCuadradosDeConstruccion: null,
    antiguedad: null
  },
  terreno: {
    rol: null,
    type: 'terreno',
    tipoTerreno: null,
    topografia: null,
    formaTerreno: null,
    frente: null,
    fondo: null,
    piso: null,
    orientacion: null,
    gastosComunes: null,
    subterraneo: null,
    contribuciones: null,
    metrosCuadradosTotales: null
  },
  departamento: {
    amoblado: null,
    rol: null,
    type: 'departamento',
    piso: null,
    banios: null,
    estacionamientos: null,
    habitaciones: null,
    bodegas: null,
    metrosCuadradosUtiles: null,
    metrosCuadradosTotales: null,
    descripcion: null,
    orientacion: null,
    terraza: null,
    contribuciones: null,
    aseo: null
  },
  bodega: {
    amoblado: null,
    rol: null,
    type: 'bodega',
    piso: null,
    numero: null,
    descripcion: null,
    uso: null,
    metrosCuadradosUtiles: null,
    metrosCuadradosTotales: null,
    subterraneo: null,
    contribuciones: null
  },
  estacionamiento: {
    rol: null,
    type: 'estacionamiento',
    piso: null,
    pisos: null,
    numero: null,
    descripcion: null,
    gastosComunes: null,
    contribuciones: null
  },
  local: {
    amoblado: null,
    rol: null,
    type: 'local',
    piso: null,
    numero: null,
    descripcion: null,
    metrosCuadradosUtiles: null,
    metrosCuadradosTotales: null,
    gastosComunes: null,
    subterraneo: null,
    contribuciones: null
  },
  oficina: {
    amoblado: null,
    rol: null,
    type: 'oficina',
    piso: null,
    banios: null,
    cocinas: null,
    numeroDeOficinas: null,
    numeroDeComedores: null,
    estacionamientos: null,
    descripcion: null,
    metrosCuadradosUtiles: null,
    metrosCuadradosTotales: null,
    orientacion: null,
    gastosComunes: null,
    subterraneo: null,
    contribuciones: null
  },
  galpon: {
    rol: null,
    type: 'galpon',
    piso: null,
    orientacion: null,
    subterraneo: null,
    frente: null,
    fondo: null,
    metrosCuadradosTotales: null,
    contribuciones: null,
    gastosComunes: null,
    tipoTerreno: null
  }
}
const opcionsTipoPropiedad = [
  { value: 'bodega', label: 'Bodega' },
  { value: 'casa', label: 'Casa', selected: true },
  { value: 'departamento', label: 'Departamento' },
  { value: 'local', label: 'Local' },
  { value: 'terreno', label: 'Terreno' },
  { value: 'oficina', label: 'Oficina' },
  { value: 'estacionamiento', label: 'Estacionamiento' },
  { value: 'galpon', label: 'Galpón' }
]
const orientaciones = [
  { value: 'Norte', label: 'Norte', selected: true },
  { value: 'Sur', label: 'Sur' },
  { value: 'Este', label: 'Este' },
  { value: 'Oeste', label: 'Oeste' }
]
const terrenos = [
  { value: 'agricola', label: 'Agricola', selected: true },
  { value: 'habitacional', label: 'Habitacional' },
  { value: 'urbano', label: 'Urbano' }
]
const imagenPortadaData = ref('')
const propiedad = ref({
  type: 'terreno',
  direccion: {
    calle: '',
    numero: 0,
    detalle: '',
    comuna: '',
    region: '',
    ciudad: '',
    pais: '',
    codigoPostal: ''
  },
  rol: '',
  propietario: {
    id: '',
    type: ''
  },
  // inicialmente, asignamos los campos de 'terreno'
  ...tiposPropiedad.casa
})

watch(() => propiedad.value.contribuciones, (newValue) => {
  if (newValue) {
    propiedad.value.aseo = false
  }
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
      <h4>Agregar {{ propiedad.type }}</h4>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <!--    Agregar imagenes-->

        <div class="col-xl-4 col-lg-5">
          <h5 class="font-weight-bolder">Imágen de portada</h5>
          <p>1. Sube una imagen para identificar fácilmente la propiedad</p>
          <img
            v-if="imagenPortadaData"
            :src="imagenPortadaData"
            alt="portada"
            class="w-100 border-radius-lg  mb-4 shadow-lg mx-auto"
          />
          <material-button v-if="imagenPortadaData" class="mx-3" color="danger" @click="removeImage">Eliminar imagen
          </material-button>
          <material-button @click="openDropzone">Subir imagen</material-button>
        </div>
        <div class="mx-4 col flex-grow">
          <h5 class="font-weight-bolder mb-3">Datos de la propiedad</h5>
          <div v-if="['casa', 'departamento', 'oficina', 'bodega', 'local'].includes(propiedad.type)" class="col-2">
            <material-checkbox
              id="amoblado"
              v-model="propiedad.amoblado"
              label="Amoblado"
            >
              ¿AMOBLADO?
            </material-checkbox>
          </div>


          <material-choices id="tipo_propiedad"
                            v-model:value-choice="propiedad.type"
                            :options="opcionsTipoPropiedad"
                            :serach-enabled="false" label="Tipo Propiedad" name="TipoPropiedad" />


          <div v-if="propiedad.type === 'casa'" class="row">
            <div class="col-2 mt-3">
              <material-checkbox
                id="piscina"
                v-model="propiedad.piscina"
                label="Piscina"
              >
                ¿Piscina?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="jardines"
                v-model="propiedad.jardines"
                label="Jardines"
              >
                ¿Jardines?
              </material-checkbox>
            </div>
            <div class="col-2 mb-2 mt-3">
              <material-checkbox
                id="patio"
                v-model="propiedad.patio"
                label="Patio"
              >
                ¿Patio?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                v-model="propiedad.gastosComunes"
                label="gastos comunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div v-if="!propiedad.contribuciones" class="col-2 mb-3 mt-3">
              <material-checkbox
                id="aseo"
                v-model="propiedad.aseo"
                label="aseo"
              >
                ¿ASEO?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                v-model="propiedad.numeroDePisos"
                is-required
                label="Numero de pisos"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPiezas"
                v-model="propiedad.habitaciones"
                is-required
                label="Numero de habitaciones"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numBanos"
                v-model="propiedad.banios"
                is-required
                label="Numero de baños"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3 mt-3">
              <material-input
                id="antiguedad"
                v-model="propiedad.antiguedad"
                is-required
                label="Antiguedad"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numEstacionamientos"
                v-model="propiedad.estacionamientos"
                is-required
                label="Numero de estacionamientos"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosDeTerreno"
                v-model="propiedad.metrosCuadradosDeTerreno"
                is-required
                label="Metros cuadrados de terreno"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosDeConstruccion"
                v-model="propiedad.metrosCuadradosDeConstruccion"
                is-required
                label="Metros cuadrados de construccion"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>

          </div>
          <div v-if="propiedad.type === 'terreno'" class="row">
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                v-model="propiedad.gastosComunes"
                label="gastos comunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                v-model="propiedad.subterraneo"
                label="subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3" />
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-choices id="tipoTerreno"
                                v-model:value-choice="propiedad.tipoTerreno"
                                :options="terrenos"
                                :serach-enabled="false" label="Tipo de terreno" name="tipoTerreno" />
            </div>
            <div class="col-3">
              <material-input
                id="piso"
                v-model="propiedad.piso"
                is-required
                label="Piso"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                v-model:value-choice="propiedad.orientacion"
                                :options="orientaciones"
                                :serach-enabled="false" label="Orientación" name="orientacion" />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="frente"
                v-model="propiedad.frente"
                is-required
                label="Frente"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="fondo"
                v-model="propiedad.fondo"
                is-required
                label="Fondo"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="topografia"
                v-model="propiedad.topografia"
                is-required
                label="Topografia"
                placeholder="Topografia"
                type="text"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="formaTerreno"
                v-model="propiedad.formaTerreno"
                is-required
                label="Forma de terreno"
                placeholder="Forma de terreno"
                type="text"
                variant="static"
              ></material-input>
            </div>
          </div>
          <div v-if="propiedad.type === 'departamento'" class="row">
            <div class="col-2 mt-3">
              <material-checkbox
                id="terraza"
                v-model="propiedad.terraza"
                label="Terraza"
              >
                ¿Terraza?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div v-if="!propiedad.contribuciones" class="col-2 mb-3 mt-3">
              <material-checkbox
                id="aseo"
                v-model="propiedad.aseo"
                label="aseo"
              >
                ¿ASEO?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                v-model="propiedad.piso"
                is-required
                label="N° de piso"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numBanios"
                v-model="propiedad.banios"
                is-required
                label="N° de baños"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numHabitaciones"
                v-model="propiedad.habitaciones"
                is-required
                label="N° habitaciones"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numEstacionamientos"
                v-model="propiedad.estacionamientos"
                is-required
                label="N° estacionamientos"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numBodegas"
                v-model="propiedad.bodegas"
                is-required
                label="N° de bodegas"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                v-model="propiedad.metrosCuadradosUtiles"
                is-required
                label="Metros² útiles"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-6">
              <material-input
                id="descripcion"
                v-model="propiedad.descripcion"
                is-required
                label="Descripcion"
                placeholder="Descripcion"
                type="text"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                v-model:value-choice="propiedad.orientacion"
                                :options="orientaciones"
                                :serach-enabled="false" label="Orientación" name="orientacion" />
            </div>
          </div>
          <div v-if="propiedad.type === 'bodega'" class="row">
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                v-model="propiedad.subterraneo"
                label="subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-choices id="uso" v-model:value-choice="propiedad.uso" :options="[
                { value: 'comercial', label: 'Comercial' , selected: true},
                { value: 'industrial', label: 'Industrial' }
                ]" label="Uso" name="uso">
              </material-choices>
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                v-model="propiedad.numeroDePisos"
                is-required
                label="Numero de pisos"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numBodegas"
                v-model="propiedad.numero"
                is-required
                label="Numero de bodegas"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                v-model="propiedad.metrosCuadradosUtiles"
                is-required
                label="Metros² útiles"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-6">
              <material-input
                id="descripcion"
                v-model="propiedad.descripcion"
                is-required
                label="Descripcion"
                placeholder="Descripción"
                type="text"
                variant="static"
              ></material-input>
            </div>
          </div>
          <div v-if="propiedad.type === 'oficina'" class="row">
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                v-model="propiedad.gastosComunes"
                label="gastos comunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                v-model="propiedad.subterraneo"
                label="subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3" />
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numOficinas"
                v-model="propiedad.numeroDeOficinas"
                is-required
                label="Numero de oficinas"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                v-model="propiedad.piso"
                is-required
                label="Numero de piso"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                v-model:value-choice="propiedad.orientacion"
                                :options="orientaciones"
                                :serach-enabled="false" label="Orientación" name="orientacion" />
            </div>
            <div class="col-3">
              <material-input
                id="numBanios"
                v-model="propiedad.banios"
                is-required
                label="N° de baños"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>

            </div>
            <div class="col-3">
              <material-input
                id="numCocinas"
                v-model="propiedad.cocinas"
                is-required
                label="N° de cocinas"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numComedores"
                v-model="propiedad.numeroDeComedores"
                is-required
                label="N° de comedores"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numEstacionamientos"
                v-model="propiedad.estacionamientos"
                is-required
                label="N° de estacionamientos"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                v-model="propiedad.metrosCuadradosUtiles"
                is-required
                label="Metros² útiles"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-5">
              <material-input
                id="descripcion"
                v-model="propiedad.descripcion"
                is-required
                label="Descripcion"
                placeholder="Descripcion"
                type="text"
                variant="static"
              ></material-input>
            </div>
          </div>
          <div v-if="propiedad.type === 'local'" class="row">
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                v-model="propiedad.gastosComunes"
                label="gastos comunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                v-model="propiedad.subterraneo"
                label="subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                v-model="propiedad.piso"
                is-required
                label="Numero de pisos"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numLocales"
                v-model="propiedad.numero"
                is-required
                label="Numero de locales"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                v-model="propiedad.metrosCuadradosUtiles"
                is-required
                label="Metros² útiles"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-6">
              <material-input
                id="descripcion"
                v-model="propiedad.descripcion"
                is-required
                label="Descripcion"
                placeholder="Descripcion"
                type="text"
                variant="static"
              ></material-input>
            </div>
          </div>
          <div v-if="propiedad.type === 'estacionamiento'" class="row">
            <div class="col-3 mt-3">
              <material-checkbox
                id="gastosComunes"
                v-model="propiedad.gastosComunes"
                label="gastos comunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-2">
              <material-input
                id="numPisos"
                v-model="propiedad.pisos"
                is-required
                label="Numero de pisos"
                placeholder="5"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-2">
              <material-input
                id="numPisos"
                v-model="propiedad.piso"
                is-required
                label="Numero de piso"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numEstacionamientos"
                v-model="propiedad.numero"
                is-required
                label="N° estacionamientos"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                v-model="propiedad.metrosCuadradosUtiles"
                is-required
                label="Metros² útiles"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-6">
              <material-input
                id="descripcion"
                v-model="propiedad.descripcion"
                is-required
                label="Descripcion"
                placeholder="Descripcion"
                type="text"
                variant="static"
              ></material-input>
            </div>
          </div>
          <div v-if="propiedad.type === 'galpon'" class="row">
            <div class="col-3 mt-3">
              <material-checkbox
                id="contribuciones"
                v-model="propiedad.contribuciones"
                label="Contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="subterraneo"
                v-model="propiedad.subterraneo"
                label="subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="gastosComunes"
                v-model="propiedad.gastosComunes"
                label="gastos comunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3" />
            <div class="col-3">
              <material-input
                id="rol"
                v-model="propiedad.rol"
                is-required
                label="Rol"
                placeholder="1231512"
                type="text"
                variant="static"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                v-model="propiedad.piso"
                is-required
                label="Numero de piso"
                placeholder="1"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="tipoTerreno"
                                v-model:value-choice="propiedad.tipoTerreno"
                                :options="terrenos"
                                :serach-enabled="false" label="Tipo de terreno" name="tipoTerreno" />
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                v-model:value-choice="propiedad.orientacion"
                                :options="orientaciones"
                                :serach-enabled="false" label="Orientación" name="orientacion" />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                v-model="propiedad.metrosCuadradosTotales"
                is-required
                label="Metros² totales"
                placeholder="10"
                type="number"
                variant="static"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="frente"
                v-model="propiedad.frente"
                is-required
                label="Frente"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="fondo"
                v-model="propiedad.fondo"
                is-required
                label="Fondo"
                placeholder="1"
                type="number"
                variant="static"
                @input="validateInput"
              />
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
