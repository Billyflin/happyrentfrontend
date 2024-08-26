<template>
  <div id="basic-info" class="card mt-4">
    <div class="card-header">
      <h5>Información de la cuenta</h5>
    </div>
    <div class="card-body pt-0">
      <div v-if="perfil" id="basicInfoAccordion" class="accordion">
        <!-- Datos del Usuario -->
        <profile-accordion-item accordion-id="headingUser" collapse-id="collapseUser">
          <template #title>Datos del Usuario</template>
          <template #data>
            <table class="table">
              <tbody>
                <tr>
                  <td><strong>Nombre de Usuario:</strong></td>
                  <td>{{ perfil.username }}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{{ perfil.email }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </profile-accordion-item>

        <!-- Datos de la Empresa -->
        <profile-accordion-item accordion-id="headingCompany" collapse-id="collapseCompany">
          <template #title>Datos de la Empresa</template>
          <template #data>
            <table class="table">
              <tbody>
                <tr>
                  <td><strong>Razón Social:</strong></td>
                  <td>{{ perfil.perfil.razonSocial }}</td>
                </tr>
                <tr>
                  <td><strong>Giro:</strong></td>
                  <td>{{ perfil.perfil.giro }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </profile-accordion-item>

        <!-- Datos del Representante -->
        <profile-accordion-item
          accordion-id="headingRepresentative"
          collapse-id="collapseRepresentative"
        >
          <template #title>Datos del Representante</template>
          <template #data>
            <table class="table">
              <tbody>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Nombre:</strong></td>
                  <td>{{ perfil.perfil.representante.nombre }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Apellido Paterno:</strong></td>
                  <td>{{ perfil.perfil.representante.apellidoPaterno }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Apellido Materno:</strong></td>
                  <td>{{ perfil.perfil.representante.apellidoMaterno }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Email:</strong></td>
                  <td>{{ perfil.perfil.representante.email }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Teléfono:</strong></td>
                  <td>{{ perfil.perfil.representante.telefono }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Ocupación:</strong></td>
                  <td>{{ perfil.perfil.representante.ocupacion }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Estado Civil:</strong></td>
                  <td>{{ perfil.perfil.representante.estadoCivil }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Nacionalidad:</strong></td>
                  <td>{{ perfil.perfil.representante.nacionalidad }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </profile-accordion-item>

        <!-- Dirección del Representante -->
        <profile-accordion-item accordion-id="headingRepAddress" collapse-id="collapseRepAddress">
          <template #title>Dirección del Representante</template>
          <template #data>
            <table class="table">
              <tbody>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Calle:</strong></td>
                  <td>{{ perfil.perfil.representante.direccion.calle }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Número:</strong></td>
                  <td>{{ perfil.perfil.representante.direccion.numero }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Ciudad:</strong></td>
                  <td>{{ perfil.perfil.representante.direccion.ciudad }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Región:</strong></td>
                  <td>{{ perfil.perfil.representante.direccion.region }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>País:</strong></td>
                  <td>{{ perfil.perfil.representante.direccion.pais }}</td>
                </tr>
                <tr v-if="perfil.perfil.representante">
                  <td><strong>Código Postal:</strong></td>
                  <td>{{ perfil.perfil.representante.direccion.codigoPostal }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </profile-accordion-item>

        <!-- Dirección de la Empresa -->
        <profile-accordion-item
          accordion-id="headingCompanyAddress"
          collapse-id="collapseCompanyAddress"
        >
          <template #title>Dirección de la Empresa</template>
          <template #data>
            <table class="table">
              <tbody>
                <tr v-if="perfil.perfil.direccion">
                  <td><strong>Calle:</strong></td>
                  <td>{{ perfil.perfil.direccion.calle }}</td>
                </tr>
                <tr v-if="perfil.perfil.direccion">
                  <td><strong>Número:</strong></td>
                  <td>{{ perfil.perfil.direccion.numero }}</td>
                </tr>
                <tr v-if="perfil.perfil.direccion">
                  <td><strong>Ciudad:</strong></td>
                  <td>{{ perfil.perfil.direccion.ciudad }}</td>
                </tr>
                <tr v-if="perfil.perfil.direccion">
                  <td><strong>Región:</strong></td>
                  <td>{{ perfil.perfil.direccion.region }}</td>
                </tr>
                <tr v-if="perfil.perfil.direccion">
                  <td><strong>País:</strong></td>
                  <td>{{ perfil.perfil.direccion.pais }}</td>
                </tr>
                <tr v-if="perfil.perfil.direccion">
                  <td><strong>Código Postal:</strong></td>
                  <td>{{ perfil.perfil.direccion.codigoPostal }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </profile-accordion-item>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import { defineComponent } from 'vue'
import { useAuthStore } from '@/store/authStore.js'
import ProfileAccordionItem from '@/views/Perfil/components/ProfileAccordionItem.vue'

export default defineComponent({
  name: 'BasicInfoPerfil',
  components: { ProfileAccordionItem, MaterialChoices, MaterialInput },
  setup() {
    const store = useAuthStore()
    const perfil = store.currentUser
    return {
      perfil
    }
  }
})
</script>
