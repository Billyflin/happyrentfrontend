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
                          label="Renta"
                          placeholder="Renta"
                          type="number"
                          variant="static"
                          @input="validateInput"
          />
        </div>
        <div class="col-3">
          <MaterialChoices id="garantia"
                           :options="[
                             {value: '1', label: '1 mes',selected: true},
                             {value: '2', label: '2 meses'}
                             ]"
                           label="Garantía"
                           name="Garantía"
          />
        </div>
        <div class="col-3">
          <MaterialChoices id="fechaAviso"
                           :options="[
                             {value: '1', label: '60 dias',selected: true},
                             {value: '2', label: '30 dias'}
                             ]"
                           label="Fecha de aviso"
                           name="fechaAviso"
          />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-4">
          <MaterialChoices id="periodoContrato"
                           :options="[
                             {value: 'Mensual', label: 'Mensual',selected: true},
                             {value: 'Semestral', label: 'Semestral'},
                             {value: 'Anual', label: 'Anual'},
                             {value: 'Trimestral', label: 'Trimestral'}]"
                           label="Periodicidad"
                           name="periodoContrato"
          />
        </div>
        <div class="col-4">
          <MaterialChoices id="moneda" :options="[{value: 'CLP', label: 'CLP',selected: true},
                                      {value: 'USD', label: 'USD'},
                                      {value: 'EUR', label: 'EUR'},
                                      {value: 'UF' , label: 'UF'}]"
                           label="Moneda"
                           name="moneda" />
        </div>
      </div>
      <div>
        <h5 class="mt-2">Reajustes</h5>
      </div>
      <div class="row mt-2">
        <div class="col-4">
          <MaterialChoices id="tipoReajuste" :options="[{value: 'Fijo', label: 'Fijo'},
                                      {value: 'Variable', label: 'Variable',selected:true}]"
                           label="Tipo Reajuste"
                           name="tipoReajuste" />

        </div>
        <div class="col-4">
          <MaterialChoices id="reajuste" :options="[{value: 'IPC', label: 'IPC',selected:true},
                                      {value: 'UVT', label: 'Acordado'},
                                      {value: 'Dolar', label: 'Dolar'},
                                      {value: 'Otra', label: 'Otra'}]"
                           label="Reajuste"
                           name="reajuste" />
        </div>
        <div class="col-4">
          <material-input id="porcentajeReajuste"
                          label="porcentaje Reajuste"
                          placeholder="% Reajuste"
                          type="number"
                          variant="static"
                          @input="validateInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>