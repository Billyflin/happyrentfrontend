<template>
  <div v-if="isTokenValid" class="container-fluid mt-4">
    <div class="row mt-3 align-items-center">
      <div class="col-5">
        <router-link to="/">
          <div class="d-flex">
            <div class="row mt-3">
              <img alt="Logo" class="btn btn-link px-3" height="90" src="../../assets/img/logos/LogoHappBlanco.svg"
                   width="100" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-2 text-center">
        <h1>Solicitud</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <div id="Arrendatario" class="card">
      <div class="card-header pb-0">
        <h5>Datos del Arrendatario</h5>
      </div>
      <div class="card-body pt-0">
        <!--        Contenido?-->
        <div v-if="!sending" class="row">
          <div class="col-md-3 mt-4">
            <material-input id="nombres" v-model="persona.nombre" is-required label="Nombres"
                            variant="static" />
          </div>
          <div class="col-md-3 mt-4">
            <material-input id="apellidoPaterno" v-model="persona.apellidoPaterno" is-required
                            label="Apellido Paterno"
                            variant="static" />
          </div>
          <div class="col-md-3 mt-4">
            <material-input id="apellidoMaterno" v-model="persona.apellidoMaterno" is-required
                            label="Apellido Materno"
                            variant="static" />
          </div>
          <div class="col-md-3 mt-4">
            <material-input id="rut" v-model="persona.rut" is-required label="RUT de la persona" type="rut"
                            variant="static" />
          </div>
          <div class="col-md-3 mt-4">
            <MaterialChoices id="estadoCivil" v-model:text-choice="persona.estadoCivil"
                             :options="opcionsEstadoCivil" label="Estado Civil" name="estadoCivil" />
          </div>
          <div class="col-md-3 mt-4">
            <MaterialChoices id="nacionalidad" v-model:text-choice="persona.nacionalidad" :options="nacionalidad"
                             label="Nacionalidad" name="Nacionalidad" />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="ocupacion" v-model="persona.ocupacion" is-required label="Ocupación" type="text"
                            variant="static" />
          </div>
          <div class="col-md-2 mt-4">
            <MaterialChoices id="pronombres" v-model:text-choice="persona.tratamiento" :options="pronombres"
                             label="Pronombres" name="Pronombres" />
          </div>
          <div class="col-md-2 mt-4">
            <material-input id="telefono" v-model="persona.telefono" is-required label="Teléfono"
                            placeholder="9 xxxxxxxx"
                            type="telefono"
                            variant="static" />
          </div>
          <div class="col-md-2 mt-4">
            <material-input
              id="FechaNacimiento"
              v-model="persona.fechaNacimiento"
              is-required
              label="Fecha de Nacimiento"
              placeholder="dd/mm/aaaa"
              type="date"
              variant="static"
            />
          </div>
          <div class="col-md-4 mt-4">
            <material-input id="email" v-model="persona.email" is-required label="Email" type="text"
                            variant="static" />
          </div>
          <div class="col-4 mt-4">
            <material-input
              id="confirmEmailRepresentanteLegal"
              label="Confimar Email"
              placeholder="Confirma Email"
              type="email"
              variant="static"

            />
          </div>




        </div>
        <div v-else class="row">
          <div class="col-12 text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Enviando...</span>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <b>Inserte
            <span v-if="carnet">Carnet</span>
            <span v-if="liquidaciones">,  Liquidaciones</span>
            <span v-if="certificadoAFP">,  Certificado AFP</span>
            <span v-if="certificadoDicom">,  Certificado Dicom</span>
            <span v-if="carpetaTributaria">,  Carpeta Tributaria</span>
            <span v-if="contratoTrabajo">,  Contrato de Trabajo</span>
          </b>
        </div>


        <div v-if="carnet || liquidaciones || certificadoAFP|| carpetaTributaria||certificadoDicom || contratoTrabajo && !sending"
             class="mt-4">
          <!--    dropzone para documentos -->
          <div  class="file-dropzone">
            <div id="idDropzone" class="dropzone"></div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div class="col-lg-5">
        <div id="Direccion" class="card">
          <div class="card-header pb-0">
            <h5>Dirección</h5>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-12">
                <LocalidadForm v-model="persona.direccion" />
              </div>
            </div>
          </div>
          </div>

        <div id="DatosBancarios" class="card mt-4">
          <div class="card-header pb-0">
            <h5>Datos bancarios</h5>
          </div>
          <div class="card-body pt-0">
            <datos-banca-solicitud :persona="persona" />

          </div>
        </div>
      </div>
    </div>

    <material-button :disabled="sending" class="mt-4 mb-7 " full-width size="lg" variant="success" @click="emitData">Enviar
    </material-button>
  </div>


  <!--  <button @click="console.log(files)">Log Files</button>-->
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { validate as isValidUUID } from 'uuid'
import Dropzone from 'dropzone'
import LocalidadForm from '@/views/Shared/LocalidadForm.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { useAppStore } from '@/store/appStore.js'
import { createSolicitud } from '@/servicios/solicitudService.js'
import router from '@/router/index.js'
import DatosBancaSolicitud from '@/views/Solicitudes/component/DatosBancaSolicitud.vue'

