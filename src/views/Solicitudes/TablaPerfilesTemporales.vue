<script>
import MaterialButton from '@/components/MaterialButton.vue'
import SolicitudDetails from '@/views/Solicitudes/SolicitudDetails.vue'
import { useAuthStore } from '@/store/index.js'
import axios from 'axios'

export default {
  name: 'TablaPerfilesTemporales',
  components: { SolicitudDetails, MaterialButton },
  props: {
    headers: {
      type: Array,
      default: () => [
        'Nombre', 'Rut', 'Email', 'Direccion', 'Tipo Entidad', 'Archivos', 'Accion'
      ]
    },
    lists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      auth: useAuthStore(),
      sending: false
    }
  }
  ,
  methods: {
    removeSolicitud(id) {
      console.log(id)
    },
    aceptarSolicitud(id) {
      try {
        this.sending = true
        axios.post(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/temporal/real`,
          {
            idUsuario: id
      }      )
          .then((it) => {
            console.log(it)
            this.sending = false
          })
          .catch((err) => {
            console.error(err)
            if (err.response && err.response.status === 500 && err.response.data === 'Token Invalido.') {
              this.isTokenValid = false
            }
            console.error(err)
          })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<template>
  <div class="mt-4 card">
    <div class="pb-0 card-header d-flex align-items-center justify-content-between">
      <h5>Solicitudes Entrantes</h5>
      <p class="mb-0 text-sm">
        <span class="text-success me-2"> <i class="fas fa-arrow-up"></i> 3.48%</span>
        <span class="text-nowrap">Desde el mes pasado</span>
      </p>
    </div>

    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
          <tr>
            <th
              v-for="(header, index) of headers"
              :key="index"
              :class="index >= 1 ? 'text-center ps-2' : ''"
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              {{ header }}
            </th>
          </tr>
          </thead>
          <tbody v-if="lists">
          <tr
            v-for="list  in lists"
            :key="list"
          >
            <td @click="console.log(list); auth.solicitud=list.perfil">
              <div class="px-3 py-1 d-flex">
                <div class="d-flex flex-column justify-content-center">
                  <router-link
                    :to="{name:'SolicitudDetails'}">
                    <h6 class="mb-0 text-sm text-capitalize">{{ list.perfil.nombre }}</h6>
                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                      <span class="text-success">{{ list.perfil.direccion.ciudad }}</span>
                      {{ list.perfil.direccion.region + ', ' + list.perfil.direccion.pais }}
                    </p>
                  </router-link>
                </div>
              </div>
            </td>
            <td>
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ list.perfil.rut }}
              </p>
            </td>
            <td class="text-sm align-middle">
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ list.perfil.email }}
              </p>
            </td>
            <td class="align-middle text-center">
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ list.perfil.direccion.calle + ' ' + list.perfil.direccion.numero }}
              </p>
            </td>
            <td class="align-middle text-center">
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ list.perfil.type.charAt(0).toUpperCase() + list.perfil.type.slice(1) }}
              </p>
            </td>
            <td class="align-middle text-center">
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ list.perfil.archivos.length }}
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
                  @click="aceptarSolicitud(list.id)"
                >
                  <span class="material-symbols-outlined mr-3"
                        style="font-size: 16px; margin-right: 10px;;">person_add</span> Aceptar
                </material-button>
                <material-button
                  class="my-sm-auto mt-2 mb-0 d-flex align-items-center"
                  color="danger"
                  name="button"
                  size="sm"
                  type="button"
                  variant="gradient"
                  @click="removeSolicitud(list.id)"
                >
                  <span class="material-symbols-outlined mr-3" style="font-size: 16px; margin-right: 10px;">person_remove</span>
                  Eliminar
                </material-button>
              </div>
            </td>

          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>

</template>
