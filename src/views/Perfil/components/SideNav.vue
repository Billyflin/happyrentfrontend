<script>
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import imagen from '@/assets/img/bruce-mars.jpg'
import { useAuthStore } from '@/store/index.js'

export default {
  name: 'SideNav',
  components: { MaterialAvatar },
  setup() {
    const img = imagen
    const store = useAuthStore()
    return { img, store }
  }
}
</script>

<template>
  <div class=" position-sticky top-1">

    <div id="profile" class="card card-body mt-4">
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-auto col-4">
          <material-avatar
            :img="img"
            alt="bruce"
            border-radius="lg"
            shadow="sm"
            size="xl"
          />
        </div>
        <div class="col-sm-auto col-8 my-auto">
          <div class="h-100">
            <h5 class="mb-1 font-weight-bolder">{{ store.userInfo.username }}</h5>
            <p class="mb-0 font-weight-bold text-sm text-capitalize">{{ store.userInfo.perfil.type }}</p>
          </div>
        </div>
        <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
        </div>
      </div>
    </div>
    <div class="card mt-4">

      <ul class="nav flex-column bg-white border-radius-lg p-3">
        <li class="nav-item">
          <a class="nav-link d-flex" data-scroll href="#profile">
            <i class="material-icons text-lg me-2">person</i>
            <span class="text-sm">Perfil</span>
          </a>
        </li>
        <li class="nav-item pt-2">
          <a class="nav-link d-flex" data-scroll href="#basic-info">
            <i class="material-icons text-lg me-2">receipt_long</i>
            <span class="text-sm">Basic Info</span>
          </a>
        </li>
        <li class="nav-item pt-2">
          <a class="nav-link d-flex" data-scroll href="#password">
            <i class="material-icons text-lg me-2">lock</i>
            <span class="text-sm">Change Password</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
