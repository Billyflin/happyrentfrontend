<template>
  <div class="row mt-3">
    <div class="col-lg-3">
      <router-link to="/"
                   class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0">
  <span class="material-symbols-outlined mx-2">
    arrow_back
  </span>
        Volver
      </router-link>
    </div>
  </div>
  <div class="header ms-4" >
    <h1>Detalles contrato</h1>
  </div>
<!--contrato-->
  <div id="Contrato" class="card mt-4">
    <div class="card-header">
      <h5>Contrato</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Fecha de Creación: {{ detalleContrato.fechaCreacion }}</div>
        </div>
        <div class="col-2">
          <div>Fecha de Inicio: {{ detalleContrato.fechaInicio }}</div>
        </div>
        <div class="col-2">
          <div>Fecha de Término: {{ detalleContrato.fechaTermino }}</div>
        </div>
        <div class="col-2">
          <div>Duración en Meses: {{ detalleContrato.duracionMeses }}</div>
        </div>
        <div class="col-2">
          <div>Renta: {{ detalleContrato.renta }}</div>
        </div>
        <div class="col-2">
          <div>Plazo de Aviso en Días: {{ detalleContrato.plazoAvisoDias }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Garantía: {{ detalleContrato.garantia }}</div>
        </div>
        <div class="col-2">
          <div>Activo: {{ detalleContrato.activo }}</div>
        </div>
        <div class="col-2">
          <div>Fecha de Notarización: {{ detalleContrato.fechaNotarizacion }}</div>
        </div>
        <div class="col-2">
          <div>Notario: {{ detalleContrato.notario }}</div>
        </div>
        <div class="col-2">
          <div>Número de Registro Notarial: {{ detalleContrato.numeroRegistroNotarial }}</div>
        </div>
      </div>
    </div>
  </div>
<!--propiedad-->
  <div id="Propiedad" class="card mt-4">
    <div class="card-header">
      <h5>Propiedad</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Calle: {{ detalleContrato.propiedad.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>Número: {{ detalleContrato.propiedad.direccion.numero }}</div>
        </div>
        <div class="col-2">
          <div>Código postal: {{ detalleContrato.propiedad.direccion.codigoPostal }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Tipo Propiedad: {{ detalleContrato.propiedad.tipoPropiedad.tipo }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.propiedad.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.propiedad.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.propiedad.direccion.ciudad }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Numero de baños: {{ detalleContrato.propiedad.numBanos }}</div>
        </div>
        <div class="col-2">
          <div>Numero de Piezas: {{ detalleContrato.propiedad.numPiezas }}</div>
        </div>
        <div class="col-2">
          <div>Numero de Estacionamientos: {{ detalleContrato.propiedad.numEstacionamientos }}</div>
        </div>
        <div class="col-2">
          <div>Metros² Terreno: {{ detalleContrato.propiedad.metrosCuadradosTerreno }}</div>
        </div>
        <div class="col-2">
          <div>Metros² Construidos : {{ detalleContrato.propiedad.metrosCuadradosConstruidos }}</div>
        </div>
      </div>
    </div>
  </div>
<!--propietario persona-->
  <div id="Propietario" class="card mt-4">
    <div class="card-header">
      <h5>Propietario Persona</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Nombre: {{ detalleContrato.propiedad.propietario.nombreCompleto }}</div>
        </div>
        <div class="col-2">
          <div>Email: {{ detalleContrato.propiedad.propietario.persona.email }}</div>
        </div>
        <div class="col-2">
          <div>Teléfono: {{ detalleContrato.propiedad.propietario.persona.telefono }}</div>
        </div>
        <div class="col-2">
          <div>Estado Civil: {{ detalleContrato.propiedad.propietario.persona.estadoCivil }}</div>
        </div>
        <div class="col-2">
          <div>Nacionalidad: {{ detalleContrato.propiedad.propietario.persona.nacionalidad }}</div>
        </div>
        <div class="col-2">
          <div>Ocupación: {{ detalleContrato.propiedad.propietario.persona.ocupacion }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Calle: {{ detalleContrato.propiedad.propietario.persona.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>Número: {{ detalleContrato.propiedad.propietario.persona.direccion.numero }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.propiedad.propietario.persona.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.propiedad.propietario.persona.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.propiedad.propietario.persona.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>Código Postal: {{ detalleContrato.propiedad.propietario.persona.direccion.codigoPostal }}</div>
        </div>
      </div>
    </div>
  </div>
<!--empresa-->
  <div id="Empresa" class="card mt-4">
    <div class="card-header">
      <h5>Empresa</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Nombre: {{ detalleContrato.empresa.nombre }}</div>
        </div>
        <div class="col-2">
          <div>RUT: {{ detalleContrato.empresa.rut }}</div>
        </div>
        <div class="col-2">
          <div>Email: {{ detalleContrato.empresa.email }}</div>
        </div>
        <div class="col-2">
          <div>Teléfono: {{ detalleContrato.empresa.telefono }}</div>
        </div>
        <div class="col-2">
          <div>Razón Social: {{ detalleContrato.empresa.razonSocial }}</div>
        </div>
        <div class="col-2">
          <div>Giro: {{ detalleContrato.empresa.giro }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Calle: {{ detalleContrato.empresa.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>Número: {{ detalleContrato.empresa.direccion.numero }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.empresa.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.empresa.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.empresa.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>Código Postal: {{ detalleContrato.empresa.direccion.codigoPostal }}</div>
        </div>
      </div>
<!--     todo
 pendiente terminar persona dentro de representante legal-->
            <div class="row mt-3">
              <div class="col-2">
                <div>Representante Legal: {{ detalleContrato.empresa.representanteLegal.persona.nombreCompleto }}</div>
              </div>
              <div class="col-2">
                <div>Email: {{ detalleContrato.empresa.representanteLegal.persona.email }}</div>
              </div>
              <div class="col-2">
                <div>Teléfono: {{ detalleContrato.empresa.representanteLegal.persona.telefono }}</div>
              </div>
              <div class="col-2">
                <div>Estado Civil: {{ detalleContrato.empresa.representanteLegal.persona.estadoCivil }}</div>
              </div>
              <div class="col-2">
                <div>Nacionalidad: {{ detalleContrato.empresa.representanteLegal.persona.nacionalidad }}</div>
              </div>
              <div class="col-2">
                <div>Ocupación: {{ detalleContrato.empresa.representanteLegal.persona.ocupacion }}</div>
              </div>
            </div>
    </div>
  </div>
<!--Arrendatario-->
  <div id="Arrendatario" class="card mt-4">
    <div class="card-header">
      <h5>Arrendatario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Nombre: {{ detalleContrato.arrendatario.persona.nombres }}</div>
        </div>
        <div class="col-2">
          <div>Email: {{ detalleContrato.arrendatario.persona.email }}</div>
        </div>
        <div class="col-2">
          <div>Teléfono: {{ detalleContrato.arrendatario.persona.telefono }}</div>
        </div>
        <div class="col-2">
          <div>Estado Civil: {{ detalleContrato.arrendatario.persona.estadoCivil }}</div>
        </div>
        <div class="col-2">
          <div>Nacionalidad: {{ detalleContrato.arrendatario.persona.nacionalidad }}</div>
        </div>
        <div class="col-2">
          <div>Ocupación: {{ detalleContrato.arrendatario.persona.ocupacion }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Calle: {{ detalleContrato.arrendatario.persona.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>Número: {{ detalleContrato.arrendatario.persona.direccion.numero }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.arrendatario.persona.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.arrendatario.persona.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.arrendatario.persona.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>Código Postal: {{ detalleContrato.arrendatario.persona.direccion.codigoPostal }}</div>
        </div>
      </div>
    </div>
  </div>
<!--Tipo Reajuste-->
  <div id="TipoReajuste" class="card mt-4">
    <div class="card-header">
      <h5>Tipo de Reajuste</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Tipo: {{ detalleContrato.tipoReajuste.tipo }}</div>
        </div>
        <div class="col-2">
          <div>Porcentaje de Reajuste: {{ detalleContrato.tipoReajuste.porcentajeReajuste }}</div>
        </div>
        <div class="col-2">
          <div>Periodicidad: {{ detalleContrato.tipoReajuste.periodicidad.tipo }}</div>
        </div>
        <div class="col-2">
          <div>Moneda: {{ detalleContrato.tipoReajuste.moneda.nombre }}</div>
        </div>
        <div class="col-2">
          <div>Símbolo: {{ detalleContrato.tipoReajuste.moneda.simbolo }}</div>
        </div>
      </div>
    </div>
  </div>
<div>

</div>

</template>
<script>

import axios from 'axios'

export default {
  name: 'DetallesContratos',
  props: {
    uuid: String
  },
  components: {},
  data() {
    return {
      detalleContrato: null
    }
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}:8080/contrato/${this.uuid}`)
        this.detalleContrato = response.data
        console.log(this.detalleContrato)
      } catch (e) {
        console.error(e)
      }
    }
  },
  async beforeMount() {
    await this.fetchItems()
  }
}
</script>
