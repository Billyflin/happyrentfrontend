<template>
  <div>
    <div v-if="!editable">
      <ul>
        <li>Type: {{ datosPropiedad.type }}</li>
        <li>Amoblado: {{ datosPropiedad.amoblado }}</li>
        <li>Numero De Pisos: {{ datosPropiedad.numero }}</li>
        <li>Habitaciones: {{ datosPropiedad.habitaciones }}</li>
        <li>Baños: {{ datosPropiedad.banios }}</li>
        <li>Estacionamientos: {{ datosPropiedad.estacionamientos }}</li>
        <li>Piscina: {{ datosPropiedad.piscina }}</li>
        <li>Jardines: {{ datosPropiedad.jardines }}</li>
        <li>Patio: {{ datosPropiedad.patio }}</li>
        <li>Gastos Comunes: {{ datosPropiedad.gastosComunes }}</li>
      </ul>
      <button @click="$emit('toggle-edit')">Editar</button>
    </div>
    <div v-else>
      <ul>
        <li>Type: <input v-model="datosPropiedad.type" placeholder="Type" /></li>
        <li>Amoblado: <input v-model="datosPropiedad.amoblado" placeholder="Amoblado" /></li>
        <li>Numero De Pisos: <input v-model="datosPropiedad.numero" type="number" placeholder="Numero de Pisos" /></li>
        <li>Habitaciones: <input v-model="datosPropiedad.habitaciones" type="number" placeholder="Habitaciones" /></li>
        <li>Baños: <input v-model="datosPropiedad.banios" type="number" placeholder="Baños" /></li>
        <li>Estacionamientos: <input v-model="datosPropiedad.estacionamientos" type="number" placeholder="Estacionamientos" /></li>
        <li>Piscina: <input v-model="datosPropiedad.piscina" placeholder="Piscina" /></li>
        <li>Jardines: <input v-model="datosPropiedad.jardines" placeholder="Jardines" /></li>
        <li>Patio: <input v-model="datosPropiedad.patio" placeholder="Patio" /></li>
        <li>Gastos Comunes: <input v-model="datosPropiedad.gastosComunes" placeholder="Gastos Comunes" /></li>
      </ul>
      <button @click="$emit('update', datosPropiedad)">Guardar</button>
      <button @click="$emit('toggle-edit')">Cancelar</button>
      <button @click="$emit('delete')">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datosPropiedad: {
      type: Object,
      required: true,
    },
    editable: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

button {
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
