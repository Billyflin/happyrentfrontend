<template>
  <div v-if="loading">
    <div class="d-flex justify-content-center align-items-center" style="height: 50vh">
      <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  </div>
  <div v-else-if="solicitudes.length === 0 && !loading">
    <div class="mt-4">
      <div class="alert alert-primary text-light text-center">No hay solicitudes entrantes</div>
    </div>
  </div>
  <div v-else class="mt-4 card">
    <div class="pb-0 card-header d-flex align-items-center justify-content-between">
      <h5>Solicitudes Entrantes</h5>
    </div>
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-3 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
                :class="index >= 1 ? 'text-center ps-2' : ''"
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <transition-group v-if="solicitudes" name="list" tag="tbody">
            <tr v-for="(solicitud, index) in solicitudes" :key="solicitud.id">
              <td>
                <div class="px-3 py-1 d-flex">
                  <div
                    class="d-flex flex-column justify-content-center"
                    @click="verDetalle(solicitud.perfil.id)"
                  >
                    <router-link :to="{ name: 'SolicitudDetails' }">
                      <h6 class="mb-0 text-sm text-capitalize">{{ solicitud.perfil.nombre }}</h6>
                      <p class="mb-0 text-sm font-weight-bold text-secondary">
                        <span class="text-success">{{ solicitud.perfil.direccion.ciudad }}</span>
                        {{
                          solicitud.perfil.direccion.region + ', ' + solicitud.perfil.direccion.pais
                        }}
                      </p>
                    </router-link>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{ solicitud.perfil.rut }}
                </p>
              </td>
              <td class="text-sm align-middle">
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{ solicitud.perfil.email }}
                </p>
              </td>
              <td class="align-middle text-center">
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{ solicitud.perfil.direccion.calle + ' ' + solicitud.perfil.direccion.numero }}
                </p>
              </td>
              <td class="align-middle text-center">
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{
                    solicitud.perfil.type.charAt(0).toUpperCase() + solicitud.perfil.type.slice(1)
                  }}
                </p>
              </td>
              <td class="align-middle text-center">
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{ solicitud.perfil.archivos.length }}
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="text-center d-flex align-items-center">
                  <material-button
                    class="my-sm-auto mt-2 mb-0 mx-1 d-flex align-items-center"
                    color="success"
                    name="button"
                    size="sm"
                    type="button"
                    variant="gradient"
                    @click="aceptarSolicitud(solicitud.id, index)"
                  >
                    <span
                      class="material-symbols-outlined mr-3"
                      style="font-size: 16px; margin-right: 10px"
                      >person_add</span
                    >Aceptar
                  </material-button>
                  <material-button
                    class="my-sm-auto mt-2 mb-0 d-flex align-items-center"
                    color="danger"
                    name="button"
                    size="sm"
                    type="button"
                    variant="gradient"
                    @click="removeSolicitud(solicitud.id, index)"
                  >
                    <span
                      class="material-symbols-outlined mr-3"
                      style="font-size: 16px; margin-right: 10px"
                      >person_remove</span
                    >Eliminar
                  </material-button>
                </div>
              </td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { onMounted, ref } from 'vue'
import { aceptarSolicitud, getSolicitudes } from '@/servicios/solicitudService.js'
import { usePersonasStore } from '@/store/personasStore.js'

export default {
  name: 'TablaPerfilesTemporales',
  components: { MaterialButton },
  props: {
    headers: {
      type: Array,
      default: () => ['Nombre', 'Rut', 'Email', 'Direccion', 'Tipo Entidad', 'Archivos', 'Accion']
    }
  },
  setup() {
    const solicitudes = ref([])
    const loading = ref(false)
    const store = usePersonasStore()
    const fetchSolicitudes = async () => {
      try {
        loading.value = true
        const response = await getSolicitudes()
        solicitudes.value = response.data
        loading.value = false
      } catch (error) {
        console.error('Error fetching solicitudes:', error)
        loading.value = false
      }
    }

    const aceptarSolicitudHandler = async (id, index) => {
      try {
        await aceptarSolicitud(id)
        solicitudes.value.splice(index, 1)
      } catch (error) {
        console.error('Error accepting solicitud:', error)
      }
    }

    const rechazarSolicitudHandler = async (id, index) => {
      try {
        // await rechazarSolicitud(id);
        solicitudes.value.splice(index, 1)
      } catch (error) {
        console.error('Error rejecting solicitud:', error)
      }
    }

    const verDetalle = (solicitud) => {
      console.log('Ver detalle de solicitud:', solicitud)
      // Lógica para ver detalle de solicitud
      store.fetchSolicitud(solicitud)
    }

    onMounted(() => {
      fetchSolicitudes()
    })

    return {
      solicitudes,
      aceptarSolicitud: aceptarSolicitudHandler,
      removeSolicitud: rechazarSolicitudHandler,
      verDetalle,
      loading
    }
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to /* .list-leave-active en versiones inferiores a 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
