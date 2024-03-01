<template>
  <div class="container-fluid mt-4">
    <!--    Seccion propiedad-->
    <propiedad-agregar-propiedad />
    <!--    Seccion Propietario-->
    <propiedad-agregar-propietario />
    <!--INVENTARIO-->

    <!--    <crear-inventario-form :propietarioNuevo="propietarioNuevo" :agregarInventario="agregarInventario"-->
    <!--                           :esEmpresa="esEmpresa" />-->

    <!--  Boton enviar! -->

    <material-button variant="success" size="lg" class="mt-4" full-width>Enviar
    </material-button>

  </div>
</template>
<script>

import { defineComponent } from 'vue'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import MaterialButton from '@/components/MaterialButton.vue'

export default defineComponent({
  components: { MaterialButton, PropiedadAgregarPropietario, PropiedadAgregarPropiedad }
})
</script>
