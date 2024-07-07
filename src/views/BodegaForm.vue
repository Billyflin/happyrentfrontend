<!-- GalponForm.vue -->
<template>
  <div>
  <material-input id="hola" v-model="propertyData.hola" label="Hola"></material-input>
    <label for="orientacion">Orientación:</label>
    <input v-model="propertyData.orientacion" id="orientacion" type="text">

    <label for="subterraneo">¿Tiene Subterráneo?</label>
    <input class="form-check-input" v-model="propertyData.subterraneo" id="subterraneo" type="checkbox">


    <material-button>asdasd</material-button>
    <!--    switch-->

    <!-- Añade más campos según sea necesario -->
  </div>
</template>

<script>
import MaterialButton from '@/components/MaterialButton.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'

export default {
  components: { MaterialSwitch, MaterialInput, MaterialButton },
  props: ['propertyData'],
};
</script>