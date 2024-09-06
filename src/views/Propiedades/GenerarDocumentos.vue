<template>
  <div class="card ">
    <div class="card-header pb-0">
      <h6>Generar Documentos</h6>
    </div>

    <ul class="nav flex-column bg-white border-radius-lg p-2 pt-0">
      <li class="nav-item pt-2">
        <a class="nav-link d-flex" data-scroll href="#basic-info">
          <i class="material-icons text-lg me-2">receipt_long</i>
          <span class="text-sm">Generar Acta de entrega</span>
        </a>
      </li>
      <!--                salvoconducto-->
      <li class="nav-item pt-2">
        <a class="nav-link d-flex" data-scroll href="#bank-accounts">
          <i class="material-icons text-lg me-2">account_balance</i>
          <span class="text-sm">Generar Salvoconducto</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'generarDocumentos'
}
</script>