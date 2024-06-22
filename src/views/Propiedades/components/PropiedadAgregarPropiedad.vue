<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'
import Dropzone from 'dropzone'
import MaterialButton from '@/components/MaterialButton.vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'

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
    detalle:'',
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
            class="w-100 border-radius-lg  mb-4 shadow-lg mx-auto"
            :src="imagenPortadaData"
            alt="portada"
          />
          <material-button class="mx-3" color="danger" v-if="imagenPortadaData" @click="removeImage">Eliminar imagen
          </material-button>
          <material-button @click="openDropzone">Subir imagen</material-button>
        </div>
        <div class="mx-4 col flex-grow">
          <h5 class="font-weight-bolder mb-3">Datos de la propiedad</h5>
          <div class="col-2" v-if="['casa', 'departamento', 'oficina', 'bodega', 'local'].includes(propiedad.type)">
            <material-checkbox
              id="amoblado"
              label="Amoblado"
              v-model="propiedad.amoblado"
            >
              ¿AMOBLADO?
            </material-checkbox>
          </div>


          <material-choices id="tipo_propiedad"
                            :options="opcionsTipoPropiedad"
                            v-model:value-choice="propiedad.type"
                            name="TipoPropiedad" label="Tipo Propiedad" :serach-enabled="false" />


          <div class="row" v-if="propiedad.type === 'casa'">
            <div class="col-2 mt-3">
              <material-checkbox
                id="piscina"
                label="Piscina"
                v-model="propiedad.piscina"
              >
                ¿Piscina?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="jardines"
                label="Jardines"
                v-model="propiedad.jardines"
              >
                ¿Jardines?
              </material-checkbox>
            </div>
            <div class="col-2 mb-2 mt-3">
              <material-checkbox
                id="patio"
                label="Patio"
                v-model="propiedad.patio"
              >
                ¿Patio?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                label="gastos comunes"
                v-model="propiedad.gastosComunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mb-3 mt-3" v-if="!propiedad.contribuciones">
              <material-checkbox
                id="aseo"
                label="aseo"
                v-model="propiedad.aseo"
              >
                ¿ASEO?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
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
                v-model="propiedad.habitaciones"
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
                v-model="propiedad.banios"
                @input="validateInput"
              />
            </div>
            <div class="col-3 mt-3">
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

          </div>
          <div class="row" v-if="propiedad.type === 'terreno'">
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                label="gastos comunes"
                v-model="propiedad.gastosComunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                label="subterraneo"
                v-model="propiedad.subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3" />
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
            <div class="col-3">
              <material-choices id="tipoTerreno"
                                :options="terrenos"
                                v-model:value-choice="propiedad.tipoTerreno"
                                name="tipoTerreno" label="Tipo de terreno" :serach-enabled="false" />
            </div>
            <div class="col-3">
              <material-input
                id="piso"
                type="number"
                is-required
                variant="static"
                label="Piso"
                placeholder="1"
                v-model="propiedad.piso"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                :options="orientaciones"
                                v-model:value-choice="propiedad.orientacion"
                                name="orientacion" label="Orientación" :serach-enabled="false" />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                type="number"
                is-required
                variant="static"
                label="Metros² totales"
                placeholder="10"
                v-model="propiedad.metrosCuadradosTotales"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="frente"
                type="number"
                is-required
                variant="static"
                label="Frente"
                placeholder="1"
                v-model="propiedad.frente"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="fondo"
                type="number"
                is-required
                variant="static"
                label="Fondo"
                placeholder="1"
                v-model="propiedad.fondo"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="topografia"
                type="text"
                is-required
                variant="static"
                label="Topografia"
                placeholder="Topografia"
                v-model="propiedad.topografia"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="formaTerreno"
                type="text"
                is-required
                variant="static"
                label="Forma de terreno"
                placeholder="Forma de terreno"
                v-model="propiedad.formaTerreno"
              ></material-input>
            </div>
          </div>
          <div class="row" v-if="propiedad.type === 'departamento'">
            <div class="col-2 mt-3">
              <material-checkbox
                id="terraza"
                label="Terraza"
                v-model="propiedad.terraza"
              >
                ¿Terraza?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mb-3 mt-3" v-if="!propiedad.contribuciones">
              <material-checkbox
                id="aseo"
                label="aseo"
                v-model="propiedad.aseo"
              >
                ¿ASEO?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                type="number"
                is-required
                variant="static"
                label="N° de piso"
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
                label="N° de baños"
                placeholder="1"
                v-model="propiedad.banios"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numHabitaciones"
                type="number"
                is-required
                variant="static"
                label="N° habitaciones"
                placeholder="1"
                v-model="propiedad.habitaciones"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numEstacionamientos"
                type="number"
                is-required
                variant="static"
                label="N° estacionamientos"
                placeholder="1"
                v-model="propiedad.estacionamientos"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numBodegas"
                type="number"
                is-required
                variant="static"
                label="N° de bodegas"
                placeholder="1"
                v-model="propiedad.bodegas"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                type="number"
                is-required
                variant="static"
                label="Metros² útiles"
                placeholder="10"
                v-model="propiedad.metrosCuadradosUtiles"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                type="number"
                is-required
                variant="static"
                label="Metros² totales"
                placeholder="10"
                v-model="propiedad.metrosCuadradosTotales"
              ></material-input>
            </div>
            <div class="col-6">
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
            <div class="col-3">
              <material-choices id="orientacion"
                                :options="orientaciones"
                                v-model:value-choice="propiedad.orientacion"
                                name="orientacion" label="Orientación" :serach-enabled="false" />
            </div>
          </div>
          <div class="row" v-if="propiedad.type === 'bodega'">
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                label="subterraneo"
                v-model="propiedad.subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
            <div class="col-3">
              <material-choices id="uso" label="Uso" :options="[
                { value: 'comercial', label: 'Comercial' , selected: true},
                { value: 'industrial', label: 'Industrial' }
                ]" v-model:value-choice="propiedad.uso">
              </material-choices>
            </div>
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
                id="numBodegas"
                type="number"
                is-required
                variant="static"
                label="Numero de bodegas"
                placeholder="1"
                v-model="propiedad.numero"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                type="number"
                is-required
                variant="static"
                label="Metros² útiles"
                placeholder="10"
                v-model="propiedad.metrosCuadradosUtiles"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                type="number"
                is-required
                variant="static"
                label="Metros² totales"
                placeholder="10"
                v-model="propiedad.metrosCuadradosTotales"
              ></material-input>
            </div>
            <div class="col-6">
              <material-input
                id="descripcion"
                type="text"
                is-required
                variant="static"
                label="Descripcion"
                placeholder="Descripción"
                v-model="propiedad.descripcion"
              ></material-input>
            </div>
          </div>
          <div class="row" v-if="propiedad.type === 'oficina'">
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                label="gastos comunes"
                v-model="propiedad.gastosComunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                label="subterraneo"
                v-model="propiedad.subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3" />
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
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
                id="numPisos"
                type="number"
                is-required
                variant="static"
                label="Numero de piso"
                placeholder="1"
                v-model="propiedad.piso"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                :options="orientaciones"
                                v-model:value-choice="propiedad.orientacion"
                                name="orientacion" label="Orientación" :serach-enabled="false" />
            </div>
            <div class="col-3">
              <material-input
                id="numBanios"
                type="number"
                is-required
                variant="static"
                label="N° de baños"
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
                label="N° de cocinas"
                placeholder="1"
                v-model="propiedad.cocinas"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numComedores"
                type="number"
                is-required
                variant="static"
                label="N° de comedores"
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
                label="N° de estacionamientos"
                placeholder="1"
                v-model="propiedad.estacionamientos"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                type="number"
                is-required
                variant="static"
                label="Metros² útiles"
                placeholder="10"
                v-model="propiedad.metrosCuadradosUtiles"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                type="number"
                is-required
                variant="static"
                label="Metros² totales"
                placeholder="10"
                v-model="propiedad.metrosCuadradosTotales"
              ></material-input>
            </div>
            <div class="col-5">
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
          <div class="row" v-if="propiedad.type === 'local'">
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="gastosComunes"
                label="gastos comunes"
                v-model="propiedad.gastosComunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mb-2 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-2 mt-3">
              <material-checkbox
                id="subterraeno"
                label="subterraneo"
                v-model="propiedad.subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
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
                id="numLocales"
                type="number"
                is-required
                variant="static"
                label="Numero de locales"
                placeholder="1"
                v-model="propiedad.numero"
              ></material-input>
            </div>
            <div class="col-6">
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
          <div class="row" v-if="propiedad.type === 'estacionamiento'">
            <div class="col-3 mt-3">
              <material-checkbox
                id="gastosComunes"
                label="gastos comunes"
                v-model="propiedad.gastosComunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
            <div class="col-2">
              <material-input
                id="numPisos"
                type="number"
                is-required
                variant="static"
                label="Numero de pisos"
                placeholder="5"
                v-model="propiedad.pisos"
              ></material-input>
            </div>
            <div class="col-2">
              <material-input
                id="numPisos"
                type="number"
                is-required
                variant="static"
                label="Numero de piso"
                placeholder="1"
                v-model="propiedad.piso"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="numEstacionamientos"
                type="number"
                is-required
                variant="static"
                label="N° estacionamientos"
                placeholder="1"
                v-model="propiedad.numero"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadrados"
                type="number"
                is-required
                variant="static"
                label="Metros² útiles"
                placeholder="10"
                v-model="propiedad.metrosCuadradosUtiles"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                type="number"
                is-required
                variant="static"
                label="Metros² totales"
                placeholder="10"
                v-model="propiedad.metrosCuadradosTotales"
              ></material-input>
            </div>
            <div class="col-6">
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
          <div class="row" v-if="propiedad.type === 'galpon'">
            <div class="col-3 mt-3">
              <material-checkbox
                id="contribuciones"
                label="Contribuciones"
                v-model="propiedad.contribuciones"
              >
                ¿Contribuciones?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="subterraneo"
                label="subterraneo"
                v-model="propiedad.subterraneo"
              >
                ¿Subterraneo?
              </material-checkbox>
            </div>
            <div class="col-3 mt-3">
              <material-checkbox
                id="gastosComunes"
                label="gastos comunes"
                v-model="propiedad.gastosComunes"
              >
                ¿Gastos comunes?
              </material-checkbox>
            </div>
            <div class="col-3"/>
            <div class="col-3">
              <material-input
                id="rol"
                type="text"
                is-required
                variant="static"
                label="Rol"
                placeholder="1231512"
                v-model="propiedad.rol"
              />
            </div>
            <div class="col-3">
              <material-input
                id="numPisos"
                type="number"
                is-required
                variant="static"
                label="Numero de piso"
                placeholder="1"
                v-model="propiedad.piso"
              ></material-input>
            </div>
            <div class="col-3">
              <material-choices id="tipoTerreno"
                                :options="terrenos"
                                v-model:value-choice="propiedad.tipoTerreno"
                                name="tipoTerreno" label="Tipo de terreno" :serach-enabled="false" />
            </div>
            <div class="col-3">
              <material-choices id="orientacion"
                                :options="orientaciones"
                                v-model:value-choice="propiedad.orientacion"
                                name="orientacion" label="Orientación" :serach-enabled="false" />
            </div>
            <div class="col-3">
              <material-input
                id="metrosCuadradosTotales"
                type="number"
                is-required
                variant="static"
                label="Metros² totales"
                placeholder="10"
                v-model="propiedad.metrosCuadradosTotales"
              ></material-input>
            </div>
            <div class="col-3">
              <material-input
                id="frente"
                type="number"
                is-required
                variant="static"
                label="Frente"
                placeholder="1"
                v-model="propiedad.frente"
                @input="validateInput"
              />
            </div>
            <div class="col-3">
              <material-input
                id="fondo"
                type="number"
                is-required
                variant="static"
                label="Fondo"
                placeholder="1"
                v-model="propiedad.fondo"
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
