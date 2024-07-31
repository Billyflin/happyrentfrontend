<template>
  <div id="password" class="card mt-4">
    <div class="card-header">
      <h5>Cambiar Contraseña</h5>
    </div>
    <div class="card-body pt-0">
      <div class="mb-3">
        <material-input
          id="currentPassword"
          label="Contraseña actual"
          type="password"
          v-model="currentPassword"
        />
      </div>
      <div class="mb-3">
        <material-input
          id="newPassword"
          label="Nueva contraseña"
          type="password"
          v-model="newPassword"
        />
      </div>
      <div class="mb-3">
        <material-input
          id="confirmPassword"
          label="Confirmar contraseña"
          type="password"
          v-model="confirmPassword"
        />
      </div>
      <span class="badge badge-success mt-2" v-if="mensaje">{{mensaje}}</span>
      <h5 class="mt-5">Requerimientos de la contraseña</h5>
      <p class="text-muted mb-2">
        Asegurate que tu contraseña cumpla con los siguientes requerimientos:
      </p>
      <ul class="text-muted ps-4 mb-0 float-start">
        <li>
          <span class="text-sm">Un special caracter</span>
        </li>
        <li>
          <span class="text-sm">Min 6 caracteres</span>
        </li>
        <li>
          <span class="text-sm">Minimo un número</span>
        </li>
        <li>
          <span class="text-sm">Cambia tu contraseña con frecuencia</span>
        </li>
      </ul>
      <material-button
        class="float-end mt-6 mb-0"
        color="dark"
        size="sm"
        variant="gradient"
        @click="updatePassword"
      >
        Cambiar contraseña
      </material-button>
    </div>
  </div>
</template>

<script>
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { changePassword } from '@/servicios/authService.js'

export default {
  name: 'password-perfil',
  components: { MaterialButton, MaterialInput },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      mensaje: ''
    }
  },
  methods: {
    async updatePassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.mensaje = 'Las contraseñas no coinciden.';
        return;
      }

      try {
        const response = await changePassword(this.newPassword, this.currentPassword);
        this.mensaje = response.data;
      } catch (error) {
        this.mensaje = 'Error ' + (error.response?.data?.message || error.message);
      }
    }
  }
}
</script>