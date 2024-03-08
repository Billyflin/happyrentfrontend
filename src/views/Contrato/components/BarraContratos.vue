<script setup>

import MaterialButton from "@/components/MaterialButton.vue";
</script>

<template>
  <div class="d-flex">
    <div class="dropdown d-inline">
      <material-button
          id="navbarDropdownMenuLink2"
          color="dark"
          variant="outline"
          class="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
      >Filters
      </material-button
      >
      <ul
          class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
          aria-labelledby="navbarDropdownMenuLink2"
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
        size
        color="dark"
        variant="outline"
        data-type="csv"
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