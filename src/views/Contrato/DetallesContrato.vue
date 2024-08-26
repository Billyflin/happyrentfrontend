<template>
  <div class="row mt-3">
    <div class="col-lg-3">
      <router-link
        class="btn btn-simple d-flex align-items-center ms-lg-auto me-lg-0 me-auto mt-lg-0"
        to="/contratos"
      >
        <span class="material-symbols-outlined mx-2"> arrow_back </span>
        Volver
      </router-link>
    </div>
  </div>

  <div class="header ms-4">
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
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Plazo de Aviso en Días: {{ detalleContrato.plazoAvisoDias }}</div>
        </div>
        <div class="col-2">
          <div>Garantía: {{ detalleContrato.garantia }}</div>
        </div>
        <div class="col-2">
          <div>Fecha de Notarización: {{ detalleContrato.fechaNotarizacion }}</div>
        </div>
        <div class="col-2">
          <div>Notario: {{ detalleContrato.notario }}</div>
        </div>
      </div>
    </div>
  </div>
  <!--propiedad-->
  <div v-if="detalleContrato.propiedad" id="Propiedad" class="card mt-4">
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
        <div class="col-2">
          <div>Tipo Propiedad: {{ detalleContrato.propiedad.type }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>País: {{ detalleContrato.propiedad.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.propiedad.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.propiedad.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Comuna: {{ detalleContrato.propiedad.direccion.ciudad }}</div>
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
          <div>
            Metros² Construidos : {{ detalleContrato.propiedad.metrosCuadradosConstruidos }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--propietario persona-->
  <div v-if="detalleContrato.propiedad.propietario" id="Propietario" class="card mt-4">
    <div class="card-header">
      <h5>Propietario Persona</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Nombre: {{ detalleContrato.propiedad.propietario.nombreCompleto }}</div>
        </div>

        <div class="col-2">
          <div>Email: {{ detalleContrato.propiedad.propietario.email }}</div>
        </div>

        <div class="col-2">
          <div>Teléfono: {{ detalleContrato.propiedad.propietario.telefono }}</div>
        </div>
        <div class="col-2">
          <div>Estado Civil: {{ detalleContrato.propiedad.propietario.estadoCivil }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Nacionalidad: {{ detalleContrato.propiedad.propietario.nacionalidad }}</div>
        </div>
        <div class="col-2">
          <div>Ocupación: {{ detalleContrato.propiedad.propietario.ocupacion }}</div>
        </div>
        <div class="col-2">
          <div>Calle: {{ detalleContrato.propiedad.propietario.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>Número: {{ detalleContrato.propiedad.propietario.direccion.numero }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.propiedad.propietario.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.propiedad.propietario.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.propiedad.propietario.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>
            Código Postal: {{ detalleContrato.propiedad.propietario.direccion.codigoPostal }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--empresa-->
  <div v-if="detalleContrato.empresa" id="Empresa" class="card mt-4">
    <div class="card-header">
      <h5>Empresa</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-3">
          <div>Nombre: {{ detalleContrato.empresa.nombre }}</div>
        </div>
        <div class="col-3">
          <div>RUT: {{ detalleContrato.empresa.rut }}</div>
        </div>
        <div class="col-3">
          <div>Email: {{ detalleContrato.empresa.email }}</div>
        </div>
        <div class="col-3">
          <div>Teléfono: {{ detalleContrato.empresa.telefono }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <div>Razón Social: {{ detalleContrato.empresa.razonSocial }}</div>
        </div>
        <div class="col-3">
          <div>Giro: {{ detalleContrato.empresa.giro }}</div>
        </div>
        <div class="col-3">
          <div>Calle: {{ detalleContrato.empresa.direccion.calle }}</div>
        </div>
        <div class="col-3">
          <div>Número: {{ detalleContrato.empresa.direccion.numero }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <div>Ciudad: {{ detalleContrato.empresa.direccion.ciudad }}</div>
        </div>
        <div class="col-3">
          <div>Región: {{ detalleContrato.empresa.direccion.region }}</div>
        </div>
        <div class="col-3">
          <div>País: {{ detalleContrato.empresa.direccion.pais }}</div>
        </div>
        <div class="col-3">
          <div>Código Postal: {{ detalleContrato.empresa.direccion.codigoPostal }}</div>
        </div>
      </div>
      <!--   pendiente terminar persona dentro de representante legal-->
      <div class="row mt-3">
        <div class="col-3">
          <div>
            Representante Legal:
            {{ detalleContrato.empresa.representanteLegal.persona.nombreCompleto }}
          </div>
        </div>
        <div class="col-3">
          <div>Email: {{ detalleContrato.empresa.representanteLegal.persona.email }}</div>
        </div>
        <div class="col-3">
          <div>Teléfono: {{ detalleContrato.empresa.representanteLegal.persona.telefono }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <div>
            Estado Civil: {{ detalleContrato.empresa.representanteLegal.persona.estadoCivil }}
          </div>
        </div>
        <div class="col-3">
          <div>
            Nacionalidad: {{ detalleContrato.empresa.representanteLegal.persona.nacionalidad }}
          </div>
        </div>
        <div class="col-3">
          <div>Ocupación: {{ detalleContrato.empresa.representanteLegal.persona.ocupacion }}</div>
        </div>
      </div>
    </div>
  </div>
  <!--Arrendatario-->
  <div v-if="detalleContrato.arrendatario" id="Arrendatario" class="card mt-4">
    <div class="card-header">
      <h5>Arrendatario</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Nombre: {{ detalleContrato.arrendatario.nombres }}</div>
        </div>
        <div class="col-2">
          <div>Email: {{ detalleContrato.arrendatario.email }}</div>
        </div>
        <div class="col-2">
          <div>Teléfono: {{ detalleContrato.arrendatario.telefono }}</div>
        </div>
        <div class="col-2">
          <div>Estado Civil: {{ detalleContrato.arrendatario.estadoCivil }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Nacionalidad: {{ detalleContrato.arrendatario.nacionalidad }}</div>
        </div>
        <div class="col-2">
          <div>Ocupación: {{ detalleContrato.arrendatario.ocupacion }}</div>
        </div>
        <div class="col-2">
          <div>Calle: {{ detalleContrato.arrendatario.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>comuna: {{ detalleContrato.arrendatario.direccion.ciudad }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Número: {{ detalleContrato.arrendatario.direccion.numero }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.arrendatario.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.arrendatario.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.arrendatario.direccion.pais }}</div>
        </div>
        <div class="col-2">
          <div>Código Postal: {{ detalleContrato.arrendatario.direccion.codigoPostal }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Codeudor -->
  <div v-if="detalleContrato.codeudor" id="Codeudor" class="card mt-4">
    <div class="card-header">
      <h5>Codeudor</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-2">
          <div>Nombre: {{ detalleContrato.codeudor.nombres }}</div>
        </div>
        <div class="col-2">
          <div>Email: {{ detalleContrato.codeudor.email }}</div>
        </div>
        <div class="col-2">
          <div>Teléfono: {{ detalleContrato.codeudor.telefono }}</div>
        </div>
        <div class="col-2">
          <div>Estado Civil: {{ detalleContrato.codeudor.estadoCivil }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Nacionalidad: {{ detalleContrato.codeudor.nacionalidad }}</div>
        </div>
        <div class="col-2">
          <div>Ocupación: {{ detalleContrato.codeudor.ocupacion }}</div>
        </div>
        <div class="col-2">
          <div>Calle: {{ detalleContrato.codeudor.direccion.calle }}</div>
        </div>
        <div class="col-2">
          <div>comuna: {{ detalleContrato.codeudor.direccion.ciudad }}</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-2">
          <div>Número: {{ detalleContrato.codeudor.direccion.numero }}</div>
        </div>
        <div class="col-2">
          <div>Ciudad: {{ detalleContrato.codeudor.direccion.ciudad }}</div>
        </div>
        <div class="col-2">
          <div>Región: {{ detalleContrato.codeudor.direccion.region }}</div>
        </div>
        <div class="col-2">
          <div>País: {{ detalleContrato.codeudor.direccion.pais }}</div>
        </div>
      </div>
    </div>
  </div>
  <!--  Tipo Reajuste-->
  <div v-if="detalleContrato.tipoReajuste" id="TipoReajuste" class="card mt-4">
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
</template>
<script>
import { getContrato } from '@/servicios/contratosService.js'

export default {
  name: 'DetallesContratos',
  props: {
    id: String
  },
  components: {},
  data() {
    return {
      detalleContrato: null
    }
  },
  methods: {
    fetchItems: async function () {
      try {
        const response = await getContrato(this.id)
        console.log(response)
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
