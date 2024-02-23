<template>
  <div class="pt-3 bg-white multisteps-form__panel" data-animation="FadeIn">
    <div class="text-center row">
      <div class="mx-auto col-10">
        <h5 class="font-weight-normal">Empecemos con información básica</h5>
        <p>Dejanos saber de tí.</p>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="row">
        <pricing-card
          color="dark"
          :badge="{ color: 'success', label: 'Crecimiento' }"
          :price="{ currency: '$', value: '0,8 UF', charged: 'Mes + iva' }"
          :specifications="[
                  { label: 'Desde 1 a 10 Propiedades', includes: true },
                  { label: 'Organizador de cartera', includes: true },
                  { label: 'Envío Automático de mails y cobranzas', includes: true },
                  { label: 'Generación de contrato', includes: false },
                  { label: 'Información consolidada de pagos', includes: false },
                  { label: 'Deshboard con análisis de datos', includes: false },
                  { label: 'Servicio al cliente vía mail', includes: false },
                  { label: 'Informe de liquidación automática', includes: false },
                  { label: 'Perfil del corredor', includes: false },
                  { label: 'Perfil del propietario', includes: false },
                ]"
          :action="{
                  color: 'light',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
          dark-mode
        />
        <pricing-card
          color="dark"
          :badge="{ color: 'success', label: 'Desarrollo' }"
          :price="{ currency: '$', value: '1,4 UF', charged: 'Mes + iva' }"
          :specifications="[
                  { label: 'Hasta 20 Propiedades', includes: true },
                  { label: 'Organizador de cartera', includes: true },
                  { label: 'Envío Automático de mails y cobranzas', includes: true },
                  { label: 'Generación de contrato', includes: true },
                  { label: 'Información consolidada de pagos', includes: true },
                  { label: 'Deshboard con análisis de datos', includes: false },
                  { label: 'Servicio al cliente vía mail', includes: false },
                  { label: 'Informe de liquidación automática', includes: false },
                  { label: 'Perfil del corredor', includes: false },
                  { label: 'Perfil del propietario', includes: false },
                ]"
          :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
          dark-mode
        />
        <pricing-card
          dark-mode
          color="dark"
          :badge="{ color: 'success', label: 'Avance' }"
          :price="{ currency: '$', value: '3,0 UF', charged: 'Mes + iva' }"
          :specifications="[
                  { label: 'Hasta 80 Propiedades', includes: true },
                  { label: 'Organizador de cartera', includes: true },
                  { label: 'Envío Automático de mails y cobranzas', includes: true },
                  { label: 'Generación de contrato', includes: true },
                  { label: 'Información consolidada de pagos', includes: true },
                  { label: 'Deshboard con análisis de datos', includes: true },
                  { label: 'Servicio al cliente vía mail', includes: true },
                  { label: 'Informe de liquidación automática', includes: true },
                  { label: 'Perfil del corredor', includes: true },
                  { label: 'Perfil del propietario', includes: true },
                ]"
          :action="{
                  color: 'light',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import PricingCard from '@/views/components/PricingCard.vue'
</script>
