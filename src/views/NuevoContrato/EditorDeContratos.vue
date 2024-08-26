<template>
  <div class="container-fluid">
    <div class="row mb-4">
      <div class="col-lg-2 mt-4">
        <side-nav />
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
        <div class="contrato card">
          <div class="row">
            <div class="card-body col-lg-10 mt-lg-0 mt-4 text-center text-dark clase">
              <!-- titulo-->
              <Titulo />

              <!-- Comparecencia-->
              <Comparecencia />

              <!-- separador -->
              <hr class="my-4" />

              <!-- clausula 1 -->
              <Clausula1 />
              <hr class="my-4" />

              <!-- clausula 2 -->
              <Clausula2 />
              <hr class="my-4" />

              <!-- clausula 3 -->
              <Clausula3 />
              <hr class="my-4" />

              <!-- clausula 4 -->
              <Clausula4 />
              <hr class="my-4" />

              <!-- clausula 5 -->
              <Clausula5 />
              <hr class="my-4" />

              <!-- clausula 6 -->
              <Clausula6 />
              <hr class="my-4" />

              <!-- clausula 7 -->
              <Clausula7 />
              <hr class="my-4" />

              <!-- clausula 8 -->
              <Clausula8 />
              <hr class="my-4" />

              <!-- clausula 9 -->
              <Clausula9 />
              <hr class="my-4" />

              <!-- clausula 10 -->
              <Clausula10 />
              <hr class="my-4" />

              <!-- clausula 11 -->
              <Clausula11 />
              <hr class="my-4" />

              <!-- clausula 12 -->
              <Clausula12 />
              <hr class="my-4" />

              <!-- clausula 13 -->
              <Clausula13 />
              <hr class="my-4" />

              <!-- clausula 14 -->
              <Clausula14 />
              <hr class="my-4" />

              <!-- clausula 15 -->
              <Clausula15 />
              <hr class="my-4" />

              <!-- clausula 16 -->
              <Clausula16 />
              <hr class="my-4" />

              <!-- clausula 17 -->
              <Clausula17 />
              <hr v-if="store3.codeudor" class="my-4" />

              <!-- clausula 18 -->
              <Clausula18 />
            </div>
          </div>
        </div>
        <div class="mt-2">
          <material-button class="mt-4" full-width size="lg" variant="success" @click="saveContrato"
            >Crear Contrato
          </material-button>
          <!--            <material-button v-if="reporteID" class="mt-4 mb-6" color="happLight" full-width size="lg" @click="getDoc">Ver-->
          <!--              documento provicional-->
          <!--            </material-button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useAppStore } from '@/store/appStore.js'
import SideNav from '@/views/Contrato/components/SideNavClausulas.vue'
import Titulo from '@/views/NuevoContrato/components/Titulo.vue'
import Comparecencia from '@/views/NuevoContrato/components/Comparecencia.vue'
import Clausula1 from '@/views/NuevoContrato/components/Clausula1.vue'
import Clausula2 from '@/views/NuevoContrato/components/Clausula2.vue'
import Clausula3 from '@/views/NuevoContrato/components/Clausula3.vue'
import Clausula4 from '@/views/NuevoContrato/components/Clausula4.vue'
import Clausula5 from '@/views/NuevoContrato/components/Clausula5.vue'
import Clausula6 from '@/views/NuevoContrato/components/Clausula6.vue'
import Clausula7 from '@/views/NuevoContrato/components/Clausula7.vue'
import Clausula8 from '@/views/NuevoContrato/components/Clausula8.vue'
import Clausula9 from '@/views/NuevoContrato/components/Clausula9.vue'
import Clausula10 from '@/views/NuevoContrato/components/Clausula10.vue'
import Clausula11 from '@/views/NuevoContrato/components/Clausula11.vue'
import Clausula12 from '@/views/NuevoContrato/components/Clausula12.vue'
import Clausula13 from '@/views/NuevoContrato/components/Clausula13.vue'
import Clausula14 from '@/views/NuevoContrato/components/Clausula14.vue'
import Clausula15 from '@/views/NuevoContrato/components/Clausula15.vue'
import Clausula16 from '@/views/NuevoContrato/components/Clausula16.vue'
import Clausula17 from '@/views/NuevoContrato/components/Clausula17.vue'
import Clausula18 from '@/views/NuevoContrato/components/Clausula18.vue'
import { useNewContratoStore } from '@/store/newContratoStore.js'
import { useContratosStore } from '@/store/contratosStore.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import Confetti from '@/views/Shared/Confetti.vue'
import { postContrato } from '@/servicios/contratosService.js'
import { useNotificationsStore } from '@/store/notifications.js'
import router from '@/router/index.js'

