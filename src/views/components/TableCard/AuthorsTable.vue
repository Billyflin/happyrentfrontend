<template>
  <div class="row">
    <div class="col-12">
      <div class="card my-4">
        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 class="text-white text-capitalize ps-3">Authors table</h6>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Status
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Employed
                </th>
                <th class="text-secondary opacity-7"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="{id, avatar, name, email, career, duty, status, employed} of AuthorsData" :key="id">
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
                  <p class="text-xs text-secondary mb-0">{{ duty }}</p>
                </td>
                <td class="align-middle text-center text-sm">
                    <span
                      :class="status === 'online' ? 'bg-gradient-success' : 'bg-gradient-secondary'"
                      class="badge badge-sm"
                    >{{ status }}</span
                    >
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">{{ employed }}</span>
                </td>
                <td class="align-middle">
                  <a
                    class="text-secondary font-weight-bold text-xs"
                    data-original-title="Edit user"
                    data-toggle="tooltip"
                    href="javascript:"
                  >
                    Edit
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

const AuthorsData = data
</script>
