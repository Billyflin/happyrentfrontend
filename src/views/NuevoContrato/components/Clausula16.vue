<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula16" class="col-8 card-title text-center">Clausula 16 COMISION:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula16" v-model="store.clausula16edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula16" :contenteditable="store.clausula16edit" class="text-justify">
          Las partes acuerdan que se pagará una comisión de corretaje equivalente al
          {{ store.valorCorretaje }}% de un mes de arriendo establecido en el presente contrato.
          Este monto asciende a
          <b
            >{{
              formatNumberWithDots((store.valorRenta * store.valorCorretaje) / 100) +
              ' ' +
              store.moneda.toLowerCase()
            }}.-</b
          >
          ({{
            numberToWordsInSpanish((store.valorRenta * store.valorCorretaje) / 100) +
            ' ' +
            store.moneda.toLowerCase()
          }}), el cual será abonado por la parte arrendataria en la cuenta {{ cuenta }}.
        </p>
      </div>
    </div>
    <div class="col-3">
      La cuenta de la comisión de corretaje es seleccionada en la pestaña perfil, puedes ir haciendo
      clic en
      <strong>
        <router-link to="/profile">aquí</router-link>
      </strong>
      para seleccionar la cuenta.
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { obtenerCuentaActual } from '@/servicios/authService.js'
import { formatNumberWithDots, numberToWordsInSpanish } from '../utils.js'

export default {
  name: 'Clausula16',
  methods: { numberToWordsInSpanish, formatNumberWithDots },
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      cuenta: null
    }
  },
  watch: {
    'this.$refs.Clausula16': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula16 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula16) {
      this.store.clausula16 = this.$refs.Clausula16.innerText
    }
    try {
      obtenerCuentaActual().then((res) => {
        this.cuenta =
          res.data.tipoCuenta +
          ' Nº ' +
          res.data.numeroCuenta +
          ' del banco ' +
          res.data.banco +
          ', RUT: ' +
          res.data.rut
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>