<script>
import MaterialAvatar from '@/components/MaterialAvatar.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import { useAuthStore } from '@/store/index.js'
import MaterialButton from '@/components/MaterialButton.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'

export default {
  name: 'SideNavItem',
  components: { MaterialChoices, MaterialButton, MaterialInput, MaterialSwitch, MaterialAvatar },
  setup() {
    const store = useAuthStore()
    return { store }
  },
  data() {
    return {
      genero: [{value:'hombre', text:'Hombre'},{value:'mujer', text:'Mujer'}]
    }
  }
}
</script>

<template>
  <div id="basic-info" class="card mt-4">
    <div class="card-header">
      <h5>Informacion Básica</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-6">
          <material-input
            id="Nombre"
            variant="static"
            label="Nombre"
            placeholder="Nombre"
          />
        </div>
        <div class="col-6">
          <material-input
            id="Apellido"
            variant="static"
            label="Apellido"
            placeholder="Apellido"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-6">
          <material-choices class="col-4"
                            id="Genero"
                            :options="genero"
                            label="Soy"
                            name="genero" />

        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-5 col-5">
              <label class="form-label mt-4 ms-0">Fecha de Nacimiento
              </label>
              <select
                id="months"
                class="form-control"
                name="choices-month"
              ></select>
            </div>
            <div class="col-sm-4 col-3">
              <label class="form-label mt-4 ms-0">&nbsp;</label>
              <select
                id="choices-day"
                class="form-control"
                name="choices-day"
              ></select>
            </div>
            <div class="col-sm-3 col-4">
              <label class="form-label mt-4 ms-0">&nbsp;</label>
              <select
                id="choices-year"
                class="form-control"
                name="choices-year"
              ></select>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6">
          <material-input
            id="email"
            type="email"
            variant="static"
            label="Email"
            placeholder="example@email.com"
          />
        </div>
        <div class="col-6">
          <material-input
            id="confirmEmail"
            type="email"
            variant="static"
            label="Confirm Email"
            placeholder="example@email.com"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6">
          <material-input
            id="location"
            type="text"
            variant="static"
            label="Your Location"
            placeholder="Sydney, A"
          />
        </div>
        <div class="col-6">
          <material-input
            id="phoneNumber"
            type="phone"
            variant="static"
            label="Phone Number"
            placeholder="+40 745 765 439"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 align-self-center">
          <label class="form-label mt-4 ms-0">Language</label>
          <select
            id="choices-language"
            class="form-control"
            name="choices-language"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label mt-4 ms-0">Skills</label>
          <input
            id="choices-skills"
            class="form-control"
            type="text"
            value="vuejs, angular, react"
            placeholder="Enter something"
            onfocus="focused(this)"
            onfocusout="defocused(this)"
          />
        </div>
      </div>
    </div>
  </div>
  <div id="password" class="card mt-4">
    <div class="card-header">
      <h5>Cambiar Contraseña</h5>
    </div>
    <div class="card-body pt-0">
      <div class="mb-3">
        <material-input
          id="currentPassword"
          type="password"
          label="Current Password"
        />
      </div>
      <div class="mb-3">
        <material-input id="newPassword" type="password" label="New Password" />
      </div>
      <div class="mb-3">
        <material-input
          id="confirmPassword"
          type="password"
          label="Confirm password"
        />
      </div>
      <h5 class="mt-5">Requerimientos de la contraseña</h5>
      <p class="text-muted mb-2">
       Asegurate que tu contraseña cumpla con los siguientes requerimientos:
      </p>
      <ul class="text-muted ps-4 mb-0 float-start">
        <li>
          <span class="text-sm">Un special caracter</span>
        </li>
        <li>
          <span class="text-sm">Min 6 caracteres</span>
        </li>
        <li>
          <span class="text-sm">Minimo un número</span>
        </li>
        <li>
          <span class="text-sm">Cambia tu contraseña con frecuencia</span>
        </li>
      </ul>
      <material-button
        class="float-end mt-6 mb-0"
        color="dark"
        variant="gradient"
        size="sm"
      >Update password</material-button
      >
    </div>
  </div>
  <div id="delete" class="card mt-4">
    <div class="card-header">
      <h5>Eliminar Cuenta</h5>
      <p class="text-sm mb-0">
        Si eliminas tu cuenta, perderás todos tus datos y no podrás recuperarlos. Por favor, asegúrate de que deseas eliminar tu cuenta.
      </p>
    </div>
    <div class="card-body d-sm-flex pt-0">
      <div class="d-flex align-items-center mb-sm-0 mb-4">
        <div>
          <material-switch id="deleteAccount" name="Delete Account" />
        </div>
        <div class="ms-2">
          <span class="text-dark font-weight-bold d-block text-sm"
          >Confirmar</span
          >
          <span class="text-xs d-block">Quiero borrar mi cuenta, estoy en conocimiento que esta acción es permanente</span>
        </div>
      </div>
      <material-button
        color="secondary"
        variant="outline"
        class="mb-0 ms-auto"
        type="button"
        name="button"
      >Desactivar</material-button
      >
      <material-button
        color="danger"
        variant="gradient"
        class="mb-0 ms-2"
        type="button"
        name="button"
      >Eliminar Cuenta</material-button
      >
    </div>
  </div>
</template>