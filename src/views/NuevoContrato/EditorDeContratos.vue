<template>
  <div class="container-fluid">
    <div class="row mt-4 mb-4">
      <div class="col-lg-2 mt-4 ">
        <side-nav />
      </div>
      <div class="col-lg-10 mt-lg-0 mt-4">
        <div class="contrato card">
          <div class="row">
            <div class="card-body col-lg-10 mt-lg-0 mt-4 text-center">
              <!-- titulo-->
              <Titulo />

              <!-- clausulas-->
              <Comparecencia />

              <!-- clausula 1-->
              <Clausula1 />

              <!-- clausula 2-->
              <Clausula2 />

              <!-- clausula 3-->
              <Clausula3 />

              <!-- clausula 4-->
              <Clausula4 />

              <Clausula5 />

              <Clausula6 />

              <Clausula7 />

              <Clausula8 />

              <Clausula9 />

              <Clausula10 />

              <Clausula11 />

              <Clausula12 />

              <Clausula13 />

              <Clausula14 />

              <Clausula15 />

              <Clausula16 />

              <Clausula17 />

              <Clausula18 />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
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

const store = useAppStore()
const { toggleEveryDisplay, toggleHideConfig } = store


onMounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})

onUnmounted(() => {
  toggleEveryDisplay()
  // toggleHideConfig()
})
</script>
