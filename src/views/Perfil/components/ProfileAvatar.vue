<template>
  <div id="profile" class="card card-body mt-4">
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-auto col-4">
        <material-avatar-profile
          :img="img"
          alt="Profile Imagen"
          border-radius="lg"
          shadow="sm"
          size="xl"
        />
      </div>
      <div class="col-sm-auto col-8 my-auto">
        <div class="h-100">
          <h5 class="mb-1 font-weight-bolder">{{ store.currentUser.username }}</h5>
          <p class="mb-0 font-weight-bold text-sm text-capitalize">
            {{ store.currentUser.perfil.type }}
          </p>
        </div>
      </div>
      <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex"></div>
    </div>
  </div>
</template>
<script>
import MaterialAvatarProfile from '@/views/Perfil/components/MaterialAvatarProfile.vue'
import imagen from '@/assets/img/bruce-mars.jpg'
import { useAuthStore } from '@/store/authStore.js'

export default {
  name: 'ProfileAvatar',
  components: { MaterialAvatarProfile },
  setup() {
    const img = imagen
    const store = useAuthStore()
    return { img, store }
  }
}
</script>
