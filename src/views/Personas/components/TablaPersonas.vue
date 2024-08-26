<template>
  <div v-if="tableData.length > 0" class="table-responsive">
    <table ref="dataTable" class="table table-flush table-hover">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            class="text-uppercase text-center text-xs font-weight-bolder opacity-7"
          >
            {{ header.title }}
          </th>
          <th
            v-if="details"
            class="text-uppercase text-center text-xs font-weight-bolder opacity-7"
          >
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- El contenido del cuerpo de la tabla será llenado dinámicamente -->
      </tbody>
    </table>
  </div>
  <div v-else-if="isLoading" class="text-center mt-7 mb-6">
    <h6>Cargando datos...</h6>
    <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem">
      <span class="visually-hidden">Cargando...</span>
    </div>
  </div>
  <div v-else-if="error" class="text-center mt-7 mb-6">
    <h6>Error al cargar los datos.</h6>
  </div>
  <div v-else class="text-center mt-7 mb-6">
    <h6>No hay datos para mostrar.</h6>
  </div>
</template>

<script>
import { createApp, h } from 'vue'
import { DataTable } from 'simple-datatables'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import { usePersonasStore } from '@/store/personasStore.js'
import router from '@/router/index.js'

export default {
  name: 'TablaPersonas',
  components: { MaterialButton },
  props: {
    headers: {
      type: Array,
      default: () => [],
      required: true
    },
    tableData: {
      type: Array,
      default: () => [],
      required: true
    },
    details: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  data() {
    return {
      store: usePersonasStore(),
      dataTable: null,
      error: null
    }
  },
  watch: {
    tableData: {
      handler() {
        this.$nextTick(this.populateTable)
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    if (this.tableData.length > 0) {
      this.populateTable()
    }
  },
  methods: {
    verPersona(persona) {
      console.log('Ver persona:', persona)
      this.store.fetchPersona(persona.id).then(() => router.push({ name: 'PersonaDetails' }))
    },
    populateTable() {
      if (!this.$refs.dataTable) {
        console.error('No se encontró la referencia a la tabla')
        return
      }

      if (this.dataTable) {
        this.dataTable.destroy()
      }

      const tbody = this.$refs.dataTable.querySelector('tbody')
      tbody.innerHTML = '' // Clear existing rows

      this.tableData.forEach((row) => {
        const tr = document.createElement('tr')
        tr.className = 'text-sm text-center text-capitalize align-middle'

        this.headers.forEach((header) => {
          const td = document.createElement('td')

          if (header.key === 'type') {
            if (row[header.key] === 'persona') {
              td.innerHTML = '<span class="mb-0 mt-0 badge badge-info">Persona</span>'
            } else if (row[header.key] === 'empresa') {
              td.innerHTML = '<span class="mb-0 mt-0 badge badge-success">Empresa</span>'
            } else {
              td.textContent = row[header.key]
            }
          } else if (header.key === 'nombre') {
            const a = document.createElement('a')
            a.className = 'font-weight-bold'
            a.textContent = `${row.nombre}${row.apellidoPaterno ? ' ' + row.apellidoPaterno : ''}${row.apellidoMaterno ? ' ' + row.apellidoMaterno : ''}`
            a.addEventListener('click', () => this.verPersona(row))
            td.appendChild(a)
          } else if (header.key === 'direccion') {
            td.innerHTML = `
              <p class="mb-0 text-sm font-weight-bold text-secondary">
                ${row.calle} ${row.numero}, ${row.ciudad},
                <span class="text-success">${row.region}</span>
              </p>
            `
          } else if (header.key === 'email') {
            const a = document.createElement('a')
            a.href = `mailto:${row.email}`
            a.className = 'mb-0 text-sm'
            a.textContent = row[header.key]
            td.appendChild(a)
          } else if (header.key === 'archivos') {
            td.textContent = row[header.key]
          } else if (header.key === 'rut') {
            td.textContent = row[header.key]
          }
          tr.appendChild(td)
        })

        if (this.details) {
          const actionTd = document.createElement('td')
          actionTd.className = 'align-middle'

          const actionContainer = document.createElement('div')
          actionContainer.className = 'd-flex justify-content-center'

          const detailsContainer = document.createElement('div')
          detailsContainer.className =
            'd-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2'
          this.mountButton(
            detailsContainer,
            'primary',
            'Detalles',
            () => this.verPersona(row),
            'visibility'
          )
          actionContainer.appendChild(detailsContainer)

          actionTd.appendChild(actionContainer)
          tr.appendChild(actionTd)
        }

        tbody.appendChild(tr)
      })

      this.initializeDataTable()
    },
    mountButton(container, color, text, onClick, icon) {
      createApp({
        render() {
          return h(
            MaterialButton,
            {
              color,
              size: 'sm',
              variant: 'gradient',
              class: 'd-flex align-items-center justify-content-center',
              onClick
            },
            {
              default: () => [
                h(
                  'span',
                  {
                    class: 'material-symbols-outlined mr-3',
                    style: 'font-size: 16px; margin-right: 10px;'
                  },
                  icon
                ),
                text
              ]
            }
          )
        }
      }).mount(container)
    },
    initializeDataTable() {
      if (this.$refs.dataTable) {
        this.dataTable = new DataTable(this.$refs.dataTable, {
          searchable: true,
          perPage: 20,
          labels: {
            placeholder: 'Buscar...',
            searchTitle: 'Buscar en la tabla',
            pageTitle: 'Pag {page}',
            perPage: 'Datos por página',
            noRows: 'No se encontraron resultados',
            info: 'Mostrando {start} a {end} de {rows} entradas',
            noResults: 'No se encontraron resultados para la búsqueda'
          }
        })
      }
    }
  }
}
</script>
