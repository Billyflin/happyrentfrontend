<script setup>
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'

const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}
</script>

<template>
  <div id="Pagos" class="card">
    <div class="card-header">
      <h5>Condiciones generales del contrato</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
         ¿Arriendo Mensual?
          <material-checkbox id="arriendoMensual"
                             label="Arriendo mensual"
                             name="arriendoMensual"
          />
        </div>
        <div class="col-3">
          <material-input id="renta"
                          type="number"
                          variant="static"
                          label="Renta"
                          placeholder="Renta"
                          @input="validateInput"
          />
        </div>
        <div class="col-3">
          <MaterialChoices id="garantia"
                           label="Garantía"
                           :options="[
                             {value: '1', label: '1 mes',selected: true},
                             {value: '2', label: '2 meses'}
                             ]"
                           name="Garantía"
          />
        </div>
        <div class="col-3">
          <MaterialChoices id="fechaAviso"
                           label="Fecha de aviso"
                           :options="[
                             {value: '1', label: '60 dias',selected: true},
                             {value: '2', label: '30 dias'}
                             ]"
                           name="fechaAviso"
          />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-4">
          <MaterialChoices id="periodoContrato"
                           label="Periodicidad"
                           :options="[
                             {value: 'Mensual', label: 'Mensual',selected: true},
                             {value: 'Semestral', label: 'Semestral'},
                             {value: 'Anual', label: 'Anual'},
                             {value: 'Trimestral', label: 'Trimestral'}]"
                           name="periodoContrato"
          />
        </div>
        <div class="col-4">
          <MaterialChoices id="moneda" label="Moneda"
                           :options="[{value: 'CLP', label: 'CLP',selected: true},
                                      {value: 'USD', label: 'USD'},
                                      {value: 'EUR', label: 'EUR'},
                                      {value: 'UF' , label: 'UF'}]"
                           name="moneda" />
        </div>
      </div>
      <div>
        <h5 class="mt-2">Reajustes</h5>
      </div>
      <div class="row mt-2">
        <div class="col-4">
          <MaterialChoices id="tipoReajuste" label="Tipo Reajuste"
                           :options="[{value: 'Fijo', label: 'Fijo'},
                                      {value: 'Variable', label: 'Variable',selected:true}]"
                           name="tipoReajuste" />

        </div>
        <div class="col-4">
          <MaterialChoices id="reajuste" label="Reajuste"
                           :options="[{value: 'IPC', label: 'IPC',selected:true},
                                      {value: 'UVT', label: 'Acordado'},
                                      {value: 'Dolar', label: 'Dolar'},
                                      {value: 'Otra', label: 'Otra'}]"
                           name="reajuste" />
        </div>
        <div class="col-4">
          <material-input id="porcentajeReajuste"
                          type="number"
                          variant="static"
                          label="porcentaje Reajuste"
                          placeholder="% Reajuste"
                          @input="validateInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>