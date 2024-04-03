<script setup>
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialInput from '@/components/MaterialInput.vue'

const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}
</script>

<template>
  <div id="Reajuste" class="card mt-5">
    <div class="card-header">
      <h5>Pagos</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-4">
          <material-input id="renta"
                          type="number"
                          variant="static"
                          label="renta"
                          placeholder="Renta"
                          @input="validateInput"
          />
        </div>
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
          <MaterialChoices id="Pago" label="forma de pago"
                           :options="[                                      {value: 'Transferencia', label: 'Transferencia',selected: true},
                                      {value: 'Cheque', label: 'Cheque'},
                                      {value: 'Tarjeta', label: 'Tarjeta'}]"
                           name="formaPago"
          />
        </div>

      </div>
      <div class="row mt-2">
        <div class="col-4">
          <material-input id="email"
                          type="email"
                          variant="static"
                          label="email a informar"
          />
        </div>
        <div class="col-4">
          <MaterialChoices id="moneda" label="Moneda"
                           :options="[{value: 'CLP', label: 'CLP',selected: true},
                                      {value: 'USD', label: 'USD'},
                                      {value: 'EUR', label: 'EUR'},
                                      {value: 'Otra', label: 'Otra'}]"
                           name="moneda" />
        </div>
        <div class="col-4">
          <MaterialChoices id="cuenta" label="tipo de cuenta"
                           :options="[{value:'vista',label:'Vista'},
                           {value:'corriente',label:'Corriente',selected:true},
                           {value:'ahorro',label:'Ahorro'},
                           {value:'otra',label:'Otra'}]"
                           name="cuenta" />
        </div>
      </div>
      <div>
        <h5>Reajustes</h5>
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
                                      {value: 'UVT', label: 'UVT'},
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