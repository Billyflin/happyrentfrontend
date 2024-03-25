<template>
  <!--  Seccion Propiedad-->
  <formulario-propiedad-contrato />

  <!--  Seccion Reajuste-->
  <reajuste-contrato />

  <!--  Seccion Enviar Correo-->
  <solicitar-datos-contrato />

  <!--  Seccion arrendador-->
  <arrendador-contrato />

  <!--  Seccion Multa -->
<!--  <multa-contrato />-->

  <!--  Seccion Termino Anticipado-->
<!--  <termino-anticipado-contrato />-->


</template>


<script>
import { defineComponent } from 'vue'
import FormularioPropiedadContrato from '@/views/Contrato/components/FormularioPropiedadContrato.vue'
import SolicitarDatosContrato from '@/views/Contrato/components/SolicitarDatosContrato.vue'
import ArrendadorContrato from '@/views/Contrato/components/ArrendadorContrato.vue'
import ReajusteContrato from '@/views/Contrato/components/ReajusteContrato.vue'
// import MultaContrato from '@/views/Contrato/components/MultaContrato.vue'
// import TerminoAnticipadoContrato from '@/views/Contrato/components/TerminoAnticipadoContrato.vue'

export default defineComponent({
  components: {
    // TerminoAnticipadoContrato,
    // MultaContrato,
    ReajusteContrato,
    ArrendadorContrato,
    SolicitarDatosContrato,
    FormularioPropiedadContrato
  }
})
</script>
