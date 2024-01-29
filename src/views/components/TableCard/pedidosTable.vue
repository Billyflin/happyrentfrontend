<script setup>

import MaterialButton from "@/components/MaterialButton.vue";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import MaterialAvatar from "@/components/MaterialAvatar.vue";
</script>

<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card mt-4">
          <div class="card-header">
            <h5 class="mb-0">Pedidos</h5>
            <p class="text-sm mb-0">
              Todos los pedidos .
            </p>
          </div>
          <div class="table-responsive">
            <table id="order-list" class="table table-flush">
              <thead class="thead-light">
              <tr>
                <th>Id</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Cliente</th>
                <th>Productos</th>
                <th>Ingresos</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10421</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 10:20 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                        :img="img1"
                        class="me-2"
                        size="xs"
                        circular
                        alt="user image"
                    />
                    <span>Orlando Imieto</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">Ryzen 5 5600x</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$140,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10422</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 10:53 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                        :img="img1"
                        size="xs"
                        circular
                        class="me-2"
                        alt="user image"
                    />
                    <span>Alice Murinho</span>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">WD Black sn850</span>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">$89,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10423</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 11:13 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="dark"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-undo" aria-hidden="true"></i>
                    </material-button>
                    <span>Reembolsado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                    <span>Michael Mirra</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                    <span class="my-2 text-xs">
                      Asus TUF b450m
                      <span class="text-secondary ms-2">+1 more</span>
                    </span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$125,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10424</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 12:20 PM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                      <span>Andrew Nichel</span>
                    </div>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">Intel i3 10100f</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$90,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10425</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 1:40 PM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="danger"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </material-button>
                    <span>Cancelado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <material-avatar
                          :img="img1"
                          size="xs"
                          circular
                          class="me-2"
                          alt="user image"
                      />
                      <span>Sebastian Koga</span>
                    </div>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                    <span class="my-2 text-xs">
                      Intel Core i9 11900k
                      <span class="text-secondary ms-2">x 2</span>
                    </span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$144,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10426</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 2:19 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                    <span>Laur Gilbert</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">Intel i5 10600f</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$200,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10427</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">1 Nov, 3:42 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                    <span>Iryna Innda</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">Ryzen 3 4200g</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$80,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10428</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">2 Nov, 9:32 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                    <span>Arrias Liunda</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">WD Black sn850</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$150,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10429</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">2 Nov, 10:14 AM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <material-avatar
                          :img="img1"
                          size="xs"
                          circular
                          class="me-2"
                          alt="user image"
                      />
                      <span>Rugna Ilpio</span>
                    </div>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">Intel i3 10100f</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$150,000</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10430</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">2 Nov, 12:56 PM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="dark"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-undo" aria-hidden="true"></i>
                    </material-button>
                    <span>Reembolsado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                      <span>Anna Landa</span>
                    </div>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                    <span class="my-2 text-xs">
                      Intel Core i9 11900k
                    </span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$350,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10431</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">2 Nov, 3:12 PM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                    <span>Karl Innas</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">WD Blue 1tb</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$100,990</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <material-checkbox />
                    <p class="text-xs font-weight-bold ms-2 mb-0">#10432</p>
                  </div>
                </td>
                <td class="font-weight-bold">
                  <span class="my-2 text-xs">2 Nov, 5:12 PM</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-button
                        color="success"
                        variant="outline"
                        class="btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"
                    >
                      <i class="fas fa-check" aria-hidden="true"></i>
                    </material-button>
                    <span>Aprobado</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <div class="d-flex align-items-center">
                    <material-avatar
                          :img="img1"
                          size="xs"
                          class="me-2"
                          circular
                          alt="user image"
                      />
                    <span>Oana Kilas</span>
                  </div>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">WD Blue 500gb</span>
                </td>
                <td class="text-xs font-weight-bold">
                  <span class="my-2 text-xs">$50,990</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="d-sm-flex mt-2 justify-content-between">
      <div>
        <material-button color="primary" variant="gradient">Nuevo Pedido</material-button>
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
          >filtros</material-button
          >
          <ul
              class="dropdown-menu dropdown-menu-lg-start px-2 py-3"
              aria-labelledby="navbarDropdownMenuLink2"
              style
          >
            <li>
              <a class="dropdown-item border-radius-md" href="javascript:"
              >Status: Aprobado</a
              >
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="javascript:"
              >Status: Refunded</a
              >
            </li>
            <li>
              <a class="dropdown-item border-radius-md" href="javascript:"
              >Status: Cancelado</a
              >
            </li>
            <li>
              <hr class="horizontal dark my-2" />
            </li>
            <li>
              <a
                  class="dropdown-item border-radius-md text-danger"
                  href="javascript:"
              >Remover Filtro</a
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
          <span class="btn-inner--text">Exportar CSV</span>
        </material-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>