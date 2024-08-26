<template>
  <div id="bank-accounts" class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h5 class="mb-0">Cuentas Bancarias</h5>
        </div>
        <div class="col-6 text-end">
          <ModalNuevaCuentaBancaria @cuentaAgregada="handleCuentaAgregada" />
        </div>
      </div>
      <p class="text-sm">Administra tus cuentas bancarias, estas se usaran como para recibir depósitos de los
        contratos</p>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <div
          v-for="(cuenta, index) in cuentasOrdenadas"
          :key="index"
          class="col-md-6 mb-md-0 mb-4"
        >
          <div class="card border card-plain border-radius-lg mb-3">
            <div class="card-body d-flex align-items-center flex-row">
              <img
                class="w-10 me-3 mb-0"
                :src="getBankLogo(cuenta.banco)"
                alt="logo"
              />
              <div>
                <h6 class="mb-0">{{ cuenta.banco }} - {{ cuenta.tipoCuenta }}</h6>
                <p class="mb-0">
                  {{ cuenta.numeroCuenta }}
                  <span v-if="cuenta.activa" class="badge bg-success ms-2">Activa</span>
                </p>
              </div>
              <span
                class="material-symbols-outlined text-dark text-4xl cursor-pointer ms-auto"
                @click="toggleCollapse(index)"
                :title="!isCollapsed(index) ? 'Expandir' : 'Colapsar'"
                :aria-expanded="isCollapsed(index)"
                :aria-controls="`collapseExample${index}`"
                data-bs-original-title="Expandir"
                aria-label="Expandir"
              >
              {{ !isCollapsed(index) ? 'expand_circle_down' : 'expand_circle_up' }}
            </span>
            </div>
            <div class="collapse" :id="`collapseExample${index}`" :class="{'show': isCollapsed(index)}">
              <div class="card-body border-top">
                <div class="d-flex">
                  <p class="my-auto">Rut de la cuenta</p>
                  <p class="text-secondary text-sm ms-auto ">{{ cuenta.rut }}</p>
                </div>
                <div class="d-flex mt-0">
                  <p class="my-auto"> Seleccionar como cuenta activa</p>
                  <material-button
                    variant="outline"
                    color="success"
                    size="sm"
                    class="mb-3 ms-auto"
                    @click="setCuentaActiva(cuenta.id)"
                  >
                    Seleccionar cuenta activa
                  </material-button>
                </div>
                <!--                spacer-->

                <div class="d-flex">
                  <p class="my-auto">Correo de notificación</p>
                  <p class="text-secondary text-sm ms-auto my-auto me-3">{{ cuenta.email }}</p>
                  <material-button
                    color="dark"
                    variant="outline"
                    size="sm"
                    class="mb-0"
                  >
                    Editar
                  </material-button>


                </div>
                <div class="d-flex mb-sm-0 mt-4">
                  <material-button
                    color="danger"
                    size="sm"
                    class="mb-0 ms-2"
                    @click="borrarCuenta(cuenta.id)"
                  >
                    Eliminar
                  </material-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgBancoChile from '@/assets/img/logos/bank/BCH.svg'
import imgBancoEstado from '@/assets/img/logos/bank/BE.svg'
import imgItau from '@/assets/img/logos/bank/ITUB.svg'
import imgBCI from '@/assets/img/logos/bank/BCI.SN.png'
import imgSantander from '@/assets/img/logos/bank/SAN.svg'
import imgScotiabank from '@/assets/img/logos/bank/BNS.svg'
import { borrarCuentaBancaria, setCuentaActual, obtenerCuentasBancarias } from '@/servicios/authService.js'
import ModalNuevaCuentaBancaria from './ModalNuevaCuentaBancaria.vue'
import MaterialButton from '@/components/Material/MaterialButton.vue'
import MaterialSwitch from '@/components/Material/MaterialSwitch.vue'
import { useNotificationsStore } from '@/store/notifications.js'

export default {
  name: "BankAccounts",
  components: {
    MaterialSwitch,
    MaterialButton,
    ModalNuevaCuentaBancaria
  },
  data() {
    return {
      showModal: false,
      cuentas: [],
      collapsedIndexes: [],
      notificationStore: useNotificationsStore(),
      logos: {
        "Banco de Chile": imgBancoChile,
        "Banco Estado": imgBancoEstado,
        "Itau": imgItau,
        "BCI": imgBCI,
        "Santander": imgSantander,
        "Scotiabank": imgScotiabank
      }
    };
  },
  computed: {
    cuentasOrdenadas() {
      return this.cuentas.slice().sort((a, b) => b.activa - a.activa)
    }
  },
  methods: {
    isCollapsed(index) {
      return this.collapsedIndexes.includes(index);
    },
    toggleCollapse(index) {
      if (this.isCollapsed(index)) {
        this.collapsedIndexes = this.collapsedIndexes.filter(i => i !== index);
      } else {
        this.collapsedIndexes.push(index);
      }
    },
    async borrarCuenta(id) {
      try {
        // Notificación de inicio del proceso de borrado
        this.notificationStore.createNotification(
          'info',
          'Borrando cuenta',
          'El borrado de la cuenta está en proceso...'
        );

        await borrarCuentaBancaria(id);

        this.cuentas = this.cuentas.filter(cuenta => cuenta.id !== id);

        // Notificación de éxito
        this.notificationStore.createNotification(
          'success',
          'Cuenta borrada',
          'La cuenta bancaria ha sido borrada exitosamente.'
        );
      } catch (error) {
        console.error('Error al borrar la cuenta bancaria:', error);

        // Notificación de error
        this.notificationStore.createNotification(
          'danger',
          'Error',
          'Hubo un error al borrar la cuenta bancaria.'
        );
      }
    },
    async handleCuentaAgregada(cuenta) {
      try {
        const response = await obtenerCuentasBancarias();
        this.cuentas = response.data;
      } catch (error) {
        console.error('Error al obtener las cuentas bancarias:', error);
      }
    },
    getBankLogo(banco) {
      return this.logos[banco] || this.logos["Banco de Chile"]; // Devuelve un logo por defecto si el banco no se encuentra
    },
    async setCuentaActiva(id) {
      try {
        // Notificación de inicio del proceso de cambio de cuenta
        this.notificationStore.createNotification(
          'info',
          'Cambiando cuenta',
          'El cambio de cuenta activa está en proceso...'
        );

        await setCuentaActual(id);

        this.cuentas = this.cuentas.map(cuenta => {
          cuenta.activa = false;
          cuenta.activa = cuenta.id === id;
          return cuenta;
        });

        const cuentaActiva = this.cuentas.find(cuenta => cuenta.id === id);

        // Notificación de éxito
        this.notificationStore.createNotification(
          'success',
          'Cuenta activa',
          `Se ha establecido la cuenta activa: ${cuentaActiva.banco}`
        );
      } catch (error) {
        console.error('Error al establecer la cuenta activa:', error);

        // Notificación de error
        this.notificationStore.createNotification(
          'danger',
          'Error',
          'Hubo un error al establecer la cuenta activa.'
        );
      }
    }
  },
  async beforeMount() {
    try {
      const response = await obtenerCuentasBancarias();
      this.cuentas = response.data;
    } catch (error) {
      console.error('Error al obtener las cuentas bancarias:', error);
    }
  }
}
</script>
