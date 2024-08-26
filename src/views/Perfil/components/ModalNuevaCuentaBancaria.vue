<template>
  <div>
    <material-button
      color="dark"
      data-bs-target="#addAccountModal"
      data-bs-toggle="modal"
      variant="gradient"
    >
      <i class="fas fa-plus me-2"></i>
      Añadir Nueva Cuenta
    </material-button>

    <div
      id="addAccountModal"
      aria-hidden="true"
      aria-labelledby="addAccountModalLabel"
      class="modal fade"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 id="addAccountModalLabel" class="modal-title fs-5">Añadir Nueva Cuenta</h1>
            <button
              aria-label="Close"
              class="btn-close"
              data-bs-dismiss="modal"
              type="button"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addNewAccount">
              <div class="row form-control">
                <material-select
                  id="bankSelect"
                  v-model="newAccount.banco"
                  :options="bankOptions"
                  label="Banco"
                />
                <material-select
                  id="accountTypeSelect"
                  v-model="newAccount.tipoCuenta"
                  :options="accountTypeOptions"
                  label="Tipo de Cuenta"
                />

                <div class="col mb-3">
                  <material-input
                    id="numberAccount"
                    v-model="newAccount.numeroCuenta"
                    label="Número de Cuenta"
                    placeholder="8888 8888 8888 0000"
                    type="number"
                    variant="static"
                  />
                </div>

                <div class="col mb-3">
                  <material-input
                    id="rut"
                    v-model="newAccount.rut"
                    label="Rut de Cuenta"
                    placeholder="11111111-1"
                    type="rut"
                    variant="static"
                  />
                </div>

                <div class="col mb-3">
                  <material-input
                    id="emailAccount"
                    v-model="newAccount.email"
                    label="Correo notificación"
                    placeholder="cuenta@dominio.com"
                    type="email"
                    variant="static"
                  />
                </div>

                <div class="col mb-3">
                  <material-checkbox v-model="newAccount.activa"> Activo </material-checkbox>
                </div>
                <span v-if="error" class="badge badge-danger text-xs mt-2">{{ error }}</span>
              </div>
              <div class="modal-footer">
                <material-button
                  color="dark"
                  data-bs-dismiss="modal"
                  type="submit"
                  variant="gradient"
                >
                  Guardar Cambios
                </material-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { agregarCuentaBancaria } from '@/servicios/authService.js'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialSelect from '@/components/Material/MaterialSelect.vue'

export default {
  name: 'ModalNuevaCuentaBancaria',
  components: { MaterialSelect, MaterialCheckbox, MaterialInput, MaterialButton },
  emits: ['cuentaAgregada'],
  data() {
    return {
      newAccount: {
        banco: '',
        tipoCuenta: '',
        numeroCuenta: '',
        email: '',
        rut: '',
        activa: false
      },
      error: null,
      bankOptions: [
        { value: 'Banco Estado', text: 'Banco Estado' },
        { value: 'Banco de Chile', text: 'Banco de Chile' },
        { value: 'Itau', text: 'Itau' },
        { value: 'BCI', text: 'BCI' },
        { value: 'Santander', text: 'Santander' },
        { value: 'Scotiabank', text: 'Scotiabank' }
      ],
      accountTypeOptions: [
        { value: 'Corriente', text: 'Corriente' },
        { value: 'Vista', text: 'Vista' },
        { value: 'Ahorro', text: 'Ahorro' }
      ]
    }
  },
  methods: {
    async addNewAccount() {
      try {
        if (
          !this.newAccount.banco ||
          !this.newAccount.tipoCuenta ||
          !this.newAccount.numeroCuenta ||
          !this.newAccount.email
        ) {
          this.error = 'Por favor, complete todos los campos.'
          return
        }
        const response = await agregarCuentaBancaria(this.newAccount)
        if (response.status === 200) {
          this.$emit('cuentaAgregada', this.newAccount)
          // Resetea los campos del formulario
          this.newAccount = {
            numeroCuenta: '',
            email: '',
            rut: '',
            activa: false
          }
        }
      } catch (error) {
        console.error('Error al agregar la cuenta bancaria:', error)
      }
    }
  }
}
</script>
