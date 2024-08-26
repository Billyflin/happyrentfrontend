<template>
  <div v-if="datosBancarios[0]">
    <h5 class="mb-3">Datos Bancarios</h5>
    <div v-if="datosBancarios[0]" class="card border card-plain border-radius-lg mb-3">
      <div class="card-body d-flex align-items-center flex-row">
        <img :src="getBankLogo(datosBancarios[0].banco)" alt="logo" class="w-10 me-3 mb-0" />
        <div>
          <h6 class="mb-0">{{ datosBancarios[0].banco }} - {{ datosBancarios[0].tipoCuenta }}</h6>
          <p class="mb-0">
            {{ datosBancarios[0].numeroCuenta }}
            <span v-if="datosBancarios[0].activa" class="badge bg-success ms-2">Activa</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h5 class="mb-3">Sin datos bancarios</h5>
  </div>
</template>
<script>
import imgBancoChile from '@/assets/img/logos/bank/BCH.svg'
import imgBancoEstado from '@/assets/img/logos/bank/BE.svg'
import imgItau from '@/assets/img/logos/bank/ITUB.svg'
import imgBCI from '@/assets/img/logos/bank/BCI.SN.png'
import imgSantander from '@/assets/img/logos/bank/SAN.svg'
import imgScotiabank from '@/assets/img/logos/bank/BNS.svg'

export default {
  name: 'ListaDatosBancarios',
  data() {
    return {
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
  props: {
    datosBancarios: []
  }
}
</script>