<template>
  <div class="row">
    <div class="col-12">
      <div class="card my-4">
        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 class="text-white text-capitalize ps-3">Projects table</h6>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center justify-content-center mb-0">
              <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                  Completion
                </th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="{logo, project, budget, status, percentage, color} of ProjectsData" :key="project">
                <td>
                  <div class="d-flex px-2">
                    <div>
                      <img :src="logo" alt="spotify" class="avatar avatar-sm rounded-circle me-2" />
                    </div>
                    <div class="my-auto">
                      <h6 class="mb-0 text-sm">{{ project }}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-sm font-weight-bold mb-0">{{ budget }}</p>
                </td>
                <td>
                  <span class="text-xs font-weight-bold">{{ status }}</span>
                </td>
                <td class="align-middle text-center">
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-xs font-weight-bold">{{ percentage }}%</span>
                    <div>
                      <div class="progress">
                        <div
                          :aria-valuenow="percentage"
                          :class="`bg-gradient-${color}`"
                          :style="{width: `${percentage}%`}"
                          aria-valuemax="100"
                          aria-valuemin="0"
                          class="progress-bar"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="align-middle">
                  <button class="btn btn-link text-secondary mb-0">
                    <i aria-hidden="true" class="fa fa-ellipsis-v text-xs"></i>
                  </button>
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
import { data } from './ProjectsData.json'

const ProjectsData = data
</script>
