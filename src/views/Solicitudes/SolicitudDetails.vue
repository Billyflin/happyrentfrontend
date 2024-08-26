<script>
import { onUnmounted, ref } from 'vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { usePersonasStore } from '@/store/personasStore.js'
import router from '@/router/index.js'
import imgBancoChile from '@/assets/img/logos/bank/BCH.svg'
import imgBancoEstado from '@/assets/img/logos/bank/BE.svg'
import imgItau from '@/assets/img/logos/bank/ITUB.svg'
import imgBCI from '@/assets/img/logos/bank/BCI.SN.png'
import imgSantander from '@/assets/img/logos/bank/SAN.svg'
import imgScotiabank from '@/assets/img/logos/bank/BNS.svg'

export default {
  name: 'SolicitudDetails',
  components: { MaterialButton },
  data() {
    return {
      cuenta: {
        banco: 'Banco Estado',
        tipoCuenta: 'Cuenta Corriente',
        numeroCuenta: '123456789',
        activa: true
      },
      logos: {
        'Banco de Chile': imgBancoChile,
        'Banco Estado': imgBancoEstado,
        Itau: imgItau,
        BCI: imgBCI,
        Santander: imgSantander,
        Scotiabank: imgScotiabank
      }
    }
  },
  methods: {
    getBankLogo(banco) {
      return this.logos[banco] || this.logos['Banco de Chile'] // Devuelve un logo por defecto si el banco no se encuentra
    }
  },
  setup() {
    const auth = usePersonasStore()
    const archivoPrevisualizado = ref(null)
    const mostrarModal = ref(false)

    const previsualizarArchivo = (archivo) => {
      archivoPrevisualizado.value = `data:application/pdf;base64,${archivo.contenido}`
      mostrarModal.value = true
    }

    const descargarArchivo = (archivo) => {
      const link = document.createElement('a')
      link.href = `data:application/pdf;base64,${archivo.contenido}`
      link.download = archivo.nombre
      link.click()
    }

    const cerrarModal = () => {
      mostrarModal.value = false
      archivoPrevisualizado.value = null
    }

    if (!auth.solicitud) {
      router.push('/Solicitudes')
    }

    onUnmounted(() => {
      auth.solicitud = null
    })

    return {
      auth,
      archivoPrevisualizado,
      mostrarModal,
      previsualizarArchivo,
      descargarArchivo,
      cerrarModal
    }
  }
}
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row mt-3">
      <div class="col-lg-3">
        <router-link
          class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
          to="/Solicitudes"
        >
          <span class="material-symbols-outlined mx-2"> arrow_back </span>
          Volver
        </router-link>
      </div>
      <div class="col-12 col-md-12">
        <div id="Solicitud" class="card">
          <div class="card-header">
            <h3>Detalles de la solicitud</h3>
          </div>
          <div v-if="auth.solicitud" class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <h5 class="mb-3">Datos del solicitante</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item text-start">
                    <strong>Nombre:</strong> {{ auth.solicitud.nombre }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Apellido Paterno:</strong>
                    {{ auth.solicitud.apellidoPaterno }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Apellido Materno:</strong>
                    {{ auth.solicitud.apellidoMaterno }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Tratamiento:</strong> {{ auth.solicitud.tratamiento }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Ocupación:</strong> {{ auth.solicitud.ocupacion }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Estado Civil:</strong> {{ auth.solicitud.estadoCivil }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Nacionalidad:</strong> {{ auth.solicitud.nacionalidad }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Fecha de Nacimiento:</strong>
                    {{ auth.solicitud.fechaNacimiento }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Email:</strong> {{ auth.solicitud.email }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Teléfono:</strong> {{ auth.solicitud.telefono }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>RUT:</strong> {{ auth.solicitud.rut }}
                  </li>
                </ul>
              </div>

              <div class="col-lg-3">
                <h5 class="mb-3">Dirección</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item text-start">
                    <strong>Calle:</strong> {{ auth.solicitud.direccion.calle }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Número:</strong> {{ auth.solicitud.direccion.numero }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Detalle:</strong> {{ auth.solicitud.direccion.detalle }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Región:</strong> {{ auth.solicitud.direccion.region }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Ciudad:</strong> {{ auth.solicitud.direccion.ciudad }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>País:</strong> {{ auth.solicitud.direccion.pais }}
                  </li>
                  <li class="list-group-item text-start">
                    <strong>Código Postal:</strong>
                    {{ auth.solicitud.direccion.codigoPostal }}
                  </li>
                </ul>
              </div>

              <div class="col-lg-5">
                <div v-if="auth.solicitud.datosBancarios[0]">
                  <h5 class="mb-3">Datos Bancarios</h5>
                  <div
                    v-if="auth.solicitud.datosBancarios[0]"
                    class="card border card-plain border-radius-lg mb-3"
                  >
                    <div class="card-body d-flex align-items-center flex-row">
                      <img
                        :src="getBankLogo(auth.solicitud.datosBancarios[0].banco)"
                        alt="logo"
                        class="w-10 me-3 mb-0"
                      />
                      <div>
                        <h6 class="mb-0">
                          {{ auth.solicitud.datosBancarios[0].banco }} -
                          {{ auth.solicitud.datosBancarios[0].tipoCuenta }}
                        </h6>
                        <p class="mb-0">
                          {{ auth.solicitud.datosBancarios[0].numeroCuenta }}
                          <span
                            v-if="auth.solicitud.datosBancarios[0].activa"
                            class="badge bg-success ms-2"
                            >Activa</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <h5 class="mb-3">Sin datos bancarios</h5>
                </div>

                <div v-if="auth.solicitud.archivos && auth.solicitud.archivos.length > 0">
                  <h5 class="mb-3">Archivos adjuntos</h5>
                  <ul class="list-group mb-3">
                    <li
                      v-for="archivo in auth.solicitud.archivos"
                      :key="archivo.id"
                      class="list-group-item d-flex align-items-center"
                    >
                      <span class="material-symbols-outlined mx-2">insert_drive_file</span>
                      <a :href="archivo.url" class="text-sm" target="_blank">{{
                        archivo.nombre
                      }}</a>
                      <div class="ms-auto">
                        <MaterialButton class="btn btn-link" @click="previsualizarArchivo(archivo)"
                          >Previsualizar
                        </MaterialButton>
                        <MaterialButton class="btn btn-link" @click="descargarArchivo(archivo)"
                          >Descargar
                        </MaterialButton>
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <h5 class="mb-3">Sin archivos adjuntos</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para la previsualización -->
    <div v-if="mostrarModal" class="modal fade show" style="display: block" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Previsualización de Archivo</h5>
            <button
              aria-label="Close"
              class="btn-close"
              type="button"
              @click="cerrarModal"
            ></button>
          </div>
          <div class="modal-body">
            <iframe :src="archivoPrevisualizado" height="800px" width="100%"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>