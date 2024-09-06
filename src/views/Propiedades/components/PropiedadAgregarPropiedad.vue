<script>
import { defineComponent, watchEffect } from 'vue'
import MaterialChoices from '@/components/Material/MaterialChoices.vue'
import MaterialInput from '@/components/Material/MaterialInput.vue'
import LocalidadForm from '@/views/Shared/LocalidadForm.vue'

export default defineComponent({
  components: { LocalidadForm, MaterialInput, MaterialChoices },
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
        { value: 'terreno', label: 'Terreno' }
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
  setup(props, { emit }) {
    const validateInput = (e) => {
      if (e.target.value < 0) {
        e.target.value = 0
      }
    }

    watchEffect(() => {
      emit('update:propiedad', props.propiedad)
    })

    return { validateInput }
  }

})
</script>


<template>
  <div id="Agregar Propiedad">
      <div class="row">
        <div class="col flex-grow">

          <material-input
            id="rol"
            v-model="propiedad.rol"
            is-required
            label="Rol"
            placeholder="1231512"
            type="text"
            variant="static"
          />

        </div>
        <div class="col flex-grow">
          <material-choices id="tipo_propiedad"
                            v-model:value-choice="propiedad.type"
                            :options="opcionsTipoPropiedad"
                            :serach-enabled="false" label="Tipo Propiedad" name="TipoPropiedad" />

        </div>
      </div>


      <LocalidadForm v-model="propiedad.direccion" />


    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
