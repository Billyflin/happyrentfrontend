<template>
  <div v-if="tableData.length > 0" class="table-responsive p-3">
    <table ref="dataTable" class="table table-flush table-hover">
      <thead>
      <tr>
        <th v-for="header in headers" :key="header.key" class="text-uppercase text-center text-xs font-weight-bolder opacity-7">
          {{ header.title }}
        </th>
        <th v-if="details" class="text-uppercase text-center text-xs font-weight-bolder opacity-7">
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
    <div class="spinner-border text-primary" role="status" style="width:4rem; height: 4rem;">
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
import router from '@/router/index.js'

export default {
  name: 'MyDataTableContratos',
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
      dataTable: null,
      error: null,
    }
  },
  watch: {
    tableData: {
      handler() {
        this.populateTable()
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.populateTable()
  },
  methods: {
    handleDetails(row) {
      console.log('Detalles:', row)
      // this.auth.contrato = row
      router.push({ name: 'DetallesContrato', params: { id: row.id } })
    },
    verContrato(contrato) {
      console.log('Ver contrato:', contrato)
      // this.auth.contrato = contrato
      // this.$router.push({ name: 'ContratoDetails', params: { id: contrato.id } })
    },
    populateTable() {
      this.$nextTick(() => {
        if (!this.$refs.dataTable) {
          console.error('DataTable ref is not available.')
          return
        }

        if (this.dataTable) {
          this.dataTable.destroy()
        }

        const tbody = this.$refs.dataTable.querySelector('tbody')
        tbody.innerHTML = '' // Clear existing rows

        this.tableData.forEach(row => {
          const tr = document.createElement('tr')
          tr.className = 'text-sm text-center text-capitalize align-middle'

          this.headers.forEach(header => {
            const td = document.createElement('td')

            if (header.key === 'propietarioTipo') {
              if (row[header.key] === 'persona') {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-info">Persona</span>'
              } else if (row[header.key] === 'empresa') {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-success">Empresa</span>'
              } else {
                td.textContent = row[header.key] ? row[header.key] : 'N/A'
              }
            } else if (header.key === 'activo') {
              if (row[header.key] === true) {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-success">Activo</span>'
              } else {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-danger">Inactivo</span>'
              }
            } else if (header.key === 'propiedadArrendado') {
              if (row[header.key] === true) {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-success">Arrendado</span>'
              } else {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-danger">No Arrendado</span>'
              }
            } else if (header.key === 'propiedadTipo') {
              if (row[header.key] === 'departamento') {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-info">Departamento</span>'
              } else if (row[header.key] === 'casa') {
                td.innerHTML = '<span class="mb-0 mt-0 badge badge-success">Casa</span>'
              } else {
                td.textContent = row[header.key] ? row[header.key] : 'N/A'
              }
            } else if (header.key === 'createDate') {
              td.textContent = new Date(row[header.key]).toLocaleDateString()
            } else if (header.key === 'fechaInicio' || header.key === 'fechaTermino') {
              td.textContent = new Date(row[header.key]).toLocaleDateString()
            } else if (header.key === 'renta') {
              td.textContent = `$${row[header.key].toLocaleString()}`
            } else if (header.key === 'duracionMeses') {
              td.textContent = `${row[header.key]} Meses`
            } else if (header.key === 'propietarioNombre') {
              const a = document.createElement('a')
              a.className = 'font-weight-bold'
              a.textContent = `${row[header.key]}${row.propietarioApellido ? ' ' + row.propietarioApellido : ''}${row.propietarioMaterno ? ' ' + row.propietarioMaterno : ''}`
              a.addEventListener('click', () => this.verContrato(row))
              td.appendChild(a)
            } else if (header.key === 'direccion') {
              td.innerHTML = `
                <p class="mb-0 text-sm font-weight-bold text-secondary">
                  ${row.direccionCalle} ${row.direccionNumero}, ${row.direccionCiudad},
                  <span class="text-success">${row.direccionRegion}</span>, ${row.direccionPais}
                </p>
              `
            } else {
              td.textContent = row[header.key] ? row[header.key] : 'N/A'
            }

            tr.appendChild(td)
          })

          if (this.details) {
            const actionTd = document.createElement('td')
            actionTd.className = 'align-middle'

            const actionContainer = document.createElement('div')
            actionContainer.className = 'd-flex justify-content-center'

            if (this.details) {
              const detailsContainer = document.createElement('div')
              detailsContainer.className = 'd-flex justify-content-center align-items-center my-sm-auto mt-2 mb-0 ms-2'
              this.mountButton(detailsContainer, 'primary', 'Detalles', () => this.handleDetails(row), 'visibility')
              actionContainer.appendChild(detailsContainer)
            }

            actionTd.appendChild(actionContainer)
            tr.appendChild(actionTd)
          }

          tbody.appendChild(tr)
        })

        this.initializeDataTable()
      })
    },
    mountButton(container, color, text, onClick, icon) {
      createApp({
        render() {
          return h(MaterialButton, {
            color,
            size: 'sm',
            variant: 'gradient',
            class: 'd-flex align-items-center justify-content-center',
            onClick
          }, {
            default: () => [
              h('span', {
                class: 'material-symbols-outlined mr-3',
                style: 'font-size: 16px; margin-right: 10px;'
              }, icon),
              text
            ]
          })
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
