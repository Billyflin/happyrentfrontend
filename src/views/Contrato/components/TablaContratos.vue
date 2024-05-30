<template>
  <div>
    <div class="table-responsive">
    <table ref="dataTable" class="table table-flush">
      <thead class="thead-light">
      <tr>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Name
        </th>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Age
        </th>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          City
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>
          <router-link :to="user.url" class="text-sm font-weight-normal">{{ user.name }}</router-link>
        </td>
        <td>{{ user.age }}</td>
        <td>{{ user.city }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { DataTable } from 'simple-datatables'

export default {
  name: 'DataTableComponent',
  setup() {
    const dataTable = ref(null)
    const users = ref([
      { id: 1, name: 'John Doe', age: 30, city: 'New York', url: '/profile/1' },
      { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles', url: '/profile/2' },
      { id: 3, name: 'Mike Johnson', age: 35, city: 'Chicago', url: '/profile/3' },
      { id: 4, name: 'Sarah Silverman', age: 28, city: 'Miami', url: '/profile/4' },
      { id: 5, name: 'Tom Wright', age: 29, city: 'Las Vegas', url: '/profile/5' },
      { id: 6, name: 'Laura Croft', age: 27, city: 'San Francisco', url: '/profile/6' }
    ])

    onMounted(() => {
      dataTable.value = new DataTable(dataTable.value,{
        perPage: 5,
        labels: {
          placeholder: "Buscar...",
          searchTitle: "Buscar en la tabla",
          pageTitle: "Pag {page}",
          perPage: "Datos por página",
          noRows: "No se encontraron resultados",
          info: "Mostrando {start} a {end} de {rows} entradas",
          noResults: "No se encontraron resultados para la búsqueda",
        }
      })
    })

    return {
      dataTable,
      users
    }
  }
}
</script>
