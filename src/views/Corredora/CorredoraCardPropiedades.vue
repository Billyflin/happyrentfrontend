<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header">
      <h6>Propiedades de la corredora {{ title }}</h6>
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
                { title: listTitle, direccion,region ,values, info, image, icon }, index
              ) in lists"
            :key="index"
          >
            <td>
              <div class="px-3 py-1 d-flex">
                <material-avatar
                  :img="image"
                  alt="avatar image"
                  border-radius="lg"
                  class="me-3"
                  size="xl"
                />
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ listTitle }}</h6>
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
                <i :class="`ni ni-${icon}`" class="mt-1 text-sm ms-1"></i>
                <material-button
                  v-if="info"
                  :data-bs-original-title="info"
                  class="btn-icon-only btn-rounded mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3"
                  color="secondary"
                  data-bs-placement="bottom"
                  data-bs-toggle="tooltip"
                  size="sm"
                  variant="outline"
                >
                  <i aria-hidden="true" class="fas fa-info"></i>
                </material-button>
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
  name: 'CorredoraCardPropiedades',
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
      direccion: String,
      region: String,
      info: String,
      image: String,
      icon: String
    }
  }
}
</script>