export default {
  name: 'Solicitud',
  components: { DatosBancaSolicitud, MaterialChoices, LocalidadForm, MaterialButton, MaterialInput },
  props: {
    token: { type: String, required: true },
    carnet: Boolean,
    liquidaciones: Boolean,
    certificadoAFP: Boolean,
    datosBancarios: Boolean,
    certificadoDicom: Boolean,
    carpetaTributaria: Boolean,
    contratoTrabajo: Boolean
  },
  data() {
    return {
      pronombres: [
        { value: 'Don.', text: 'Don.' },
        { value: 'Doña.', text: 'Doña.' }
      ],
      opcionsEstadoCivil: [
        { value: 'Soltero', text: 'Soltero' },
        { value: 'Casado', text: 'Casado' },
        { value: 'Divorciado', text: 'Divorciado' },
        { value: 'Viudo', text: 'Viudo' },
        { value: 'Separado', text: 'Separado' },
        { value: 'Conviviente', text: 'Conviviente' }
      ],
      nacionalidad: [
        { value: 'Chile', text: 'Chile' },
        { value: 'Argentina', text: 'Argentina' },
        { value: 'Perú', text: 'Perú' }
      ],

      files: [], // Asegúrate de inicializar `files` como un array
      sending: false
    }
  },
  methods: {
    async emitData() {
      await this.v$.$validate()
      if (!this.v$.$error) {
        this.sending = true
        const formData = new FormData()
        formData.append('persona', new Blob([JSON.stringify(this.persona)], { type: 'application/json' }))
        this.files.forEach(file => formData.append('files', file))
        try {
          await createSolicitud(
            this.token,
            formData
          ).then((it) => {
            console.log(it)
           router.push({ name: 'SolicitudEnviada' })
          }).catch((err) => {
            console.error(err)
            if (err.response && err.response.status === 500 && err.response.data === 'Token Invalido.') {
              this.isTokenValid = false
            }
            console.error(err)
          }).finally(() => {
            this.sending = false
          })
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  setup(props) {
    const store = useAppStore()
    const sending = ref(false)
    const isTokenValid = computed(() => isValidUUID(props.token))
    const { toggleEveryDisplay } = store
    const persona = ref({
      type: 'persona',
      rut: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      telefono: '',
      ocupacion: '',
      direccion: {
        calle: '',
        numero: '',
        detalle: '',
        codigoPostal: '',
        pais: '',
        region: '',
        ciudad: ''
      },
      datosBancarios: [{
        banco: '',
        tipoCuenta: '',
        numeroCuenta: '',
        rut: '',
        email: ''
      }],
      email: '',
      tratamiento: '',
      estadoCivil: ''
    })
    const v$ = useVuelidate()
    const dropzone = ref(null)
    const files = ref([]) // Mantén `files` como un array reactivo

    onMounted(() => {
      toggleEveryDisplay()
      if (props.carnet || props.liquidaciones || props.certificadoAFP || props.carpetaTributaria || props.certificadoDicom || props.contratoTrabajo) {
        dropzone.value = new Dropzone('#idDropzone', {
          url: '/', // URL de destino para la carga
          autoProcessQueue: false,
          acceptedFiles: '.pdf,.doc,.docx,.xls,.xlsx',
          dictDefaultMessage: 'Arrastra los archivos aquí o haz clic para subir documentos',
          maxFilesize: 5, // Tamaño máximo del archivo en MB
          previewTemplate: `
            <div class="dz-preview dz-file-preview card border">
              <div class="card-body d-flex align-items-center row">
                <div class="dz-thumbnail col-12 d-flex justify-content-center">
                  <i class="fas fa-file-alt fa-3x" data-dz-thumbnail></i>
                </div>
                <div class="dz-info flex-grow-1 col-12">
                  <div class="dz-filename font-weight-bold"><span data-dz-name></span></div>
                  <div class="dz-size text-muted" data-dz-size></div>
                  <div class="dz-error-message text-danger mt-2"><span data-dz-errormessage></span></div>
                </div>
                <div class="dz-remove col-12">
                  <button class="btn btn-danger btn-sm" data-dz-remove>Eliminar</button>
                </div>
              </div>
            </div>
          `,
          init: function() {
            this.on('addedfile', (file) => {
              files.value.push(file)
              // Cambiar el icono del thumbnail según la extensión del archivo
              const iconElement = file.previewElement.querySelector('[data-dz-thumbnail]')
              const fileType = file.name.split('.').pop().toLowerCase()
              switch (fileType) {
                case 'pdf':
                  iconElement.className = 'fas fa-file-pdf fa-3x'
                  break
                case 'doc':
                case 'docx':
                  iconElement.className = 'fas fa-file-word fa-3x'
                  break
                case 'xls':
                case 'xlsx':
                  iconElement.className = 'fas fa-file-excel fa-3x'
                  break
                default:
                  iconElement.className = 'fas fa-file-alt fa-3x'
              }
            })
            this.on('removedfile', (file) => {
              files.value = files.value.filter(f => f !== file)
            })
            this.on('error', (file) => {
              this.removeFile(file) // Eliminar archivo de la lista
            })
          }
        })
      }
    })

    onUnmounted(() => {
      toggleEveryDisplay()
      if (dropzone.value) {
        dropzone.value.destroy()
      }
    })

    return {
      persona,
      v$,
      isTokenValid,
      sending,
      dropzone,
      files
    }
  }
}
</script>

<style scoped>
.file-dropzone {
  border: 2px dashed #13505B;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