const store = useAppStore()
const store2 = useNewContratoStore()
const store3 = useContratosStore()
const store4 = useNotificationsStore()
const loading = ref(false)
let reporteID = null

const saveContrato = async () => {
  const contrato = {
    comparecencia: store2.comparecencia,
    clausula1: store2.clausula1,
    clausula2: store2.clausula2,
    clausula3: store2.clausula3,
    clausula4: store2.clausula4,
    clausula5: store2.clausula5,
    clausula6: store2.clausula6,
    clausula7: store2.clausula7,
    clausula8: store2.clausula8,
    clausula9: store2.clausula9,
    clausula10: store2.clausula10,
    clausula11: store2.clausula11,
    clausula12: store2.clausula12,
    clausula13: store2.clausula13,
    clausula14: store2.clausula14,
    clausula15: store2.clausula15,
    clausula16: store2.clausula16,
    clausula17: store2.clausula17,
    clausula18: store2.clausula18,
    comparecenciaEdit: store2.comparecenciaEdit,
    clausula1Edit: store2.clausula1edit,
    clausula2Edit: store2.clausula2edit,
    clausula3Edit: store2.clausula3edit,
    clausula4Edit: store2.clausula4edit,
    clausula5Edit: store2.clausula5edit,
    clausula6Edit: store2.clausula6edit,
    clausula7Edit: store2.clausula7edit,
    clausula8Edit: store2.clausula8edit,
    clausula9Edit: store2.clausula9edit,
    clausula10Edit: store2.clausula10edit,
    clausula11Edit: store2.clausula11edit,
    clausula12Edit: store2.clausula12edit,
    clausula13Edit: store2.clausula13edit,
    clausula14Edit: store2.clausula14edit,
    clausula15Edit: store2.clausula15edit,
    clausula16Edit: store2.clausula16edit,
    clausula17Edit: store2.clausula17edit,
    clausula18Edit: store2.clausula18edit,

    propiedadId: store3.propiedad.id,
    arrendatarioId: store3.arrendatario.id,
    arrendadorId: store3.propiedad.propietario.id,
    codeudorId: store3.codeudor ? store3.codeudor.id : null,

    fechaInicio: store2.fechaInicioContrato,
    duracionMeses: store2.duracionMeses,
    mesesGarantia: store2.mesesGarantia,
    valorCorretaje: store2.valorCorretaje,
    valorRenta: store2.valorRenta,
    plazoAvisoDias: store2.plazoAvisoDias,
    garantia: store2.garantia,
    activo: true,
    moneda: store2.moneda,
    periodoReajusteContrato: store2.periodoReajusteContrato
  }
  console.log(contrato)
  loading.value = true
  await postContrato(contrato)
    .then((response) => {
      console.log(response)
      reporteID = response.data.id
      store4.createNotification(
        'success',
        'Contrato guardado',
        'El contrato ha sido guardado exitosamente'
      )
    })
    .then(() => {
      clearAllStores()
      router.push({ name: 'Felicidades' })
    })
    .catch((error) => {
      console.log(error)
      store4.createNotification('danger', 'Error', 'Hubo un error al guardar el contrato' + error)
    })
    .finally(() => {
      loading.value = false
    })
}
const clearAllStores = () => {
  store2.clearAll()
  store3.clearAll()
}

onMounted(() => {
  // store.toggleEveryDisplay()
  store.toggleSidenav()
  // toggleHideConfig()
})

onUnmounted(() => {
  store.toggleSidenav()
  // toggleHideConfig()
})
</script>
