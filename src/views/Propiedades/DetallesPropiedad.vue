<template>
  <div class="container-fluid">
    <div class="row"  v-if="store.propiedad">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-4">
            <ImgPropiedadDetails :store="store" />
            <div class="mt-4" v-if="store.propiedad.propietario">
              <PropietarioDetallesPropiedad :propietario="store.propiedad.propietario" />
            </div>
            <div class="mt-4" v-if="store.propiedad.propietario">
              <generarDocumentos />
            </div>

          </div>
          <div class="col-lg-8">
            <ListaDireccionPropiedad :direccion="store.propiedad.direccion" />
            <div class="mt-4" v-if="store.propiedad">
              <DetallesDePropiedad :propiedad="store.propiedad" />
            </div>
            <div class="mt-4 " v-if="store.propiedad.inventarios">
              <ListaInventariosPropiedad :inventarios="store.propiedad.inventarios" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="mb-4 " v-if="store.propiedad.arrendado">
          <ContratoActivoPropiedad :arrendado="store.propiedad.arrendado" :propiedad-id="store.propiedad.id" />
        </div>
        <div v-if="store.propiedad">
          <div>
            <div class="card">
              <!--              comision-->
              <div class="card-body ">
                <div class="justify-between">
                  <h5>Comisión</h5>
                  <p class="card-text">Comisión: 10%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <ServiciosItem />
          </div>
          <div class="mt-4">
            <ContactoPerfil :propietario="store.propiedad.propietario" />
          </div>
          <div class="mt-4" v-if="store.propiedad">
            <TimelinePropiedad :propiedad="store.propiedad" />
          </div>
          <div class="mt-4">
            <EliminarPropiedad :propiedad="store.propiedad" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgPropiedadDetails from '@/views/Propiedades/components/ImgPropiedadDetails.vue'
import { usePropiedadesStore } from '@/store/propiedadesStore.js'
import ListaDireccionPropiedad from '@/views/Propiedades/components/ListaDireccionPropiedad.vue'
import ContratoActivoPropiedad from '@/views/Propiedades/components/ContratoActivoPropiedad.vue'
import DetallesDePropiedad from '@/views/Propiedades/DetallesDePropiedad.vue'
import { formatDateTime } from '@/views/NuevoContrato/utils.js'
import PropietarioDetallesPropiedad from '@/views/Propiedades/PropietarioDetallesPropiedad.vue'
import ListaInventariosPropiedad from '@/views/Propiedades/ListaInventariosPropiedad.vue'
import ContactoPerfil from '@/views/Propiedades/ContactoPerfil.vue'
import router from '@/router/index.js'
import ServiciosItem from '@/views/Propiedades/components/ServiciosItem.vue'
import TimelinePropiedad from '@/views/Propiedades/TimelinePropiedad.vue'
import EliminarPropiedad from '@/views/Propiedades/EliminarPropiedad.vue'
import GenerarDocumentos from '@/views/Propiedades/GenerarDocumentos.vue'

export default {
  name: 'App',
  methods: { formatDateTime },
  components: {
    GenerarDocumentos,
    EliminarPropiedad,
    TimelinePropiedad,
    ServiciosItem,
    ContactoPerfil,
    ListaInventariosPropiedad,
    PropietarioDetallesPropiedad,
    DetallesDePropiedad,
    ContratoActivoPropiedad,
    ListaDireccionPropiedad,
    ImgPropiedadDetails
  },
  data() {
    return {
      store: usePropiedadesStore()
    }
  },
  mounted() {
    if (!this.store.propiedad) {
      router.push('/Propiedades')
    }
  }
}
</script>
