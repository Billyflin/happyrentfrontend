<template>
  <div class="pt-3 bg-white multisteps-form__panel" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Empecemos con información básica</h5>
        <p>Dejanos saber de tí.</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="mb-4 col-4">
          <material-input id="nombres" variant="dynamic" label="Nombres"/>
        </div>
        <div class="col-4 mb-4">
          <material-input id="apellidoPaterno" variant="dynamic" label="Apellido Paterno"/>
        </div>
        <div class="col-4 mb-4">
          <material-input id="apellidoMaterno" variant="dynamic" label="Apellido Materno"/>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-6 col-6">
          <material-choices id="estadoCivil" :options="[
              {value: 'Soltero',label: 'Soltero' },
              {value: 'Casado',label: 'Casado'},
              {value: 'Viudo',label: 'Viudo'},
              {value: 'Divorciado',label: 'Divorciado'},
              {value: 'Separado',label: 'Separado'},
              {value: 'Conviviente',label: 'Conviviente'},
              {value: 'Anulado',label: 'Anulado'},
              {value: 'Otro',label: 'Otro'}
             ]"
                            name="estadoCivil"
                            label="Estado Civil"
                            :search-enabled="false"
                            v-model="estado"/>
        </div>
        <div class="col-sm-6 col-6">
          <material-choices id="nacionalidad" :options="[
              {value: 'Chileno',label: 'Chileno' },
              {value: 'Argentino',label: 'Argentino'},
              {value: 'Peruano',label: 'Peruano'},
              {value: 'Boliviano',label: 'Boliviano'},
              {value: 'Colombiano',label: 'Colombiano'},
              {value: 'Ecuatoriano',label: 'Ecuatoriano'},
              {value: 'Venezolano',label: 'Venezolano'},
              {value: 'Brasileño',label: 'Brasileño'},
              {value: 'Uruguayo',label: 'Uruguayo'},
              {value: 'Paraguayo',label: 'Paraguayo'},
              {value: 'Mexicano',label: 'Mexicano'},
              {value: 'Estadounidense',label: 'Estadounidense'},
              {value: 'Canadiense',label: 'Canadiense'},
              {value: 'Español',label: 'Español'},
              {value: 'Portugués',label: 'Portugués'},
              {value: 'Italiano',label: 'Italiano'},
              {value: 'Francés',label: 'Francés'},
              {value: 'Alemán',label: 'Alemán'},
              {value: 'Inglés',label: 'Inglés'},
              {value: 'Ruso',label: 'Ruso'},
              {value: 'Chino',label: 'Chino'},
              {value: 'Japonés',label: 'Japonés'}
            ]" name="nacionalidad" label="Nacionalidad" v-model="nacionalidad"/>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3 mt-4">
          <material-input id="telefono" variant="dynamic" label="Teléfono" is-required type="String"/>
        </div>
        <div class="col-4 mt-4 mb-3">
          <material-input id="ocupacion" variant="dynamic" label="Ocupación" is-required type="String"/>
        </div>
        <div class="col-5 mt-4 mb-3">
          <material-input id="email" variant="dynamic" label="Email" is-required type="String"/>

      </div>

      </div>

      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next"
                @click="this.$parent.nextStep">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import MaterialInput from "@/components/MaterialInput.vue";
import {useAppStore} from '@/store/index.js'
import {ref} from "vue";
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  name: "PerfilForm",
  components: {MaterialChoices, MaterialInput},
  data() {
    return {
      estado: "",
      nacionalidad: "",
      cuenta: '',
    }
  },
  mounted() {
    const store = useAppStore()
    setTooltip(store.bootstrap);
  },
};
</script>
