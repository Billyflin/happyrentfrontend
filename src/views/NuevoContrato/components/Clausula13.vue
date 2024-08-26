<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula13" class="col-8 card-title text-center">
          Clausula 13 ENTREGA Y RESTITUCION DEL INMUEBLE:
        </h5>
        <div class="col-2">
          <material-checkbox id="editClausula13" v-model="store.clausula13edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula13" :contenteditable="store.clausula13edit" class="text-justify">
          La arrendataria se obliga a restituir inmediatamente que termine este contrato, en el
          mismo estado, tomándose en consideración el deterioro ocasionado por el paso del tiempo y
          el uso legítimo de ella. La entrega deberá hacerse mediante la desocupación total de la
          propiedad, poniéndola a disposición de la arrendadora y entregando las llaves. En el
          evento que el arrendatario no restituyere la propiedad en la fecha de término del
          arrendamiento, se aplicará lo estipulado en la cláusula 4ª y 6ª. Por otra parte, deberá
          exhibir los recibos que acrediten el pago, hasta el último día que ocupó el inmueble, de
          los gastos comunes, los consumos de energía eléctrica, basura y otros similares que puedan
          afectar al inmueble arrendado.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'

export default {
  name: 'Clausula13',
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore()
    }
  },
  watch: {
    'this.$refs.Clausula13': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula13 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula13) {
      this.store.clausula13 = this.$refs.Clausula13.innerText
    }
  }
}
</script>