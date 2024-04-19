<template>
  <div class="container-fluid mt-4">
    <!-- Seccion propiedad -->
<!--    <propiedad-agregar-propiedad :propiedad="propiedad" @update:propiedad="propiedad = $event" />-->
    <!-- Seccion Propietario -->
    <propiedad-agregar-propietario :propietario="propietario"/>
    <!-- INVENTARIO -->
    <crear-inventario-form />
    <!-- Boton enviar! -->
    <material-button variant="success" size="lg" class="mt-4" full-width @click="aer">Enviar</material-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import CrearInventarioForm from '@/views/Propiedades/components/CrearInventarioForm.vue'

let propiedad = ref(null)
let propietario = ref(null)
function aer() {
  console.log(propiedad.value)
  console.log(propietario.value)
}
</script>
