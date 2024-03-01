<template>
  <div class="py-4 container-fluid">
    <div class="d-sm-flex justify-content-between">
      <div>
        <router-link to="/nuevoContrato">
          <material-button color="success" variant="gradient">Nuevo Contrato</material-button>
        </router-link>
      </div>
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
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">


          <!-- Card header -->
          <div class="card-header">
            <h5 class="mb-0">Mis Contratos</h5>
            <p class="mb-0 text-sm">
              Aquí encontrarás un listado de tus contratos
            </p>
          </div>
          <div class="table-responsive">
            <table id="datatable-search" class="table table-flush">
              <thead class="thead-light">
              <tr>
                <th class="text-center">Estado</th>
                <th class="text-center">Tipo Propiedad</th>
                <th class="text-center">Fecha Creación</th>
                <th class="text-center">Fecha Inicio</th>
                <th class="text-center">Fecha Término</th>
                <th class="text-center">Renta</th>
                <th class="text-center"> Acciones</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-sm font-weight-bold text-center align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <material-button
                      color="success"
                      variant="outline"
                      class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Activo</span>
                  </div>
                </td>
                <td class="text-sm font-weight-normal text-center">Casa</td>
                <td class="text-sm font-weight-normal text-center">2023/02/01</td>
                <td class="text-sm font-weight-normal text-center">2023/03/01</td>
                <td class="text-sm font-weight-normal text-center">2024/03/01</td>
                <td class="text-sm font-weight-normal text-center">$320,800</td>
                <td class="d-flex align-items-center text-sm">
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-sm font-weight-bold text-center align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <material-button
                      color="danger"
                      variant="outline"
                      class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </material-button>
                    <span>Inactivo</span>
                  </div>
                </td>
                <td class="text-sm font-weight-normal text-center">Departamento</td>
                <td class="text-sm font-weight-normal text-center">2021/02/01</td>
                <td class="text-sm font-weight-normal text-center">2021/03/01</td>
                <td class="text-sm font-weight-normal text-center">2025/03/01</td>
                <td class="text-sm font-weight-normal text-center">$300,800</td>
                <td class="d-flex align-items-center text-sm">
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-sm font-weight-bold text-center align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <material-button
                      color="success"
                      variant="outline"
                      class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Activo</span>
                  </div>
                </td>
                <td class="text-sm font-weight-normal text-center">sitio</td>
                <td class="text-sm font-weight-normal text-center">2023/05/01</td>
                <td class="text-sm font-weight-normal text-center">2023/05/10</td>
                <td class="text-sm font-weight-normal text-center">2024/05/10</td>
                <td class="text-sm font-weight-normal text-center">$320,800</td>
                <td class="d-flex align-items-center text-sm">
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-sm font-weight-bold text-center align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <material-button
                      color="success"
                      variant="outline"
                      class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Activo</span>
                  </div>
                </td>
                <td class="text-sm font-weight-normal text-center">bodega</td>
                <td class="text-sm font-weight-normal text-center">2023/05/01</td>
                <td class="text-sm font-weight-normal text-center">2023/05/01</td>
                <td class="text-sm font-weight-normal text-center">2025/08/01</td>
                <td class="text-sm font-weight-normal text-center">$120,800</td>
                <td class="d-flex align-items-center text-sm">
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-sm font-weight-bold text-center align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <material-button
                      color="danger"
                      variant="outline"
                      class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </material-button>
                    <span>Inactivo</span>
                  </div>
                </td>
                <td class="text-sm font-weight-normal text-center">Edificio</td>
                <td class="text-sm font-weight-normal text-center">2022/02/01</td>
                <td class="text-sm font-weight-normal text-center">2022/03/01</td>
                <td class="text-sm font-weight-normal text-center">2023/03/01</td>
                <td class="text-sm font-weight-normal text-center">$520,800</td>
                <td class="d-flex align-items-center text-sm">
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-sm font-weight-bold text-center align-middle">
                  <div class="d-flex align-items-center justify-content-center">
                    <material-button
                      color="success"
                      variant="outline"
                      class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Activo</span>
                  </div>
                </td>
                <td class="text-sm font-weight-normal text-center">Terreno</td>
                <td class="text-sm font-weight-normal text-center">2021/04/01</td>
                <td class="text-sm font-weight-normal text-center">2021/04/10</td>
                <td class="text-sm font-weight-normal text-center">2022/07/10</td>
                <td class="text-sm font-weight-normal text-center">$500,000</td>
                <td class="d-flex align-items-center text-sm">
                  <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
                    PDF
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

<script>
import { DataTable } from 'simple-datatables'
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'DataTables',
  components: { MaterialButton },
  mounted()
  {
    // eslint-disable-next-line no-unused-vars
    // const dataTableBasic = new DataTable("#datatable-basic", {
    //   searchable: false,
    //   fixedHeight: true,
    // });

    // eslint-disable-next-line no-unused-vars
    new DataTable('#datatable-search', {
      searchable: true,
      fixedHeight: true
    })
  }

}
</script>
