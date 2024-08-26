<script>
import ProfileAvatar from '@/views/Perfil/components/ProfileAvatar.vue'
export default {
  name: 'SideNav',
  components: { ProfileAvatar },
}
</script>

<template>
  <div class=" position-sticky top-1">
    <ProfileAvatar/>
    <div class="card mt-4">

      <ul class="nav flex-column bg-white border-radius-lg p-3">
        <li class="nav-item pt-2">
          <a class="nav-link d-flex" data-scroll href="#basic-info">
            <i class="material-icons text-lg me-2">receipt_long</i>
            <span class="text-sm">Información</span>
          </a>
        </li>
        <li class="nav-item pt-2">
          <a class="nav-link d-flex" data-scroll href="#bank-accounts">
            <i class="material-icons text-lg me-2">account_balance</i>
            <span class="text-sm">Cuentas Bancarias</span>
          </a>
        </li>

        <li class="nav-item pt-2">
          <a class="nav-link d-flex" data-scroll href="#password">
            <i class="material-icons text-lg me-2">lock</i>
            <span class="text-sm">Cambiar la contraseña</span>
          </a>
        </li>

        <li class="nav-item pt-2">
          <a class="nav-link d-flex" data-scroll href="#delete-account">
            <i class="material-icons text-lg me-2">delete</i>
            <span class="text-sm">Eliminar cuenta</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

