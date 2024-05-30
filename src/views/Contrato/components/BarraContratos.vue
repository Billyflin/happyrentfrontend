<script setup>

import MaterialButton from '@/components/MaterialButton.vue'
</script>

<template>
  <div class="d-flex">
    <div class="dropdown d-inline">
      <material-button
        id="navbarDropdownMenuLink2"
        aria-expanded="false"
        class="dropdown-toggle"
        color="dark"
        data-bs-toggle="dropdown"
        variant="outline"
      >Filters
      </material-button
      >
      <ul
        aria-labelledby="navbarDropdownMenuLink2"
        class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
        style
      >
        <li>
          <a class="dropdown-item border-radius-md" href="javascript:;"
          >Status: Paid</a
          >
        </li>
        <li>
          <a class="dropdown-item border-radius-md" href="javascript:;"
          >Status: Refunded</a
          >
        </li>
        <li>
          <a class="dropdown-item border-radius-md" href="javascript:;"
          >Status: Canceled</a
          >
        </li>
        <li>
          <hr class="horizontal dark my-2" />
        </li>
        <li>
          <a
            class="dropdown-item border-radius-md text-danger"
            href="javascript:;"
          >Remove Filter</a
          >
        </li>
      </ul>
    </div>
    <material-button
      class="btn-icon ms-2 export"
      color="dark"
      data-type="csv"
      size=""
      variant="outline"
    >
          <span class="btn-inner--icon">
            <i class="ni ni-archive-2"></i>
          </span>
      <span class="btn-inner--text">Export CSV</span>
    </material-button>
  </div>
</template>

<style scoped>

</style>