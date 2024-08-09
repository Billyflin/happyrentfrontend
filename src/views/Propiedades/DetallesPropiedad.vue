<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-7">
              <DetallesDePropiedad :propiedad="store.propiedad" />
          </div>
          <div class="col-lg-5">
            <ImgPropiedadDetails :store="store" />
            <div class="mt-4" v-if="store.propiedad.direccion">
              <ListaDireccionPropiedad :direccion="store.propiedad.direccion" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="mb-4 " v-if="store.propiedad.arrendado">
          <ContratoActivoPropiedad :arrendado="store.propiedad.arrendado" :propiedad-id="store.propiedad.id" />
        </div>
        <div v-if="store.propiedad">
          <timeline-list title="Timeline">
            <timeline-item
              color="success"
              :icon="{ component: 'list_alt_add', class: 'text-white text-sm' }"
              title="Creación de la propiedad"
              :date-time="formatDateTime(store.propiedad.createDate)"
              description="Se creó la propiedad en el sistema."
            />
            <TimelineItem
              color="info"
              :icon="{ component: 'price_change', class: 'text-white text-sm' }"
              title="Reajuste de precio"
              date-time="9 de agosto de 2024, 7:56:11 a. m."
              description="Se reajustó el precio de la propiedad de $300.000 a $305.100 con una variación de 1.7%."
            />

          </timeline-list>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <div class="mt-4" v-if="store.propiedad.propietario">
          <PropietarioDetallesPropiedad :propietario="store.propiedad.propietario" />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="mt-4 " v-if="store.propiedad.inventarios">
          <ListaInventariosPropiedad :inventarios="store.propiedad.inventarios" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="mt-4">
          <ContactoPerfil :propietario="store.propiedad.propietario" />
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
import TimelineList from '@/components/Cards/TimelineList.vue'
import TimelineItem from '@/components/Cards/TimelineItem.vue'
import { formatDateTime } from '@/views/NuevoContrato/utils.js'
import PropietarioDetallesPropiedad from '@/views/Propiedades/PropietarioDetallesPropiedad.vue'
import ListaInventariosPropiedad from '@/views/Propiedades/ListaInventariosPropiedad.vue'
import ContactoPerfil from '@/views/Propiedades/ContactoPerfil.vue'

export default {
  name: 'App',
  methods: { formatDateTime },
  components: {
    ContactoPerfil,
    ListaInventariosPropiedad,
    PropietarioDetallesPropiedad,
    TimelineItem, TimelineList,
    DetallesDePropiedad,
    ContratoActivoPropiedad,
    ListaDireccionPropiedad,
    ImgPropiedadDetails
  },
  data() {
    return {
      store: usePropiedadesStore()
    }
  }
}
</script>
