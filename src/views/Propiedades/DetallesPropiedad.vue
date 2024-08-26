<template>
  <div class="container-fluid">
    <div v-if="store.propiedad" class="row">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-4">
            <ImgPropiedadDetails :store="store" />
            <div v-if="store.propiedad.propietario" class="mt-4">
              <PropietarioDetallesPropiedad :propietario="store.propiedad.propietario" />
            </div>
          </div>
          <div class="col-lg-8">
            <ListaDireccionPropiedad :direccion="store.propiedad.direccion" />
            <div v-if="store.propiedad" class="mt-4">
              <DetallesDePropiedad :propiedad="store.propiedad" />
            </div>
            <div v-if="store.propiedad.inventarios" class="mt-4">
              <ListaInventariosPropiedad :inventarios="store.propiedad.inventarios" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div v-if="store.propiedad.arrendado" class="mb-4">
          <ContratoActivoPropiedad
            :arrendado="store.propiedad.arrendado"
            :propiedad-id="store.propiedad.id"
          />
        </div>
        <div v-if="store.propiedad">
          <div>
            <ServiciosItem />
          </div>
          <div class="mt-4">
            <ContactoPerfil :propietario="store.propiedad.propietario" />
          </div>
          <div v-if="store.propiedad" class="mt-4">
            <TimelinePropiedad :propiedad="store.propiedad" />
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

export default {
  name: 'App',
  methods: { formatDateTime },
  components: {
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
