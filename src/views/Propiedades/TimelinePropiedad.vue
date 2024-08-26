<template>
  <div class="card">
    <div class="card-body">
      <div class="col-lg-12 col-md-6 col-12">
        <h6 class="mb-3">Historial de propiedad</h6>
        <div class="timeline timeline-one-side">
          <div class="timeline-block mb-3">
            <span class="material-symbols-outlined timeline-step text-secondary-emphasis text-lg">
              add
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">Creacion de la propiedad</h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                {{ formatDateTime(propiedad.createDate) }}
              </p>
            </div>
          </div>
          <div class="timeline-block mb-3">
            <span class="material-symbols-outlined timeline-step text-success text-lg">
              contract
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">Contrato de arriendo</h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:21 AM</p>
            </div>
          </div>
          <div class="timeline-block mb-3">
            <span class="material-symbols-outlined timeline-step text-secondary-emphasis text-lg">
              assured_workload
            </span>
            <div class="timeline-content">
              <h6 class="text-dark text-sm font-weight-bold mb-0">Reajuste por IPC</h6>
              <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 8:10 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDateTime } from '../NuevoContrato/utils.js'

export default {
  name: 'TimelinePropiedad',
  methods: { formatDateTime },
  props: {
    propiedad: {}
  }
}
</script>
