<script setup>
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'
import MaterialTextarea from '@/components/MaterialTextarea.vue'
import { ref } from 'vue'

const prueba = ref(false)
</script>

<template>
  <div id="OpcionesContrato" class="card mt-5">
    <div class="card-header">
      <h5>Clausulas del Contrato</h5>
      <p class="text-muted">Acá puedes agregar las clausulas del contrato</p>
    </div>
    <div class="card-body">
      <material-checkbox class="mb-4" v-model="prueba" name="prueba">Agregar las bodegas y estacionamientos? (si no se
        despliega un menu de seleccion)
      </material-checkbox>
      <material-checkbox v-if="!prueba" v-model="prueba" class="mt-4 mb-4" name="prueba"> OTROS PAGOS: La arrendataria
        estará obligada a pagar con toda puntualidad y a
        quién corresponda, los gastos comunes, los consumos de luz, extracción de basuras y
        demás consumos y servicios que puedan afectar al inmueble enviando copia de los
        pagos al siguiente email: b.martinez10@ufromail.cl. El atraso de un mes en
        cualquiera de los pagos indicados, dará derecho a la arrendadora para requerir de la
        compañía de servicios que corresponda, la suspensión del servicio respectivo
      </material-checkbox>
      <material-textarea v-if="prueba" class="mt-4 mb-4" id="clausula modificable" label="OTROS PAGOS:" placeholder=" OTROS PAGOS: La arrendataria estará obligada a pagar con toda puntualidad y a quién corresponda, los gastos comunes, los consumos de luz, extracción de basuras y demás consumos y servicios que puedan afectar al inmueble enviando copia de los pagos al siguiente email: b.martinez10@ufromail.cl. El atraso de un mes en cualquiera de los pagos indicados, dará derecho a la arrendadora para requerir de la compañía de servicios que corresponda, la suspensión del servicio respectivo"
                         :resizable="false">
      </material-textarea>
    </div>
  </div>
</template>

<style scoped>

</style>