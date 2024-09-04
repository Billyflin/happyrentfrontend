<template>
  <vercel />
<!--  <Aer />-->
<!--  <asdas :light="light" />-->
<!--  <prueba />-->
</template>

<script>
import Prueba from '@/views/Shared/Prueba.vue'
import light from '@/assets/img/appearance/light.svg'
import Aer from '@/views/Shared/aer.vue'
import Vercel from '@/views/Shared/Vercel.vue'
import Asdas from '@/views/Shared/Asdas.vue'

export default {
  name: "Timeline",
  components: { Asdas, Vercel, Aer, Prueba },
  data() {
    return {
      light: light,
    };
  },
};
</script>
