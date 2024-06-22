<script>

import MaterialButton from '@/components/MaterialButton.vue'
import { useVuelidate } from '@vuelidate/core'
import { ref } from 'vue'
import AgregarPersonaForm from '@/views/Personas/components/AgregarPersonaForm.vue'

export default {
  name: 'AgregarPersona',
  components: { AgregarPersonaForm, MaterialButton },
  setup() {
    const persona = ref({
      rut: '',
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      ocupacion: '',
      direccion: {
        calle: '',
        numero: '',
        detalle:'',
        codigoPostal: '',
        pais: '',
        region: '',
        ciudad: ''
      },
      email: '',
      estadoCivil: ''
    })
    const v$ = useVuelidate()
    return { persona, v$ }
  },
  emits: ['update:persona', 'next:step'],
  methods: {
    emitData(data) {
      this.v$.$validate()

      // console.log(this.v$)
      console.log(data, 'desde agregarsadas grande padre')
      // console.log(this.persona)
      console.log(this.persona)
      if (!this.v$.$error) {
        this.$emit('update:persona', this.persona)
        this.$emit('next:step')
      }
    }
  }
}
</script>
<template>

  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-lg-2 d-flex justify-content-end mt-4">
        <router-link class="btn btn-simple d-flex align-items-center"
                     to="/Personas">
          <span class="material-symbols-outlined mx-2">
            arrow_back
          </span>
          Volver
        </router-link>
      </div>
    </div>
    <div class="row">
      <agregar-persona-form></agregar-persona-form>
    </div>

  </div>
</template>
