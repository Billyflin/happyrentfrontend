<template>
  <div class="container-fluid">
    <div v-if="alertMessage" class="alert" :class="alertClass" role="alert">
      {{ alertMessage }}
    </div>
    <div v-if="loading" class="col-lg-12 position-relative z-index-2">
      <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
        <div class="spinner-border text-primary" role="status" style="width:4rem; height: 4rem;">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-lg-6">
        <div class="card" v-if="datosPropiedad">
          <div class="card-body">
            <div class="image-section">
              <img :src="'data:image/png;base64,' + datosPropiedad.imagenPortada.contenido" alt="Imagen de la Propiedad" class="img-fluid" />
            </div>
            <p class="text-muted mt-3">{{ datosPropiedad.descripcion }}</p>
            <button class="btn btn-success me-2" @click="toggleEdit">EDITAR</button>
            <button class="btn btn-danger" @click="deleteDatosPropiedad">ELIMINAR</button>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card" v-if="datosPropiedad">
          <div class="card-body">
            <h5>Información de la Propiedad</h5>
            <ListaDatosPropiedad
              :datos-propiedad="datosPropiedad"
              :editable="editable"
              @toggle-edit="toggleEdit"
              @update="updateDatosPropiedad"
              @delete="deleteDatosPropiedad"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListaDatosPropiedad from './ListaDatosPropiedad.vue'
import { deletePropiedad, updatePropiedad } from '@/servicios/propiedadesService.js'
import { usePropiedadesStore } from '@/store/propiedadesStore.js'
import router from '@/router/index.js'
import { onUnmounted,  } from 'vue'

export default {
  components: {
    ListaDatosPropiedad,
  },
  data() {
    return {
      editable: false,
      alertMessage: '',
      alertClass: ''
    }
  },

  setup() {
    const store = usePropiedadesStore()

    if (!store.propiedad) {
      router.push('/propiedades')
    }

    onUnmounted(() => {
      store.propiedad = null
    })

    return {
      datosPropiedad: store.propiedad,
      loading: store.loading
    }
  },
  methods: {
    toggleEdit() {
      this.editable = !this.editable
    },
    showAlert(message, type) {
      this.alertMessage = message
      this.alertClass = type === 'success' ? 'alert-success' : 'alert-danger'
      setTimeout(() => {
        this.alertMessage = ''
        this.alertClass = ''
      }, 3000)
    },
    async updateDatosPropiedad(datosPropiedad) {
      console.log('Actualizar datos')
      try {
        const response = await updatePropiedad(datosPropiedad)
        if (response.status === 200) { // OK
          this.showAlert('Datos de la propiedad actualizados exitosamente.', 'success')
          // Lógica adicional para manejar la actualización exitosa, como redirigir o actualizar la lista
        }
      } catch (err) {
        this.showAlert('Error al actualizar los datos de la propiedad: ' + err.response.data, 'error')
        console.error('Error al actualizar los datos de la propiedad:', err)
      }
    },
    async deleteDatosPropiedad() {
      console.log('Eliminar datos')
      try {
        const response = await deletePropiedad(this.datosPropiedad.id)
        if (response.status === 204) { // No Content
          this.showAlert('Propiedad eliminada exitosamente.', 'success')
          // Lógica adicional para manejar la eliminación exitosa, como redirigir o actualizar la lista
          router.push('/propiedades')
        }
      } catch (err) {
        this.showAlert('Error al eliminar los datos de la propiedad: ' + err.response.data, 'error')
        console.error('Error al eliminar los datos de la propiedad:', err)
      }
    }
  }
}
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
