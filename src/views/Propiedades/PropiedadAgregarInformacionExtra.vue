<template>
  <p> Puedes agregar informacion adicional pero no es obligatoria </p>
  <div v-if="['casa', 'departamento', 'oficina', 'bodega', 'local'].includes(propiedad.type)" class="col-2">
    <material-checkbox
      id="amoblado"
      v-model="propiedad.amoblado"
      label="Amoblado"
    >
      ¿AMOBLADO?
    </material-checkbox>
  </div>
  <div v-if="propiedad.type === 'casa'" class="row">
    <div class="col-2 mt-3">
      <material-checkbox
        id="piscina"
        v-model="propiedad.piscina"
        label="Piscina"
      >
        ¿Piscina?
      </material-checkbox>
    </div>
    <div class="col-2 mt-3">
      <material-checkbox
        id="jardines"
        v-model="propiedad.jardines"
        label="Jardines"
      >
        ¿Jardines?
      </material-checkbox>
    </div>
    <div class="col-2 mt-3">
      <material-checkbox
        id="patio"
        v-model="propiedad.patio"
        label="Patio"
      >
        ¿Patio?
      </material-checkbox>
    </div>
    <div class="col-3 mt-3">
      <material-checkbox
        id="gastosComunes"
        v-model="propiedad.gastosComunes"
        label="gastos comunes"
      >
        ¿Gastos comunes?
      </material-checkbox>
    </div>
    <div class="col-3 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div v-if="!propiedad.contribuciones" class="col-2 mb-3 mt-3">
      <material-checkbox
        id="aseo"
        v-model="propiedad.aseo"
        label="aseo"
      >
        ¿ASEO?
      </material-checkbox>
    </div>

    <div class="col-2 mt-3">
      <material-input
        id="numPisos"
        v-model="propiedad.numeroDePisos"
        is-required
        label="Numero de pisos"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3 mt-3 ">
      <material-input
        id="numPiezas"
        v-model="propiedad.habitaciones"
        is-required
        label="Numero de habitaciones"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-2 mt-3">
      <material-input
        id="numBanos"
        v-model="propiedad.banios"
        is-required
        label="Numero de baños"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-2 mt-3">
      <material-input
        id="antiguedad"
        v-model="propiedad.antiguedad"
        is-required
        label="Antiguedad"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3 mt-3">
      <material-input
        id="numEstacionamientos"
        v-model="propiedad.estacionamientos"
        is-required
        label="Numero de estacionamientos"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3 mt-3">
      <material-input
        id="metrosCuadradosDeTerreno"
        v-model="propiedad.metrosCuadradosDeTerreno"
        is-required
        label="Metros cuadrados de terreno"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-4 mt-3">
      <material-input
        id="metrosCuadradosDeConstruccion"
        v-model="propiedad.metrosCuadradosDeConstruccion"
        is-required
        label="Metros cuadrados de construccion"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>

  </div>
  <div v-if="propiedad.type === 'terreno'" class="row">
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="gastosComunes"
        v-model="propiedad.gastosComunes"
        label="gastos comunes"
      >
        ¿Gastos comunes?
      </material-checkbox>
    </div>
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div class="col-2 mt-3">
      <material-checkbox
        id="subterraeno"
        v-model="propiedad.subterraneo"
        label="subterraneo"
      >
        ¿Subterraneo?
      </material-checkbox>
    </div>
    <div class="col-3" />

    <div class="col-3">
      <material-choices id="tipoTerreno"
                        v-model:value-choice="propiedad.tipoTerreno"
                        :options="terrenos"
                        :serach-enabled="false" label="Tipo de terreno" name="tipoTerreno" />
    </div>
    <div class="col-3">
      <material-input
        id="piso"
        v-model="propiedad.piso"
        is-required
        label="Piso"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-choices id="orientacion"
                        v-model:value-choice="propiedad.orientacion"
                        :options="orientaciones"
                        :serach-enabled="false" label="Orientación" name="orientacion" />
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="frente"
        v-model="propiedad.frente"
        is-required
        label="Frente"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3">
      <material-input
        id="fondo"
        v-model="propiedad.fondo"
        is-required
        label="Fondo"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3">
      <material-input
        id="topografia"
        v-model="propiedad.topografia"
        is-required
        label="Topografia"
        placeholder="Topografia"
        type="text"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="formaTerreno"
        v-model="propiedad.formaTerreno"
        is-required
        label="Forma de terreno"
        placeholder="Forma de terreno"
        type="text"
        variant="static"
      ></material-input>
    </div>
  </div>
  <div v-if="propiedad.type === 'departamento'" class="row">
    <div class="col-2 mt-3">
      <material-checkbox
        id="terraza"
        v-model="propiedad.terraza"
        label="Terraza"
      >
        ¿Terraza?
      </material-checkbox>
    </div>
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div v-if="!propiedad.contribuciones" class="col-2 mb-3 mt-3">
      <material-checkbox
        id="aseo"
        v-model="propiedad.aseo"
        label="aseo"
      >
        ¿ASEO?
      </material-checkbox>
    </div>
    <div class="col-3">
      <material-input
        id="numPisos"
        v-model="propiedad.piso"
        is-required
        label="N° de piso"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numBanios"
        v-model="propiedad.banios"
        is-required
        label="N° de baños"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numHabitaciones"
        v-model="propiedad.habitaciones"
        is-required
        label="N° habitaciones"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numEstacionamientos"
        v-model="propiedad.estacionamientos"
        is-required
        label="N° estacionamientos"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numBodegas"
        v-model="propiedad.bodegas"
        is-required
        label="N° de bodegas"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadrados"
        v-model="propiedad.metrosCuadradosUtiles"
        is-required
        label="Metros² útiles"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-6">
      <material-input
        id="descripcion"
        v-model="propiedad.descripcion"
        is-required
        label="Descripcion"
        placeholder="Descripcion"
        type="text"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-choices id="orientacion"
                        v-model:value-choice="propiedad.orientacion"
                        :options="orientaciones"
                        :serach-enabled="false" label="Orientación" name="orientacion" />
    </div>
  </div>
  <div v-if="propiedad.type === 'bodega'" class="row">
    <div class="col-2 mt-3">
      <material-checkbox
        id="subterraeno"
        v-model="propiedad.subterraneo"
        label="subterraneo"
      >
        ¿Subterraneo?
      </material-checkbox>
    </div>
    <div class="col-3 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div class="col-3">
      <material-choices id="uso" v-model:value-choice="propiedad.uso" :options="[
                { value: 'comercial', label: 'Comercial' , selected: true},
                { value: 'industrial', label: 'Industrial' }
                ]" label="Uso" name="uso">
      </material-choices>
    </div>
    <div class="col-3">
      <material-input
        id="numPisos"
        v-model="propiedad.numeroDePisos"
        is-required
        label="Numero de pisos"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3">
      <material-input
        id="numBodegas"
        v-model="propiedad.numero"
        is-required
        label="Numero de bodegas"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadrados"
        v-model="propiedad.metrosCuadradosUtiles"
        is-required
        label="Metros² útiles"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-6">
      <material-input
        id="descripcion"
        v-model="propiedad.descripcion"
        is-required
        label="Descripcion"
        placeholder="Descripción"
        type="text"
        variant="static"
      ></material-input>
    </div>
  </div>
  <div v-if="propiedad.type === 'oficina'" class="row">
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="gastosComunes"
        v-model="propiedad.gastosComunes"
        label="gastos comunes"
      >
        ¿Gastos comunes?
      </material-checkbox>
    </div>
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div class="col-2 mt-3">
      <material-checkbox
        id="subterraeno"
        v-model="propiedad.subterraneo"
        label="subterraneo"
      >
        ¿Subterraneo?
      </material-checkbox>
    </div>
    <div class="col-3" />
    <div class="col-3">
      <material-input
        id="numOficinas"
        v-model="propiedad.numeroDeOficinas"
        is-required
        label="Numero de oficinas"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numPisos"
        v-model="propiedad.piso"
        is-required
        label="Numero de piso"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-choices id="orientacion"
                        v-model:value-choice="propiedad.orientacion"
                        :options="orientaciones"
                        :serach-enabled="false" label="Orientación" name="orientacion" />
    </div>
    <div class="col-3">
      <material-input
        id="numBanios"
        v-model="propiedad.banios"
        is-required
        label="N° de baños"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>

    </div>
    <div class="col-3">
      <material-input
        id="numCocinas"
        v-model="propiedad.cocinas"
        is-required
        label="N° de cocinas"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numComedores"
        v-model="propiedad.numeroDeComedores"
        is-required
        label="N° de comedores"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numEstacionamientos"
        v-model="propiedad.estacionamientos"
        is-required
        label="N° de estacionamientos"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadrados"
        v-model="propiedad.metrosCuadradosUtiles"
        is-required
        label="Metros² útiles"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-5">
      <material-input
        id="descripcion"
        v-model="propiedad.descripcion"
        is-required
        label="Descripcion"
        placeholder="Descripcion"
        type="text"
        variant="static"
      ></material-input>
    </div>
  </div>
  <div v-if="propiedad.type === 'local'" class="row">
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="gastosComunes"
        v-model="propiedad.gastosComunes"
        label="gastos comunes"
      >
        ¿Gastos comunes?
      </material-checkbox>
    </div>
    <div class="col-3 mb-2 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div class="col-2 mt-3">
      <material-checkbox
        id="subterraeno"
        v-model="propiedad.subterraneo"
        label="subterraneo"
      >
        ¿Subterraneo?
      </material-checkbox>
    </div>
    <div class="col-3">
      <material-input
        id="numPisos"
        v-model="propiedad.piso"
        is-required
        label="Numero de pisos"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numLocales"
        v-model="propiedad.numero"
        is-required
        label="Numero de locales"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadrados"
        v-model="propiedad.metrosCuadradosUtiles"
        is-required
        label="Metros² útiles"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-6">
      <material-input
        id="descripcion"
        v-model="propiedad.descripcion"
        is-required
        label="Descripcion"
        placeholder="Descripcion"
        type="text"
        variant="static"
      ></material-input>
    </div>
  </div>
  <div v-if="propiedad.type === 'estacionamiento'" class="row">
    <div class="col-3 mt-3">
      <material-checkbox
        id="gastosComunes"
        v-model="propiedad.gastosComunes"
        label="gastos comunes"
      >
        ¿Gastos comunes?
      </material-checkbox>
    </div>
    <div class="col-3 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div class="col-2">
      <material-input
        id="numPisos"
        v-model="propiedad.pisos"
        is-required
        label="Numero de pisos"
        placeholder="5"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-2">
      <material-input
        id="numPisos"
        v-model="propiedad.piso"
        is-required
        label="Numero de piso"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="numEstacionamientos"
        v-model="propiedad.numero"
        is-required
        label="N° estacionamientos"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadrados"
        v-model="propiedad.metrosCuadradosUtiles"
        is-required
        label="Metros² útiles"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-6">
      <material-input
        id="descripcion"
        v-model="propiedad.descripcion"
        is-required
        label="Descripcion"
        placeholder="Descripcion"
        type="text"
        variant="static"
      ></material-input>
    </div>
  </div>
  <div v-if="propiedad.type === 'galpon'" class="row">
    <div class="col-3 mt-3">
      <material-checkbox
        id="contribuciones"
        v-model="propiedad.contribuciones"
        label="Contribuciones"
      >
        ¿Contribuciones?
      </material-checkbox>
    </div>
    <div class="col-3 mt-3">
      <material-checkbox
        id="subterraneo"
        v-model="propiedad.subterraneo"
        label="subterraneo"
      >
        ¿Subterraneo?
      </material-checkbox>
    </div>
    <div class="col-3 mt-3">
      <material-checkbox
        id="gastosComunes"
        v-model="propiedad.gastosComunes"
        label="gastos comunes"
      >
        ¿Gastos comunes?
      </material-checkbox>
    </div>
    <div class="col-3" />
    <div class="col-3">
      <material-input
        id="numPisos"
        v-model="propiedad.piso"
        is-required
        label="Numero de piso"
        placeholder="1"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-choices id="tipoTerreno"
                        v-model:value-choice="propiedad.tipoTerreno"
                        :options="terrenos"
                        :serach-enabled="false" label="Tipo de terreno" name="tipoTerreno" />
    </div>
    <div class="col-3">
      <material-choices id="orientacion"
                        v-model:value-choice="propiedad.orientacion"
                        :options="orientaciones"
                        :serach-enabled="false" label="Orientación" name="orientacion" />
    </div>
    <div class="col-3">
      <material-input
        id="metrosCuadradosTotales"
        v-model="propiedad.metrosCuadradosTotales"
        is-required
        label="Metros² totales"
        placeholder="10"
        type="number"
        variant="static"
      ></material-input>
    </div>
    <div class="col-3">
      <material-input
        id="frente"
        v-model="propiedad.frente"
        is-required
        label="Frente"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
    <div class="col-3">
      <material-input
        id="fondo"
        v-model="propiedad.fondo"
        is-required
        label="Fondo"
        placeholder="1"
        type="number"
        variant="static"
        @input="validateInput"
      />
    </div>
  </div>
</template>
<script>
import MaterialInput from '@/components/Material/MaterialInput.vue'
import MaterialCheckbox from '@/components/Material/MaterialCheckbox.vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'

export default {
  name: 'propiedad-agregar-informacion-extra',
  components: { MaterialChoices, MaterialCheckbox, MaterialInput },
  props: {
    propiedad: {}
  },
  emits: ['update:propiedad'],
  data() {
    return {
      opcionsTipoPropiedad: [
        { value: 'casa', label: 'Casa' },
        { value: 'departamento', label: 'Departamento' },
        { value: 'oficina', label: 'Oficina' },
        { value: 'bodega', label: 'Bodega' },
        { value: 'local', label: 'Local' },
        { value: 'terreno', label: 'Terreno' },
        { value: 'estacionamiento', label: 'Estacionamiento' },
        { value: 'galpon', label: 'Galpon' }
      ],
      terrenos: [
        { value: 'urbano', label: 'Urbano' },
        { value: 'rural', label: 'Rural' }
      ],
      orientaciones: [
        { value: 'norte', label: 'Norte' },
        { value: 'sur', label: 'Sur' },
        { value: 'este', label: 'Este' },
        { value: 'oeste', label: 'Oeste' }
      ]
    }
  },
}
</script>