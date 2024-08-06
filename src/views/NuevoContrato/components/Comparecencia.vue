<template>
  <div class="row align-items-center">
    <div class="col-9">
      <div class="row">
        <div class="col-2 " />
        <h5 id="Comparecencia" class="col-8 card-title text-center">Comparecencia:</h5>
        <div class="col-2 ">
          <material-checkbox id="editComparecencia" v-model="store.comparecenciaEdit">Editar</material-checkbox>
        </div>
      </div>
      <div class="mb-3 mt-3 ms-3" v-if="store2.propiedad">
        <p ref="Comparecencia" :contenteditable="store.comparecenciaEdit" class="text-justify clase">
          En Santiago, a {{ formatDate(Date.now()) }}, comparecen: por una parte,
          <strong> PROPIETARIA </strong>
          <template v-if="store2.propiedad.propietario.type === 'persona'">
            {{ capitalize(store2.propiedad.propietario.tratamiento) }}
            {{ capitalize(store2.propiedad.propietario.nombre) }}
            {{ capitalize(store2.propiedad.propietario.apellidoPaterno) }}
            {{ capitalize(store2.propiedad.propietario.apellidoMaterno) }},
            cédula nacional de identidad n° {{ store2.propiedad.propietario.rut }},
            nacionalidad {{ capitalize(store2.propiedad.propietario.nacionalidad) }},
            {{ capitalize(store2.propiedad.propietario.estadoCivil) }},
            <template v-if="store2.propiedad.propietario.tratamiento==='Don.'">domiciliado</template>
            <template v-else>domiciliada</template>
            en
            {{ store2.propiedad.propietario.direccion.calle }},
            {{ store2.propiedad.propietario.direccion.numero }},
            comuna de {{ store2.propiedad.propietario.direccion.ciudad }},
            {{ store2.propiedad.propietario.direccion.region }},
            celular {{ store2.propiedad.propietario.telefono }},
            correo: {{ store2.propiedad.propietario.email }}
          </template>
          <template v-else>
            empresa <strong>{{ capitalize(store2.propiedad.propietario.nombre) }} </strong>,
            rut {{ store2.propiedad.propietario.rut }},
            representante {{ capitalize(store2.propiedad.propietario.representante.tratamiento) }}
            {{ capitalize(store2.propiedad.propietario.representante.nombre) }}
            {{ capitalize(store2.propiedad.propietario.representante.apellidoPaterno) }}
            {{ capitalize(store2.propiedad.propietario.representante.apellidoMaterno) }},
            cédula nacional de identidad n° {{ store2.propiedad.propietario.representante.rut }},
            <template v-if="store2.propiedad.propietario.representante.tratamiento==='Don.'">domiciliado
            </template>
            <template v-else>domiciliada</template>
            en
            {{ store2.propiedad.propietario.representante.direccion.calle }},
            {{ store2.propiedad.propietario.representante.direccion.numero }},
            correo: {{ store2.propiedad.propietario.representante.email }}, celular
            {{ store2.propiedad.propietario.representante.telefono }}
          </template>
          , en adelante la parte
          “propietaria” y <strong>ARRENDATARIO </strong>
          <template v-if="store2.arrendatario.type === 'persona'">
            {{ capitalize(store2.arrendatario.tratamiento) }}
            {{ capitalize(store2.arrendatario.nombre) }}
            {{ capitalize(store2.arrendatario.apellidoPaterno) }}
            {{ capitalize(store2.arrendatario.apellidoMaterno) }} cédula de identidad
            n° {{ store2.arrendatario.rut }},
            nacionalidad {{ capitalize(store2.arrendatario.nacionalidad) }},
            {{ capitalize(store2.arrendatario.estadoCivil) }},
            <template v-if="store2.arrendatario.tratamiento==='Don.'">domiciliado</template>
            <template v-else>domiciliada</template>
            en {{ store2.arrendatario.direccion.calle }} {{ store2.arrendatario.direccion.numero }},
            comuna de {{ store2.arrendatario.direccion.ciudad }},
            {{ store2.arrendatario.direccion.region }}, celular {{ store2.arrendatario.telefono }},
            email: {{ store2.arrendatario.email }},

          </template>
          <template v-else> a nombre de la empresa
            <strong>{{ capitalize(store2.arrendatario.nombre) }}</strong>
            {{ store2.arrendatario.razonSocial }},
            <strong>representante</strong> {{ capitalize(store2.arrendatario.representante.tratamiento) }}
            {{ capitalize(store2.arrendatario.representante.nombre) }}
            {{ capitalize(store2.arrendatario.representante.apellidoPaterno) }}
            {{ capitalize(store2.arrendatario.representante.apellidoMaterno) }},
            cédula nacional de identidad N° {{ store2.arrendatario.representante.rut }},
            {{ capitalize(store2.arrendatario.representante.nacionalidad) }},
            {{ capitalize(store2.arrendatario.representante.estadoCivil) }},
            domiciliado
            en
            {{ store2.arrendatario.representante.direccion.calle }}
            {{ store2.arrendatario.representante.direccion.numero }} comuna
            {{ store2.arrendatario.representante.direccion.ciudad }},
            {{ store2.arrendatario.representante.direccion.region }}, celular
            {{ store2.arrendatario.representante.telefono }}, email:
            {{ store2.arrendatario.representante.email }},
          </template>
          en adelante la parte “arrendataria”
          <template v-if="store2.codeudor">

          <template v-if="store2.codeudor.type==='persona'">
            y don <strong>CODEUDOR</strong> {{ capitalize(store2.codeudor.tratamiento) }}
            {{ capitalize(store2.codeudor.nombre) }}
            {{ capitalize(store2.codeudor.apellidoPaterno) }} {{ capitalize(store2.codeudor.apellidoMaterno)
            }}, {{ capitalize(store2.codeudor.nacionalidad) }},
            {{ capitalize(store2.codeudor.estadoCivil) }}, cédula nacional de identidad N°
            {{ store2.codeudor.rut }},
            email: {{ store2.codeudor.email }}, celular {{ store2.codeudor.telefono }} , con domicilio en
            {{ store2.codeudor.direccion.calle }} {{ store2.codeudor.direccion.numero }},
            comuna {{ store2.codeudor.direccion.ciudad }}, {{ store2.codeudor.direccion.region }}, en su
            calidad de Aval y Codeudor
            Solidario de la parte "arrendataria",
          </template>
          <template v-else-if="store2.codeudor.type==='empresa'">
            y <strong>CODEUDOR</strong> la empresa <strong>{{ capitalize(store2.codeudor.nombre) }}</strong>
            {{ store2.codeudor.razonSocial }}, representada por don
            {{ capitalize(store2.codeudor.representante.tratamiento) }}
            {{ capitalize(store2.codeudor.representante.nombre) }}
            {{ capitalize(store2.codeudor.representante.apellidoPaterno) }}
            {{ capitalize(store2.codeudor.representante.apellidoMaterno) }},
            cédula nacional de identidad N° {{ store2.codeudor.representante.rut }},
            {{ capitalize(store2.codeudor.representante.nacionalidad) }},
            {{ capitalize(store2.codeudor.representante.estadoCivil) }},
            domiciliado en {{ store2.codeudor.representante.direccion.calle }}
            {{ store2.codeudor.representante.direccion.numero }},
            comuna {{ store2.codeudor.representante.direccion.ciudad }},
            {{ store2.codeudor.representante.direccion.region }}, celular
            {{ store2.codeudor.representante.telefono }}, email:
            {{ store2.codeudor.representante.email }}, en su calidad de Aval y Codeudor Solidario de la
            parte "arrendataria",
          </template>
          </template>
          todos los comparecientes mayores de edad y libres disponedores de sus bienes, quienes han
          convenido el siguiente contrato de arrendamiento:
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import { useContratosStore } from '@/store/contratosStore.js'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { capitalize, formatDate } from '@/views/NuevoContrato/utils.js'


export default {
  name: 'Comparecencia',
  methods: { capitalize, formatDate },
  components: { MaterialCheckbox },
  data() {
    return {
      store: useNewContratoStore(),
      store2: useContratosStore()
    }
  },
  watch: {
    'this.$refs.Comparecencia': {
      handler(newVal) {
        if (newVal) {
          this.store.comparecencia = newVal.innerText;
        }
      },
      deep: true,
      immediate: true
    },
  },

  mounted() {
    if (this.$refs.Comparecencia) {
      this.store.comparecencia = this.$refs.Comparecencia.innerText;
    }
  }
}
</script>