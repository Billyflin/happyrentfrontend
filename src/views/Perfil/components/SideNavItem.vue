<script>

import { useAuthStore } from '@/store/authStore.js'
import PasswordPerfil from '@/views/Perfil/components/PasswordPerfil.vue'
import DeletePerfil from '@/views/Perfil/components/DeletePerfil.vue'
import BasicInfoPerfil from '@/views/Perfil/components/BasicInfoPerfil.vue'

export default {
  name: 'SideNavItem',
  components: { BasicInfoPerfil, DeletePerfil, PasswordPerfil },
  setup() {
    const store = useAuthStore()
    return { store }
  }
}
</script>

<template>
  <basic-info-perfil />
  <password-perfil />
  <delete-perfil />
</template>