<script setup>
import { ref } from 'vue'
import LocalidadForm from '@/views/Propiedades/components/LocalidadForm.vue'

const eleccion = ref(null)
let options = ref([])
let disabled = ref(true)

let nacionalidad = ref(null)
let opcionNacionalidad = ref([])
opcionNacionalidad = [
  { value: 'Argentino', label: 'Argentino' },
  { value: 'Chileno', label: 'Chileno', selected: true },
  { value: 'Peruano', label: 'Peruano' },
  { value: 'Boliviano', label: 'Boliviano' },
  { value: 'Colombiano', label: 'Colombiano' },
  { value: 'Ecuatoriano', label: 'Ecuatoriano' },
  { value: 'Venezolano', label: 'Venezolano' },
  { value: 'Brasileño', label: 'Brasileño' },
  { value: 'Uruguayo', label: 'Uruguayo' },
  { value: 'Paraguayo', label: 'Paraguayo' },
  { value: 'Mexicano', label: 'Mexicano' },
  { value: 'Estadounidense', label: 'Estadounidense' },
  { value: 'Canadiense', label: 'Canadiense' },
  { value: 'Español', label: 'Español' },
  { value: 'Portugués', label: 'Portugués' },
  { value: 'Italiano', label: 'Italiano' },
  { value: 'Francés', label: 'Francés' },
  { value: 'Alemán', label: 'Alemán' },
  { value: 'Inglés', label: 'Inglés' },
  { value: 'Ruso', label: 'Ruso' },
  { value: 'Chino', label: 'Chino' },
  { value: 'Japonés', label: 'Japonés' }
]

const changeOptions = () => {
  options.value = [
    { value: 1, label: 'Chile', selected: true }
  ]

}

</script>

<template>
  <button @click="changeOptions">cambiar</button>
  <button @click="disabled = !disabled">disabled</button>
  <div class="row mt-3">
    <!--    <div class="col-sm-6 col-6">-->
    <!--      <MaterialChoices-->
    <!--        :options="options"-->
    <!--        id="asdsad"-->
    <!--        name="asdasd"-->
    <!--        @change="console.log(eleccion)"-->
    <!--        v-model="eleccion"-->
    <!--        :isMultiple="false"-->
    <!--        :disabled="disabled"-->
    <!--        label="Hola"-->

    <!--      ></MaterialChoices>-->

    <!--    </div>-->
    <!--    <div class="col-sm-6 col-6">-->
    <!--      <material-choices id="nacionalidad"-->
    <!--                        :options="opcionNacionalidad"-->
    <!--                        name="nacionalidad"-->
    <!--                        :isMultiple="false"-->
    <!--                        label="Nacionalidad"-->
    <!--                        v-model="nacionalidad"-->
    <!--      />-->
    <!--    </div>-->
    <LocalidadForm></LocalidadForm>
  </div>
</template>
