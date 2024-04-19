<template>
  <div class="container-fluid mt-4">
    <!-- Seccion propiedad -->
    <propiedad-agregar-propiedad :propiedad="propiedad" @update:propiedad="propiedad = $event" />
    <!-- Seccion Propietario -->
    <propiedad-agregar-propietario :propietario="propietario"/>
    <!-- INVENTARIO -->
    <crear-inventario-form />
    <!-- Boton enviar! -->
    <material-button variant="success" size="lg" class="mt-4" full-width @click="emitData">Enviar</material-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PropiedadAgregarPropiedad from '@/views/Propiedades/components/PropiedadAgregarPropiedad.vue'
import PropiedadAgregarPropietario from '@/views/Propiedades/components/PropiedadAgregarPropietario.vue'
import MaterialButton from '@/components/MaterialButton.vue'
import CrearInventarioForm from '@/views/Propiedades/components/CrearInventarioForm.vue'
import { useVuelidate } from '@vuelidate/core'

export default {
  components: {
    PropiedadAgregarPropiedad,
    PropiedadAgregarPropietario,
    MaterialButton,
    CrearInventarioForm
  },
  setup() {
    const propiedad = ref({
      nombre: '',
      descripcion: '',
      direccion: {
        calle: '',
        numero: '',
        codigoPostal: '',
        pais: '',
        region: '',
        ciudad: ''
      },
      precio: 0,
      tipo: '',
      estado: ''
    })
    const propietario = ref(null)
    const v$ = useVuelidate()
    return { propiedad, propietario, v$ }
  },methods: {
    emitData() {
      this.v$.$validate()
      console.log(this.propiedad)
      console.log(this.propietario)
      // console.log(this.v$)
      // console.log(this.persona)
      if (!this.v$.$error) {
        this.$emit('update:propiedad', this.propiedad)
        this.$emit('update:propietario', this.propietario)
      }
    }
  }
}

</script>

