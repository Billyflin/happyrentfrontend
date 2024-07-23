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
      genero: [{ value: 'hombre', text: 'Hombre' }, { value: 'mujer', text: 'Mujer' }]
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
            label="Nombre"
            placeholder="Nombre"
            variant="static"
          />
        </div>
        <div class="col-6">
          <material-input
            id="Apellido"
            label="Apellido"
            placeholder="Apellido"
            variant="static"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-6">
          <material-choices id="Genero"
                            :options="genero"
                            class="col-4"
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
            label="Email"
            placeholder="example@email.com"
            type="email"
            variant="static"
          />
        </div>
        <div class="col-6">
          <material-input
            id="confirmEmail"
            label="Confirm Email"
            placeholder="example@email.com"
            type="email"
            variant="static"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6">
          <material-input
            id="location"
            label="Your Location"
            placeholder="Sydney, A"
            type="text"
            variant="static"
          />
        </div>
        <div class="col-6">
          <material-input
            id="phoneNumber"
            label="Phone Number"
            placeholder="+40 745 765 439"
            type="phone"
            variant="static"
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
            onfocus="focused(this)"
            onfocusout="defocused(this)"
            placeholder="Enter something"
            type="text"
            value="vuejs, angular, react"
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
          label="Current Password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <material-input id="newPassword" label="New Password" type="password" />
      </div>
      <div class="mb-3">
        <material-input
          id="confirmPassword"
          label="Confirm password"
          type="password"
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
        size="sm"
        variant="gradient"
      >Update password
      </material-button
      >
    </div>
  </div>
  <div id="delete" class="card mt-4">
    <div class="card-header">
      <h5>Eliminar Cuenta</h5>
      <p class="text-sm mb-0">
        Si eliminas tu cuenta, perderás todos tus datos y no podrás recuperarlos. Por favor, asegúrate de que deseas
        eliminar tu cuenta.
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
          <span
            class="text-xs d-block">Quiero borrar mi cuenta, estoy en conocimiento que esta acción es permanente</span>
        </div>
      </div>
      <material-button
        class="mb-0 ms-auto"
        color="secondary"
        name="button"
        type="button"
        variant="outline"
      >Desactivar
      </material-button
      >
      <material-button
        class="mb-0 ms-2"
        color="danger"
        name="button"
        type="button"
        variant="gradient"
      >Eliminar Cuenta
      </material-button
      >
    </div>
  </div>
</template>