<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula6" class="col-8 card-title text-center">Clausula 6 MULTA EN CASO DE MORA:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula6" v-model="store.clausula6edit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula6" :contenteditable="store.clausula6edit" class="text-justify">
          En caso de no pago oportuno de la renta de arrendamiento, la suma a pagar por los arrendadores
          devengará, a título de multa en favor del arrendador, la cantidad que resulte al aplicar la
          tasa máxima convencional anual para operaciones de crédito de dinero, a los días de atraso en el
          pago de la renta pactada. Dicha tasa corresponde al interés corriente de 8.28%, aumentado en un 50%,
          resultando en una tasa de 12.42%.
          Si como consecuencia del retraso, se le encargare a un abogado la restitución de la propiedad
          y el cobro de las rentas adeudadas, el arrendatario deberá pagar además el honorario de estos
          servicios, ascendente al 10% (diez por ciento) de la suma de los precios de los arriendos
          morosos. Lo anterior es sin perjuicio de la cláusula 8 de este contrato.
        </p>
      </div>
    </div>
    <div class="col-3">
      <p>
        Tasa que rige para los efectos del artículo 16 de la Ley 18.010 y otras leyes que se remiten a la tasa de
        interés corriente para operaciones reajustables: <b>8.28%</b>
      </p>
      <p>
        Tasa de interés máxima convencional para operaciones reajustables: <b>12.42%</b>
      </p>
      <p>
        Fuente: <a href="https://tasas.cmfchile.cl/sbifweb/servlet/InfoFinanciera?indice=4.2.1&FECHA=01/01/2024"
                   class="text-bolder" target="_blank">CMF Chile - Comisión para el Mercado Financiero Chile</a>
      </p>

    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula6',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
    }
  },
  watch: {
    'this.$refs.Clausula6': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula6 = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Clausula6) {
      this.store.clausula6 = this.$refs.Clausula6.innerText;
    }
  }
}
</script>