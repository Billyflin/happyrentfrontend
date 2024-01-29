<template>
  <div>
    <!-- Aquí va tu código para el nombre del producto, la marca, el precio y el stock -->
    <div class="form-group mb-3">
      <MaterialInput
          id="chipset"
          label="Chipset"
          type="text"
          v-model="formStore.formData.chipset"
          class="input-group-outline"
      />
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="formFactor"
          label="Factor de forma"
          type="text"
          v-model="formStore.formData.formFactor"
          class="input-group-outline"
      />
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="memorySlots"
              label="Ranuras de memoria"
              type="number"
              v-model="formStore.formData.memorySlots"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="memoryType"
              label="Tipo de memoria"
              type="text"
              v-model="formStore.formData.memoryType"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="m2Slots"
              label="Ranuras M.2"
              type="number"
              v-model="formStore.formData.m2Slots"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="pciEx16Slots"
              label="Ranuras PCI-E x16"
              type="number"
              v-model="formStore.formData.pciEx16Slots"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="pciEx1Slots"
              label="Ranuras PCI-E x1"
              type="number"
              v-model="formStore.formData.pciEx1Slots"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="sata3Ports"
              label="Puertos SATA 3"
              type="number"
              v-model="formStore.formData.sata3Ports"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
    <div class="form-group mb-3">
      <MaterialInput
          id="socket"
          label="Socket"
          type="text"
          v-model="formStore.formData.socket"
          class="input-group-outline"
      />
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="usb2Ports"
              label="Puertos USB 2.0"
              type="number"
              v-model="formStore.formData.usb2Ports"
              class="input-group-outline"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group mb-3">
          <MaterialInput
              id="usb3Ports"
              label="Puertos USB 3.0"
              type="number"
              v-model="formStore.formData.usb3Ports"
              class="input-group-outline"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store";
import MaterialInput from "@/components/MaterialInput.vue";

const formStore = useFormStore();
</script>
