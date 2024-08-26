<template>
  <div id="Pagos" class="card">
    <div class="card-header">
      <h5>Condiciones generales del contrato</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          ¿Arriendo Mensual?
          <material-checkbox id="arriendoMensual" label="Arriendo mensual" name="arriendoMensual" />
        </div>
        <div class="col-3">
          <material-input
            id="renta"
            label="Renta"
            placeholder="Renta"
            type="number"
            variant="static"
            @input="validateInput"
          />
        </div>
        <div class="col-3">
          <MaterialChoices
            id="garantia"
            :options="[
              { value: '1', label: '1 mes', selected: true },
              { value: '2', label: '2 meses' }
            ]"
            label="Garantía"
            name="Garantía"
          />
        </div>
        <div class="col-3">
          <MaterialChoices
            id="fechaAviso"
            v-model:text-choice="fechaAviso"
            :options="[
              { value: '1', label: '60 dias', selected: true },
              { value: '2', label: '30 dias' }
            ]"
            label="Fecha de aviso"
            name="fecha"
          />
        </div>
        {{ fechaAviso }}
      </div>

      <div class="row mt-2">
        <div class="col-4">
          <MaterialChoices
            id="periodoContrato"
            :options="[
              { value: 'Mensual', label: 'Mensual', selected: true },
              { value: 'Semestral', label: 'Semestral' },
              { value: 'Anual', label: 'Anual' },
              { value: 'Trimestral', label: 'Trimestral' }
            ]"
            label="Periodicidad"
            name="periodoContrato"
          />
        </div>
        <div class="col-4">
          <MaterialChoices
            id="moneda"
            :options="[
              { value: 'CLP', label: 'CLP', selected: true },
              { value: 'USD', label: 'USD' },
              { value: 'EUR', label: 'EUR' },
              { value: 'UF', label: 'UF' }
            ]"
            label="Moneda"
            name="moneda"
          />
        </div>
      </div>
      <div>
        <h5 class="mt-2">Reajustes</h5>
      </div>
      <div class="row mt-2">
        <div class="col-4">
          <MaterialChoices
            id="tipoReajuste"
            :options="[
              { value: 'Fijo', label: 'Fijo' },
              { value: 'Variable', label: 'Variable', selected: true }
            ]"
            label="Tipo Reajuste"
            name="tipoReajuste"
          />
        </div>
        <div class="col-4">
          <MaterialChoices
            id="reajuste"
            v-model="reajusteSeleccionado"
            :options="[
              { value: 'IPC', label: 'IPC', selected: true },
              { value: 'UVT', label: 'Acordado' },
              { value: 'Dolar', label: 'Dolar' },
              { value: 'Otra', label: 'Otra' }
            ]"
            label="Reajuste"
            name="reajuste"
          />
        </div>
        <div v-if="reajusteSeleccionado !== 'IPC'" class="col-4">
          <material-input
            id="porcentajeReajuste"
            label="Porcentaje Reajuste"
            placeholder="% Reajuste"
            type="number"
            variant="static"
            @input="validateInput"
          />
        </div>
      </div>

      <div v-if="reajusteSeleccionado === 'IPC'" class="mt-4">
        <h5>Calculadora de Reajuste de IPC</h5>
        <form @submit.prevent="calcularReajusteIPC">
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="valorInicial">Valor Inicial</label>
              <input
                id="valorInicial"
                v-model.number="valorInicial"
                class="form-control"
                required
                type="number"
              />
            </div>
            <div class="col-4">
              <label class="form-label" for="ipcInicial">Fecha IPC Inicial</label>
              <select id="ipcInicial" v-model="ipcInicial" class="form-control" required>
                <option disabled value="">Seleccione una fecha</option>
                <option v-for="date in ipcFechas" :key="date" :value="date">{{ date }}</option>
              </select>
            </div>
            <div class="col-4">
              <label class="form-label" for="ipcFinal">Fecha IPC Final</label>
              <select id="ipcFinal" v-model="ipcFinal" class="form-control" required>
                <option disabled value="">Seleccione una fecha</option>
                <option v-for="date in ipcFechas" :key="date" :value="date">{{ date }}</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary mt-3" type="submit">Calcular Reajuste</button>
        </form>

        <div v-if="reajuste !== null" class="mt-4">
          <h4>Resultado del Reajuste</h4>
          <p>Valor Reajustado: {{ reajuste.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'

const validateInput = (event) => {
  if (event.target.value < 0) {
    event.target.value = 0
  }
}

const fechaAviso = ref('')
const valorInicial = ref(0)
const ipcInicial = ref(null)
const ipcFinal = ref(null)
const reajuste = ref(null)
const ipcData = ref([])

const reajusteSeleccionado = ref('IPC')

const fetchIPCData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/ipc`
    )
    if (response.data && response.data.Series && response.data.Series.Obs) {
      ipcData.value = response.data.Series.Obs.map((obs) => ({
        date: new Date(obs.indexDateString),
        value: parseFloat(obs.value)
      }))
    }
  } catch (error) {
    console.error('Error fetching IPC data:', error)
  }
}

const calcularReajusteIPC = () => {
  if (!ipcInicial.value || !ipcFinal.value) {
    alert('Debes seleccionar valores de IPC válidos.')
    return
  }

  const ipcInicialValue = ipcData.value.find(
    (item) => item.date.toISOString().split('T')[0] === ipcInicial.value
  ).value
  const ipcFinalValue = ipcData.value.find(
    (item) => item.date.toISOString().split('T')[0] === ipcFinal.value
  ).value

  reajuste.value = (ipcFinalValue / ipcInicialValue) * valorInicial.value
}

const ipcFechas = computed(() => {
  return ipcData.value.map((item) => item.date.toISOString().split('T')[0])
})

onMounted(fetchIPCData)
</script>
