<template>
  <div class="mt-4 col-sm-2 mt-sm-0">
    <div class="card">
      <div class="p-3 card-body position-relative">
        <div class="row">
          <div class="col-7 text-start">
            <p class="mb-1 text-sm text-capitalize font-weight-bold">
              {{ title }}
            </p>
            <h5 class="mb-0 font-weight-bolder">{{ count }}</h5>
          </div>
          <div class="col-5">
            <div class="dropdown text-end">
              <a
                id="dropdownUsers1"
                class="cursor-pointer text-secondary"
                :class="{ show: showMenu }"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="showMenu = !showMenu"
              >
                <span class="text-xs text-secondary">{{ menu }}</span>
              </a>
              <ul
                class="px-2 py-3 dropdown-menu dropdown-menu-end"
                :class="{ show: showMenu }"
                aria-labelledby="dropdownUsers1"
              >
                <li v-for="(drop, index) in dropdown" :key="index" class="d-flex align-items-center">
                  <a class="dropdown-item border-radius-md d-flex align-items-center" @click="drop.action">
                    {{ drop.label }}
                    <span class="material-symbols-outlined mx-2 ml-2">{{ drop.icon }}</span>
                  </a>
                </li>



              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DefaultStatisticsCard',
  props: {
    title: {
      type: String,
      default: 'Default Statistics Card'
    },
    count: {
      type: Number,
      default: ''
    },
    menu: {
      type: String,
      default: ''
    },
    lista: {
      type: Array,
      default: () => []
    },
    percentage: {
      type: Object,
      default: () => {
      },
      color: 'dark',
      value: '0',
      label: ' '
    },
    dropdown: {
      type: Array,
      default: () => [],
      label: 'Hola'
    }
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>
