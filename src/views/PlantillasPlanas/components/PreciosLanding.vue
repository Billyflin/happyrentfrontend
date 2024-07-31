<script setup>

import PricingCard from '@/components/PricingCard.vue'
</script>

<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-lg-4 col-md-6 col-7 mx-auto text-center">
        <div class="nav-wrapper mt-5 position-relative z-index-2">
          <ul
            id="tabs-pricing"
            class="nav nav-pills nav-fill flex-row p-1"
            role="tablist"
          >
            <li class="nav-item">
              <a
                id="tabs-iconpricing-tab-1"
                aria-controls="Personal"
                aria-selected="true"
                class="nav-link mb-0 active"
                data-bs-toggle="tab"
                href="#personal"
                role="tab"
              >Personal</a
              >
            </li>
            <li class="nav-item">
              <a
                id="tabs-iconpricing-tab-2"
                aria-controls="ejecutivo"
                aria-selected="false"
                class="nav-link mb-0"
                data-bs-toggle="tab"
                href="#ejecutivo"
                role="tab"
              >Ejecutivo</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab-content tab-space">
      <div id="personal" class="tab-pane active">
        <div class="row">
          <pricing-card
            :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
            :badge="{ color: 'light', label: 'Crecimiento' }"
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
          />
          <pricing-card
            :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
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
            color="dark"
            dark-mode
          />
          <pricing-card
            :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
            :badge="{ color: 'light', label: 'Avance' }"
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
          />
        </div>
      </div>
      <div id="ejecutivo" class="tab-pane">
        <div class="row">
          <pricing-card
            :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
            :badge="{ color: 'light', label: 'Consolidado' }"
            :price="{ currency: '$', value: '4,0 UF', charged: 'Mes + iva' }"
            :specifications="[
                  { label: 'Hasta 200 Propiedades', includes: true },
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
          />
          <pricing-card
            :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Obtener',
                }"
            :badge="{ color: 'success', label: 'Infinito' }"
            :price="{ currency: '$', value: '9,0 UF', charged: 'Mes + iva' }"
            :specifications="[
                  { label: 'Hasta 500 Propiedades', includes: true },
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
            color="dark"
            dark-mode
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>