<template>
  <div>
    <material-button color="dark" variant="gradient" data-bs-toggle="modal" data-bs-target="#addAccountModal">
      <i class="fas fa-plus me-2"></i>
      Añadir Nueva Cuenta
    </material-button>

    <div class="modal fade" id="addAccountModal" aria-labelledby="addAccountModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addAccountModalLabel">Añadir Nueva Cuenta</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <form @submit.prevent="addNewAccount">
              <div class="row form-control">
                <material-select
                  v-model="newAccount.banco"
                  :options="bankOptions"
                  label="Banco"
                  id="bankSelect"
                />
                <material-select
                  v-model="newAccount.tipoCuenta"
                  :options="accountTypeOptions"
                  label="Tipo de Cuenta"
                  id="accountTypeSelect"
                />

                <div class="col mb-3">
                  <material-input v-model="newAccount.numeroCuenta" type="number" variant="static" label="Número de Cuenta" placeholder="8888 8888 8888 0000"  id="numberAccount"/>
                </div>

                <div class="col mb-3">
                  <material-input v-model="newAccount.rut" type="rut" variant="static" label="Rut de Cuenta" placeholder="11111111-1"  id="rut"/>
                </div>

                <div class="col mb-3">
                  <material-input v-model="newAccount.email" type="email" variant="static" label="Correo notificación" placeholder="cuenta@dominio.com"  id="emailAccount"/>
                </div>

                <div class="col mb-3">
                  <material-checkbox v-model="newAccount.activa" >
                    Activo
                  </material-checkbox>
                </div>
                <span v-if="error" class="badge badge-danger text-xs mt-2">{{ error }}</span>
              </div>
              <div class="modal-footer">
                <material-button color="dark" variant="gradient" type="submit" data-bs-dismiss="modal">
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
  name: "ModalNuevaCuentaBancaria",
  components: { MaterialSelect, MaterialCheckbox, MaterialInput, MaterialButton },
  emits: ['cuentaAgregada'],
  data() {
    return {
      newAccount: {
        banco: '',
        tipoCuenta: '',
        numeroCuenta: '',
        email: '',
        rut:'',
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
    };
  },
  methods: {
    async addNewAccount() {
      try {
        if (!this.newAccount.banco || !this.newAccount.tipoCuenta || !this.newAccount.numeroCuenta || !this.newAccount.email) {
          this.error = 'Por favor, complete todos los campos.';
          return;
        }
        const response = await agregarCuentaBancaria(this.newAccount);
        if (response.status === 200) {
          this.$emit('cuentaAgregada', this.newAccount);
          // Resetea los campos del formulario
          this.newAccount = {
            numeroCuenta: '',
            email: '',
            rut:'',
            activa: false
          };
        }
      } catch (error) {
        console.error('Error al agregar la cuenta bancaria:', error);
      }
    }
  }
};
</script>
