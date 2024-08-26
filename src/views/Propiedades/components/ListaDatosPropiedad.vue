<template>
  <div>
    <div v-if="!editable">
      <ul>
        <li>Type: {{ propiedad.type }}</li>
        <li>Amoblado: {{ propiedad.amoblado }}</li>
        <li>Numero De Pisos: {{ propiedad.numero }}</li>
        <li>Habitaciones: {{ propiedad.habitaciones }}</li>
        <li>Baños: {{ propiedad.banios }}</li>
        <li>Estacionamientos: {{ propiedad.estacionamientos }}</li>
        <li>Piscina: {{ propiedad.piscina }}</li>
        <li>Jardines: {{ propiedad.jardines }}</li>
        <li>Patio: {{ propiedad.patio }}</li>
        <li>Gastos Comunes: {{ propiedad.gastosComunes }}</li>
      </ul>
      <button @click="$emit('toggle-edit')">Editar</button>
    </div>
    <div v-else>
      <ul>
        <li>Type: <input v-model="propiedad.type" placeholder="Type" /></li>
        <li>Amoblado: <input v-model="propiedad.amoblado" placeholder="Amoblado" /></li>
        <li>
          Numero De Pisos:
          <input v-model="propiedad.numero" placeholder="Numero de Pisos" type="number" />
        </li>
        <li>
          Habitaciones:
          <input v-model="propiedad.habitaciones" placeholder="Habitaciones" type="number" />
        </li>
        <li>Baños: <input v-model="propiedad.banios" placeholder="Baños" type="number" /></li>
        <li>
          Estacionamientos:
          <input
            v-model="propiedad.estacionamientos"
            placeholder="Estacionamientos"
            type="number"
          />
        </li>
        <li>Piscina: <input v-model="propiedad.piscina" placeholder="Piscina" /></li>
        <li>Jardines: <input v-model="propiedad.jardines" placeholder="Jardines" /></li>
        <li>Patio: <input v-model="propiedad.patio" placeholder="Patio" /></li>
        <li>
          Gastos Comunes: <input v-model="propiedad.gastosComunes" placeholder="Gastos Comunes" />
        </li>
      </ul>
      <button @click="$emit('update', propiedad)">Guardar</button>
      <button @click="$emit('toggle-edit')">Cancelar</button>
      <button @click="$emit('delete')">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propiedad: {
      type: Object,
      required: true
    },
    editable: {
      type: Boolean,
      required: true
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
