<template>
  <div class="row">
    <div class="col-12">
      <div class="card my-4">
        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 class="text-white text-capitalize ps-3">Clientes</h6>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center justify-content-center mb-0">
              <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Pedidos</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                  Opciones
                </th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="{id, avatar, name, email, career, duty, status, employed} of ClientsData" :key="id">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div>
                      <img :alt="{name}" :src="avatar" class="avatar avatar-sm me-3 border-radius-lg" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{ name }}</h6>
                      <p class="text-xs text-secondary mb-0">{{ email }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ career }}</p>
                </td>
                <td class="align-middle text-center text-sm">
                </td>
                <td class="align-middle text-center">
                  <button class="btn btn-primary text-xxs  " type="button">
                    <svg class="bi bi-pencil-square" fill="currentColor" height="16" viewBox="0 0 16 16"
                         width="16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            fill-rule="evenodd" />
                    </svg>
                    Editar
                  </button>
                </td>
                <td class="align-middle">
                  <a
                    class="text-danger font-weight-bold text-xs"
                    data-original-title="Edit user"
                    data-toggle="tooltip"
                    href="javascript:"
                  >
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { data } from './AuthorsData.json'

const ClientsData = data
</script>


<style scoped>
.delete-icon {
  width: 20px;
  height: 25px;
}

</style>