<template>
  <div class="card">
    <div class="card-header pb-0">
      <h5>Panel de control del contrato</h5>
    </div>
    <div class="card-body pt-0">
      <div class="d-flex justify-content-between">
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Recaudacion</h6>
          <h2 class="mb-0">
            {{ formatCurrency(getTotalAmount(), moneda) }} {{ getCurrencyCode(moneda) }}
          </h2>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Fecha de inicio del contrato</h6>
          <h5>{{ formatDate(fechaInicio) }}</h5>
        </div>
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Fecha de término del contrato</h6>
          <h5>
            {{
              fechaTermino ? formatDate(fechaTermino) : ' Sin fecha registrada (Contrato vigente)'
            }}
          </h5>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <div>
          <h6 class="text-muted font-weight-normal mb-0">
            Garantía {{ garantia === 1 ? '(1 mes)' : `${garantia} meses` }}
          </h6>
          <h5>{{ formatCurrency(getWarrantyAmount(), moneda) }}</h5>
        </div>
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Plazo aviso (días)</h6>
          <h5>{{ plazoAvisoDias }}</h5>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Duración base del contrato (meses)</h6>
          <h5>{{ duracionMeses }}</h5>
        </div>
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Período de reajuste</h6>
          <h5>{{ periodoReajusteContrato }}</h5>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <div>
          <h6 class="text-muted font-weight-normal mb-0">Valor del corretaje</h6>
          <h5>{{ formatCurrency(getCorretajeAmount(), moneda) }}</h5>
        </div>
        <div>
          <h6 class="text-muted font-weight-normal mb-0">
            Fecha de creación del contrato en la plataforma
          </h6>
          <h5>{{ formatDate(createDate) }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency, formatDate, getCurrencyCode } from '@/views/NuevoContrato/utils.js'

export default {
  name: 'DatosContrato',
  props: {
    renta: {
      type: Number,
      default: 0
    },
    moneda: {
      type: String,
      default: 'Pesos'
    },
    fechaInicio: {
      type: String,
      default: ''
    },
    fechaTermino: {
      type: String,
      default: ''
    },
    garantia: {
      type: Number,
      default: 0
    },
    plazoAvisoDias: {
      type: Number,
      default: 30
    },
    duracionMeses: {
      type: Number,
      default: 12
    },
    periodoReajusteContrato: {
      type: Number,
      default: 12
    },
    valorCorretaje: {
      type: Number,
      default: 0
    },
    createDate: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCurrencyCode,
    formatCurrency,
    formatDate,
    getTotalAmount() {
      return this.getWarrantyAmount() + this.getCorretajeAmount() + this.renta
    },

    getWarrantyAmount() {
      return this.renta * this.garantia
    },
    getCorretajeAmount() {
      return (this.renta * this.valorCorretaje) / 100
    }
  }
}
</script>
