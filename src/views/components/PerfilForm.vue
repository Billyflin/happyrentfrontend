<template>
  <div class="pt-3 bg-white multisteps-form__panel" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Let's start with the basic information</h5>
        <p>Let us know more about you.</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
          <div class="mb-4 col-4">
            <material-input id="nombres" variant="dynamic" label="Nombres" />
          </div>
          <div class="col-4 mb-4">
            <material-input id="apellidoPaterno" variant="dynamic" label="Apellido Paterno" />
          </div>
          <div class="col-4 mb-4">
            <material-input id="apellidoMaterno" variant="dynamic" label="Apellido Materno" />
          </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-2 col-2">
          <select class="form-control" id="choices-civil"
                  name="choices-civil">
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Viudo">Viudo</option>
            <!-- Agrega más opciones aquí -->
          </select>

        </div>
        <div class="col-sm-3 col-3">
          <select class="form-control" id="choices-nacionalidad" name="chioces-nacionalidad">
            <option value="Chileno">Chileno
            </option>
          </select>
        </div>
        <div class="col-3" >
          <material-input id="telefono" variant="dynamic" label="Teléfono" is-required type="String"/>
        </div>
      </div>

      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" title="Next" @click="this.$parent.nextStep">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import MaterialInput from "@/components/MaterialInput.vue";
import { useAppStore } from '@/store/index.js'
import Choices from 'choices.js'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  name: "PerfilForm",
  components: { MaterialChoices, MaterialInput },
  data() {
    return {
      banco: 1,
      bancos: [
        // bancos chilenos
        { value: 1, text: 'Banco Estado' },
        { value: 2, text: 'Banco de Chile' },
        { value: 3, text: 'Santander' },
        { value: 4, text: 'Vice' },
        { value: 5, text: 'Scotiabank' },
        {value: 6, text: 'Banco BCI' },
      ],
      cuenta: '',
      tipoCuenta: [
        { value: 'Corriente', text: 'Corriente' },
        { value:'Vista', text: 'Vista' },
      ]
    }
  },
  mounted() {
    const store = useAppStore()
    setTooltip(store.bootstrap);
    if (document.getElementById('choices-civil')) {
      var region = document.getElementById('choices-civil')
      new Choices(region, {
        allowHTML: true,
        searchEnabled: false
      })
    }
    if (document.getElementById('choices-nacionalidad')){
      var nacionalidad = document.getElementById('choices-nacionalidad')
      new Choices(
        nacionalidad,{
          allowHTML:true,
          searchEnabled:false
        }
      )
    }

  },
};
</script>
