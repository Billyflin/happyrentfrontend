<script>

import { useAuthStore } from '@/store/authStore.js'
import PasswordPerfil from '@/views/Perfil/components/PasswordPerfil.vue'
import DeletePerfil from '@/views/Perfil/components/DeletePerfil.vue'
import BasicInfoPerfil from '@/views/Perfil/components/BasicInfoPerfil.vue'
import BackAcountsPerfil from '@/views/Perfil/components/BackAcountsPerfil.vue'

export default {
  name: 'SideNavItem',
  components: {  BackAcountsPerfil, BasicInfoPerfil, DeletePerfil, PasswordPerfil },
  setup() {
    const store = useAuthStore()
    return { store }
  }
}
</script>

<template>
  <basic-info-perfil />
  <back-acounts-perfil />
  <password-perfil />
  <delete-perfil />
</template>