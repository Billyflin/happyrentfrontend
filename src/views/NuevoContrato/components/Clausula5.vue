<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2" />
        <h5 id="Clausula5" class="col-8 card-title text-center">Clausula 5 PLAZO:</h5>
        <div class="col-2">
          <material-checkbox id="editClausula5" v-model="store.clausula5edit"
            >Editar</material-checkbox
          >
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3">
        <p ref="Clausula5" :contenteditable="store.clausula5edit" class="text-justify">
          El presente contrato comenzará a regir a partir de
          {{ formatDate(store.fechaInicioContrato) }}, y tendrá una duración de
          {{ duracionContrato }} meses,
          <template v-if="prorrogaAutomatica">
            que se prorrogará automática y sucesivamente por períodos de
            <strong> {{ periodoProrroga }} meses cada uno, </strong>
          </template>
          salvo que cualquiera de las partes diere a la otra aviso de su intención de no perseverar
          en el contrato, lo que deberá hacer por correo electrónico a
          {{ store2.propiedad.propietario.email }} o delegando la notificacion al indicar el termino
          del contrato mediante la aplicacion web <strong>Happ Rent</strong>, con a lo menos 60 días
          de anticipación al vencimiento del plazo original o de cualquiera de sus prórrogas
          <template v-if="store2.codeudor">
            con copia al aval y codeudora solidaria y al corredor de propiedades que intervino en
            esta operación de arriendo.
          </template>
          <template v-else> . </template>

          En el evento de que la arrendataria no restituyere la propiedad en la fecha de término de
          la vigencia del plazo original o de cualquiera de sus prórrogas, continuará obligada a
          pagar mensualmente la suma correspondiente a la renta convenida hasta que efectúe la
          restitución del inmueble (Art.6º Ley 18.101), sin perjuicio de que deberá pagar, además,
          mensualmente y durante todo el período de mora, a título de multa, una cantidad
          equivalente al 50% de la referida suma, sin perjuicio de los derechos del arrendador para
          demandar la restitución del inmueble ante la justicia ordinaria.
        </p>
      </div>
    </div>
    <div class="col-3 mt-3">
      <div class="mt-0">
        <material-input
          id="fechaInicioContrato"
          v-model="fechaInicioContrato"
          label="Fecha de inicio del contrato"
          name="fecha"
          size="sm"
          type="date"
          variant="static"
        ></material-input>
      </div>
      <div class="mt-3">
        <material-input
          id="duracionContrato"
          v-model="duracionContrato"
          label="Duración del contrato (en meses)"
          size="sm"
          variant="static"
        ></material-input>
      </div>
      <div class="mt-3">
        <material-switch
          id="prorrogaAutomatica"
          v-model="prorrogaAutomatica"
          label=""
          name="clausula5"
          >¿Se prorrogará automáticamente el contrato?
        </material-switch>
      </div>
      <div class="mt-3">
        <material-input
          v-if="prorrogaAutomatica"
          id="periodoProrroga"
          v-model="periodoProrroga"
          class="mt-3"
          label="Período de prórroga (en meses)"
          size="sm"
          type="number"
          variant="static"
        ></material-input>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../utils.js'
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'

export default {
  name: 'Clausula5',
  components: { MaterialSwitch, MaterialInput, MaterialCheckbox },
  methods: { formatDate },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore(),
      duracionContrato: 6,
      periodoProrroga: 12,
      fechaInicioContrato: new Date(),
      prorrogaAutomatica: false
    }
  },
  watch: {
    'this.$refs.Clausula5': {
      handler(newVal) {
        if (newVal) {
          this.store.clausula5 = newVal.innerText
        }
      },
      deep: true,
      immediate: true
    },
    fechaInicioContrato: {
      handler(newVal) {
        const date = new Date(newVal)
        date.setHours(date.getHours() + 5)
        this.store.fechaInicioContrato = date
      },
      deep: true,
      immediate: true
    }
  },

  mounted() {
    if (this.$refs.Clausula5) {
      this.store.clausula5 = this.$refs.Clausula5.innerText
    }
  }
}
</script>