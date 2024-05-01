<script>
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/store/index.js'
import NavPill from '@/views/components/NavPill/NavPill.vue'
import SideNav from '@/views/Contrato/components/SideNav.vue'

export default {
  name: 'ClausulasNuevoContrato',
  components: { SideNav, NavPill },
  setup() {
    const store = useAppStore()
    const { toggleEveryDisplay } = store
    onMounted(() => {
      toggleEveryDisplay()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
    })
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-4 mb-4">
      <div class="col-lg-2 mt-4 ">
        <side-nav />
      </div>

      <div class="col-lg-10 mt-lg-0 mt-4">
        <div class=" card">

          <h1 class="text-center">Clausulas del contrato</h1>
          <p class="text-center">A continuación se presentan las clausulas del contrato</p>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h5 id="#Clausula1" class="card-title text-center">Clausula 1</h5>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>