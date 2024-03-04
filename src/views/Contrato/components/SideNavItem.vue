<template>
  <!--  Seccion Propiedad-->
  <formulario-propiedad-contrato />

  <!--  Seccion Enviar Correo-->
  <solicitar-datos-contrato />

  <!--  Seccion arrendador-->
  <arrendador-contrato />

  <!--  Seccion Reajuste-->
  <reajuste-contrato />

</template>


<script>
import { defineComponent } from 'vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'
import SolicitarDatosContrato from '@/views/Contrato/components/SolicitarDatosContrato.vue'
import ArrendadorContrato from '@/views/Contrato/components/ArrendadorContrato.vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'

export default defineComponent({
  components: { ReajusteContrato, ArrendadorContrato, SolicitarDatosContrato, FormularioPropiedadContrato }
})
</script>
