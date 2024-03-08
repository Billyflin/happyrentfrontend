<template>
  <div>
    <select ref="choices-select"></select>
  </div>
</template>

<script>
import axios from 'axios';
import Choices from 'choices.js';

export default {
  props: {
    ruta: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number],
      required: false,
      default: ""
    },
    nombre: {
      type: String,
      required: true
    },
    default: {
      type:  [String, Number, Object],
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      choices: null,
      data: [],
      selectedChoice: null
    };
  },
  mounted() {
    this.getData();
    this.choices = new Choices(this.$refs["choices-select"], {
      allowHTML: true,
      choices: this.data.map(item => ({value: item, label: item[this.nombre]})),
    });
    console.log('Seleccionando: ', this.choices.getValue());

  },
  watch: {
    id() {
      this.getData();
    }

  },
  methods: {
    getData() {
      console.log('Obteniendo datos de: ', `${import.meta.env.VITE_SERVER_URL}:8080${this.ruta}${this.id}`);
      axios.get(`${import.meta.env.VITE_SERVER_URL}:8080${this.ruta}${this.id}`)
          .then(response => {
            console.log('Datos obtenidos: ', response.data);
            this.data = response.data;
            this.initializeChoices();
          })
          .catch(error => {
            console.error(error);
          });
    },
    initializeChoices() {
      if (this.choices) {
        this.choices.destroy();
      }
      this.choices = new Choices(this.$refs["choices-select"], {
        allowHTML: true,
        choices: this.data.map(item => ({value: item, label: item[this.nombre]})),
      });
      this.choices.setChoiceByValue(this.data[0]);
      this.choices.passedElement.element.addEventListener('change', event => {
        this.selectedChoice = event.detail.value;
        this.$emit('choice-changed', this.selectedChoice);
      });
    }
  }
}
</script>
