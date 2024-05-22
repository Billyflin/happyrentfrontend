<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex align-items-center justify-content-between">
      <h5>Personas</h5>
      <router-link class="mt-2 mb-2 btn btn-happLight ml-auto d-flex align-items-center"
                   to="/agregarPersona">
        Agregar persona
        <span class="material-symbols-outlined mx-2">
        person_add
      </span>
      </router-link>
    </div>

    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
          <tr>
            <th
              v-for="(header, index) of headers"
              :key="index"
              :class="index >= 1 ? 'text-center ps-2' : ''"
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              {{ header }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="(
                { title: nombre, direccion,region ,values, info, icon }, index
              ) in lists"
            :key="index"
          >
            <td>
              <div class="px-3 py-1 d-flex">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ nombre }}</h6>
                  <p class="mb-0 text-sm font-weight-bold text-secondary">
                    <span class="text-success">{{ direccion }}</span>
                    {{ region }}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ values[0] }}
              </p>
            </td>
            <td class="text-sm align-middle">
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ values[1] }}
              </p>
            </td>
            <td class="align-middle text-center">
              <div
                class="text-center px-3 py-1 d-flex justify-content-center align-items-center"
              >
                <p class="mb-0 text-sm font-weight-bold">
                  {{ values[2] }}
                </p>
                <!--                <i class="mt-1 text-sm ms-1" :class="`ni ni-${icon}`"></i>-->
                <!--                                <material-button-->
                <!--                  v-if="info"-->
                <!--                  size="sm"-->
                <!--                  color="secondary"-->
                <!--                  variant="outline"-->
                <!--                  class="btn-icon-only btn-rounded mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3"-->
                <!--                  data-bs-toggle="tooltip"-->
                <!--                  data-bs-placement="bottom"-->
                <!--                  :data-bs-original-title="info"-->
                <!--                >-->
                <!--                  <i class="fas fa-info" aria-hidden="true"></i>-->
                <!--                </material-button>-->
              </div>
            </td>
            <td class="text-sm align-middle">
              <p class="text-center mb-0 text-sm font-weight-bold">
                {{ values[3] }}
              </p>
            </td>
            <td class="align-middle text-center">
              <div
                class="text-center px-3 py-1 d-flex justify-content-center align-items-center"
              >
                <span class="material-symbols-outlined btn-outline-danger">person_remove</span>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'TablaEmpresas',
  components: {
    MaterialAvatar,
    MaterialButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      default: () => []
    },
    lists: {
      type: Array,
      default: () => [],
      values: Array,
      title: String,
      nombre: String,
      region: String,
      info: String,
      icon: String
    }
  }
}
</script>

