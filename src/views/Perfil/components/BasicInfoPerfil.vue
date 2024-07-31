<template>
  <div id="basic-info" class="card mt-4">
    <div class="card-header">
      <h5>Información Básica</h5>
    </div>
    <div class="card-body pt-0">
      <div v-if="perfil">
        <table class="table">
          <tbody>
          <tr>
            <td><strong>Nombre de Usuario:</strong></td>
            <td>{{ perfil.username }}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{{ perfil.email }}</td>
          </tr>
          <tr>
            <td><strong>Razón Social:</strong></td>
            <td>{{ perfil.perfil.razonSocial }}</td>
          </tr>
          <tr>
            <td><strong>Giro:</strong></td>
            <td>{{ perfil.perfil.giro }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td colspan="2">
              <h6>Representante</h6>
            </td>
          </tr>
          <tr v-if="perfil.perfil.representante.nombre">
            <td><strong>Nombre:</strong></td>
            <td>{{ perfil.perfil.representante.nombre }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Apellido Paterno:</strong></td>
            <td>{{ perfil.perfil.representante.apellidoPaterno }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Apellido Materno:</strong></td>
            <td>{{ perfil.perfil.representante.apellidoMaterno }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Email:</strong></td>
            <td>{{ perfil.perfil.representante.email }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Teléfono:</strong></td>
            <td>{{ perfil.perfil.representante.telefono }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Ocupación:</strong></td>
            <td>{{ perfil.perfil.representante.ocupacion }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Estado Civil:</strong></td>
            <td>{{ perfil.perfil.representante.estadoCivil }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Nacionalidad:</strong></td>
            <td>{{ perfil.perfil.representante.nacionalidad }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td colspan="2">
              <h6>Dirección del Representante</h6>
            </td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Calle:</strong></td>
            <td>{{ perfil.perfil.representante.direccion.calle }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Número:</strong></td>
            <td>{{ perfil.perfil.representante.direccion.numero }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Ciudad:</strong></td>
            <td>{{ perfil.perfil.representante.direccion.ciudad }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Región:</strong></td>
            <td>{{ perfil.perfil.representante.direccion.region }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>País:</strong></td>
            <td>{{ perfil.perfil.representante.direccion.pais }}</td>
          </tr>
          <tr v-if="perfil.perfil.representante">
            <td><strong>Código Postal:</strong></td>
            <td>{{ perfil.perfil.representante.direccion.codigoPostal }}</td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td colspan="2">
              <h6>Dirección de la Empresa</h6>
            </td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td><strong>Calle:</strong></td>
            <td>{{ perfil.perfil.direccion.calle }}</td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td><strong>Número:</strong></td>
            <td>{{ perfil.perfil.direccion.numero }}</td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td><strong>Ciudad:</strong></td>
            <td>{{ perfil.perfil.direccion.ciudad }}</td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td><strong>Región:</strong></td>
            <td>{{ perfil.perfil.direccion.region }}</td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td><strong>País:</strong></td>
            <td>{{ perfil.perfil.direccion.pais }}</td>
          </tr>
          <tr v-if="perfil.perfil.direccion">
            <td><strong>Código Postal:</strong></td>
            <td>{{ perfil.perfil.direccion.codigoPostal }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import MaterialChoices from '@/components/Material/MaterialChoices.vue';
import MaterialInput from '@/components/Material/MaterialInput.vue';
import { defineComponent } from 'vue';
import { useAuthStore } from '@/store/authStore.js'

export default defineComponent({
  name: 'BasicInfoPerfil',
  components: { MaterialChoices, MaterialInput },
  setup() {
    const store = useAuthStore();
    const perfil = store.currentUser;
    return {
      perfil
    };
  }
});
</script>
