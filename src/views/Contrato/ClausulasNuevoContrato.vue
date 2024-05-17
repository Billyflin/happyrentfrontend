<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { useAppStore, useAuthStore } from '@/store/index.js'
import NavPill from '@/views/components/NavPill/NavPill.vue'
import SideNav from '@/views/Contrato/components/SideNav.vue'
import MaterialChoices from '@/components/MaterialChoices.vue'
import MaterialSwitch from '@/components/MaterialSwitch.vue'
import MaterialInput from '@/components/MaterialInput.vue'
import MaterialBadge from '@/components/MaterialBadge.vue'
import MaterialTextarea from '@/components/MaterialTextarea.vue'
import MaterialCheckbox from '@/components/MaterialCheckbox.vue'
import MaterialButton from '@/components/MaterialButton.vue'

export default {
  name: 'ClausulasNuevoContrato',
  components: {
    MaterialButton,
    MaterialCheckbox,
    MaterialTextarea,
    MaterialBadge,
    MaterialInput,
    MaterialSwitch,
    MaterialChoices,
    SideNav,
    NavPill
  },
  data() {
    return {
      valorRenta: 0,
      valorRentaPalabras: '',
      reajusteContrato: '',
      fechaInicioContrato: Date.now(),
      duracionContrato: 6,
      periodoProrroga: 12,
      optionsClausula1: [
        { value: 'habitacional', label: 'Habitacional' },
        { value: 'comercial', label: 'Comercial' },
        { value: 'oficina', label: 'Oficina' }
      ],
      optionsClausula4: [
        { value: 'gastosComunes', label: 'Gastos comunes' },
        { value: 'luz', label: 'Luz' },
        { value: 'agua', label: 'Agua' },
        { value: 'gas', label: 'Gas' },
        { value: 'internet', label: 'Internet' },
        { value: 'telefonia', label: 'Telefonía' },
        { value: 'cable', label: 'Cable' }],
      optionsClausula5periodos: [
        {}
      ],
      clausula4: false,
      clausulas4: [],
      clausulas1: [],


      comparecenciaEdit: false,
      clausula1edit: false,
      clausula2edit: false,
      clausula3edit: false,
      clausula4edit: false,
      clausula5edit: false,
      clausula6edit: false,
      clausula7edit: false,
      clausula8edit: false,
      clausula9edit: false,
      clausula10edit: false,
      clausula11edit: false,
      clausula12edit: false,
      clausula13edit: false,
      clausula14edit: false,
      clausula15edit: false,
      clausula16edit: false,
      clausula17edit: false,
      clausula18edit: false

    }
  },
  watch: {
    clausulas1: {
      handler: function(val) {
        console.log(val)
        console.log(this.clausulas1)
        console.log(this.$refs.Clausula1.innerText)
      },
      deep: true
    }
  },
  setup() {
    const store = useAppStore()
    const store2 = useAuthStore()
    const Comparecencia = ref(null)
    const Clausula1 = ref(null)
    const Clausula2 = ref(null)
    const Clausula3 = ref(null)
    const Clausula4 = ref(null)
    const Clausula5 = ref(null)
    const Clausula6 = ref(null)
    const Clausula7 = ref(null)
    const Clausula8 = ref(null)
    const Clausula9 = ref(null)
    const Clausula10 = ref(null)
    const Clausula11 = ref(null)
    const Clausula12 = ref(null)
    const Clausula13 = ref(null)
    const Clausula14 = ref(null)
    const Clausula15 = ref(null)
    const Clausula16 = ref(null)
    const Clausula17 = ref(null)
    const Clausula18 = ref(null)


    const Clausulas4 = ref(null)
    const prorrogaAutomatica = ref(false)
    const visitasPermitidas = ref(true)
    const numeroVisitas = ref(0)

    const { toggleEveryDisplay } = store
    onMounted(() => {
      toggleEveryDisplay()
    })

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es-CL', options)
    }

    onUnmounted(() => {
      toggleEveryDisplay()
    })
    return {
      store,
      store2,
      formatDate,
      Clausula1,
      Clausula2,
      Clausula3,
      Clausula4,
      Clausula5,
      Clausula6,
      Clausula7,
      Clausula8,
      Clausula9,
      Clausula10,
      Clausula11,
      Clausula12,
      Clausula13,
      Clausula14,
      Clausula15,
      Clausula16,
      Clausula17,
      Clausula18,
      Clausulas4,
      Comparecencia,
      visitasPermitidas,
      prorrogaAutomatica,
      numeroVisitas


    }
  }, methods: {
    capitalize(text) {
      if (typeof text !== 'string') return ''
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
    enviarContrato() {
      console.log(this.Comparecencia.innerText)
      console.log(this.Clausula1.innerText)
      console.log(this.Clausula2.innerText)
      console.log(this.Clausula3.innerText)
      console.log(this.Clausula4.innerText)
      console.log(this.Clausula5.innerText)
      console.log(this.Clausula6.innerText)
      console.log(this.Clausula7.innerText)
      console.log(this.Clausula8.innerText)
      console.log(this.Clausula9.innerText)
      console.log(this.Clausula10.innerText)
      console.log(this.Clausula11.innerText)
      console.log(this.Clausula12.innerText)
      console.log(this.Clausula13.innerText)
      console.log(this.Clausula14.innerText)
      console.log(this.Clausula15.innerText)
      console.log(this.Clausula16.innerText)
      console.log(this.Clausula17.innerText)
      console.log(this.Clausula18.innerText)
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-4 mb-4">
      <div class="col-lg-2 mt-4 ">
        <side-nav />
      </div>

      <div class="col-lg-10 mt-lg-0 mt-4">
        <div class=" card">

          <div class="row">
            <div class="card-body col-lg-10 mt-lg-0 mt-4 text-center">
              <!--              titulo-->
              <div class="row align-items-center">
                <div class="col-9 mb-3">
                  <h1 class="text-center">Clausulas del contrato</h1>
                  <material-badge class="badge badge-danger"> Esta es solo una vista preliminar.</material-badge>
                  <p class="text-center">El documento final tendra una apariencia levemente diferente pero el contenido
                    de las clausulas será exactamente el mismo.</p>
                </div>
              </div>

              <!--             Comparecencia-->
              <div class="row align-items-center">
                <div class="col-9">
                  <div class="row">
                    <div class="col-2 " />
                    <h5 id="Comparecencia" class="col-8 card-title text-center">Comparecencia:</h5>
                    <div class="col-2 ">
                      <material-checkbox id="editComparecencia" v-model="comparecenciaEdit">Editar</material-checkbox>
                    </div>
                  </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p class="text-justify" :contenteditable="comparecenciaEdit" ref="Comparecencia">
                      En Santiago, a {{ formatDate(Date.now()) }}, comparecen: por una parte,
                      <strong> PROPIETARIA </strong>
                      <template v-if="store2.propiedad.propietario.type === 'persona'">
                        {{ capitalize(store2.propiedad.propietario.tratamiento) }}
                        {{ capitalize(store2.propiedad.propietario.nombre) }}
                        {{ capitalize(store2.propiedad.propietario.apellidoPaterno) }}
                        {{ capitalize(store2.propiedad.propietario.apellidoMaterno) }},
                        cédula nacional de identidad n° {{ store2.propiedad.propietario.rut }},
                        nacionalidad {{ capitalize(store2.propiedad.propietario.nacionalidad) }},
                        {{ capitalize(store2.propiedad.propietario.estadoCivil) }},
                        <template v-if="store2.propiedad.propietario.tratamiento==='Sr.'">domiciliado</template>
                        <template v-else>domiciliada</template>
                        en
                        {{ store2.propiedad.propietario.direccion.calle }},
                        {{ store2.propiedad.propietario.direccion.numero }},
                        comuna de {{ store2.propiedad.propietario.direccion.ciudad }},
                        {{ store2.propiedad.propietario.direccion.region }},
                        celular {{ store2.propiedad.propietario.telefono }},
                        correo: {{ store2.propiedad.propietario.email }}
                      </template>
                      <template v-else>
                        empresa <strong>{{ capitalize(store2.propiedad.propietario.nombre) }} </strong>,
                        rut {{ store2.propiedad.propietario.rut }},
                        representante {{ capitalize(store2.propiedad.propietario.representante.tratamiento) }}
                        {{ capitalize(store2.propiedad.propietario.representante.nombre) }}
                        {{ capitalize(store2.propiedad.propietario.representante.apellidoPaterno) }}
                        {{ capitalize(store2.propiedad.propietario.representante.apellidoMaterno) }},
                        cédula nacional de identidad n° {{ store2.propiedad.propietario.representante.rut }},
                        <template v-if="store2.propiedad.propietario.representante.tratamiento==='Sr.'">domiciliado
                        </template>
                        <template v-else>domiciliada</template>
                        en
                        {{ store2.propiedad.propietario.representante.direccion.calle }},
                        {{ store2.propiedad.propietario.representante.direccion.numero }},
                        correo: {{ store2.propiedad.propietario.representante.email }}, celular
                        {{ store2.propiedad.propietario.representante.telefono }}
                      </template>
                      , en adelante la parte
                      “propietaria” y <strong>ARRENDATARIO </strong>
                      <template v-if="store2.arrendatario.type === 'persona'">
                        {{ capitalize(store2.arrendatario.tratamiento) }}
                        {{ capitalize(store2.arrendatario.nombre) }}
                        {{ capitalize(store2.arrendatario.apellidoPaterno) }}
                        {{ capitalize(store2.arrendatario.apellidoMaterno) }} cédula de identidad
                        n° {{ store2.arrendatario.rut }},
                        nacionalidad {{ capitalize(store2.arrendatario.nacionalidad) }},
                        {{ capitalize(store2.arrendatario.estadoCivil) }},
                        <template v-if="store2.arrendatario.tratamiento==='Sr.'">domiciliado</template>
                        <template v-else>domiciliada</template>
                        en {{ store2.arrendatario.direccion.calle }} {{ store2.arrendatario.direccion.numero }},
                        comuna de {{ store2.arrendatario.direccion.ciudad }},
                        {{ store2.arrendatario.direccion.region }}, celular {{ store2.arrendatario.telefono }},
                        email: {{ store2.arrendatario.email }},

                      </template>
                      <template v-else> a nombre de la empresa
                        <strong>{{ capitalize(store2.arrendatario.nombre) }}</strong>
                        {{ store2.arrendatario.razonSocial }},
                        <strong>representante</strong> {{ capitalize(store2.arrendatario.representante.tratamiento) }}
                        {{ capitalize(store2.arrendatario.representante.nombre) }}
                        {{ capitalize(store2.arrendatario.representante.apellidoPaterno) }}
                        {{ capitalize(store2.arrendatario.representante.apellidoMaterno) }},
                        cédula nacional de identidad N° {{ store2.arrendatario.representante.rut }},
                        {{ capitalize(store2.arrendatario.representante.nacionalidad) }},
                        {{ capitalize(store2.arrendatario.representante.estadoCivil) }},
                        domiciliado
                        en
                        {{ store2.arrendatario.representante.direccion.calle }}
                        {{ store2.arrendatario.representante.direccion.numero }} comuna
                        {{ store2.arrendatario.representante.direccion.ciudad }},
                        {{ store2.arrendatario.representante.direccion.region }}, celular
                        {{ store2.arrendatario.representante.telefono }}, email:
                        {{ store2.arrendatario.representante.email }},
                      </template>
                      en adelante la parte “arrendataria”
                      <template v-if="store2.codeudor">
                        y don <strong>CODEUDOR</strong> {{ capitalize(store2.codeudor.tratamiento) }}
                        {{ capitalize(store2.codeudor.nombre) }}
                        {{ capitalize(store2.codeudor.apellidoPaterno) }} {{ capitalize(store2.codeudor.apellidoMaterno)
                        }}, {{ capitalize(store2.codeudor.nacionalidad) }},
                        {{ capitalize(store2.codeudor.estadoCivil) }}, cédula nacional de identidad N°
                        {{ store2.codeudor.rut }},
                        email: {{ store2.codeudor.email }}, celular {{ store2.codeudor.telefono }} , con domicilio en
                        {{ store2.codeudor.direccion.calle }} {{ store2.codeudor.direccion.numero }},
                        comuna {{ store2.codeudor.direccion.ciudad }}, {{ store2.codeudor.direccion.region }}, en su
                        calidad de Aval y Codeudor
                        Solidario de la parte "arrendataria",
                      </template>
                      todos los comparecientes mayores de edad y libres disponedores de sus bienes, quienes han
                      convenido el siguiente contrato de arrendamiento:
                    </p>
                  </div>
                </div>
              </div>


              <!--              Clausula 1-->
              <div class="row align-items-center"> <!-- Añade la clase 'align-items-center' -->
                <div class="col-9">
                  <div class="row">
                    <div class="col-2 " />
                    <h5 id="Clausula1" class="col-8 justify-content-center card-title text-center">Cláusula 1:
                      PROPIEDAD</h5>
                    <div class="col-2 ">
                      <material-checkbox id="editClausula1" v-model="clausula1edit">Editar</material-checkbox>
                    </div>
                  </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p class="text-justify" :contenteditable="clausula1edit" ref="Clausula1">
                      La arrendadora,
                      <template v-if="store2.propiedad.propietario.type === 'persona'">
                        {{ capitalize(store2.propiedad.propietario.tratamiento) }}
                        {{ capitalize(store2.propiedad.propietario.nombre) }}
                        {{ capitalize(store2.propiedad.propietario.apellidoPaterno) }}
                        {{ capitalize(store2.propiedad.propietario.apellidoMaterno) }},
                      </template>
                      <template v-else>empresa
                        <strong> {{ capitalize(store2.propiedad.propietario.nombre) }} </strong>,
                        representante {{ capitalize(store2.propiedad.propietario.representante.tratamiento) }}
                        {{ capitalize(store2.propiedad.propietario.representante.nombre) }}
                        {{ capitalize(store2.propiedad.propietario.representante.apellidoPaterno) }}
                        {{ capitalize(store2.propiedad.propietario.representante.apellidoMaterno) }},
                      </template>
                      declara ser la única propietaria de la propiedad ubicada en
                      {{ store2.propiedad.direccion.calle }} {{ store2.propiedad.direccion.numero }},
                      comuna de {{ store2.propiedad.direccion.ciudad }}, {{ store2.propiedad.direccion.region }},
                      {{ store2.propiedad.direccion.pais }}.

                      Esta propiedad se da en arrendamiento
                      a la arrendataria, quien acepta su uso exclusivo para fines
                      <template v-if="clausulas1.length === 0">de habitación</template>
                      <template v-else>
                        <template v-for="(item, index) in clausulas1">
                          <template v-if="item.value === 'habitacional'">habitacionales</template>
                          <template v-else-if="item.value === 'oficina'">de oficina</template>
                          <template v-else-if="item.value === 'comercial'">comerciales</template>
                          <template v-if="index !== clausulas1.length - 1">,</template>
                        </template>
                      </template>
                      .
                    </p>
                  </div>
                </div>
                <div class="col-3">
                  <material-choices id="clausula1"
                                    :options="optionsClausula1"
                                    name="ChoiseClausula1"
                                    v-model:model-value="clausulas1"
                                    is-multiple
                                    remove-item-button
                                    label="Selecciona el uso de la propiedad"
                  />
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
                  <div class="row">
                    <div class="col-2" />
                    <h5 id="Clausula2" class="col-8 card-title text-center">Cláusula 2: RENTA</h5>
                    <div class="col-2">
                      <material-checkbox id="editClausula2" v-model="clausula2edit">Editar</material-checkbox>
                    </div>
                  </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula2edit" class="text-justify" ref="Clausula2">
                      La renta mensual de arrendamiento por los inmuebles individualizados en la cláusula primera
                      precedente es y será la suma de <strong>CONTRATO</strong> $
                      <!--                      {{ store2.contrato.valorRenta }}.- -->
                      mensuales
                      <!--                      ({{ store2.contrato.valorRentaPalabras }}). -->
                      La renta se pagará por mes anticipado, dentro de los
                      primeros cinco días hábiles de cada mes, depositándola a nombre de <strong>PROPIETARIA</strong>
                      <!--                      {{ store2.propiedad.propietario.datosBanca }} en {{ store2.propiedad.propietario.datosBanca.cuenta }}, cuenta-->
                      <!--                      {{ store2.contrato.tipoCuentaBanco }} Nº-->
                      <!--                      {{ store2.contrato.numeroCuentaBanco }},-->
                      RUT:{{ store2.propiedad.propietario.rut }} y deberá ser
                      informada al correo electrónico:
                      {{ store2.propiedad.propietario.email }}. Será suficiente para acreditar el pago de las rentas
                      antes señaladas la exhibición de los comprobantes de depósito o de transferencia electrónica de
                      fondos hecha a la cuenta corriente antes singularizada.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
                  <div class="row">
                    <div class="col-2" />
                    <h5 id="Clausula3" class="col-8 card-title text-center">Clausula 3 REAJUSTE:</h5>
                    <div class="col-2">
                      <material-checkbox id="editClausula3" v-model="clausula3edit">Editar</material-checkbox>
                    </div>
                  </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula3edit" class="text-justify" ref="Clausula3">
                      La renta se reajustará [{reajusteContrato}] en el mismo porcentaje que haya
                      variado el IPC (índice de precios del consumidor). En caso de IPC negativo se mantendrá
                      la renta del período inmediatamente anterior con el mínimo de [{valorRenta}].-
                      ([{valorRentaPalabras}]).
                    </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">

                  <div class="row">
                    <div class="col-2"></div>
                    <h5 id="Clausula4" class=" col-8 card-title text-center">Clausula 4 OTROS PAGOS:</h5>
                    <div class="col-2">
                      <material-checkbox id="editClausula4" v-model="clausula4edit">Editar</material-checkbox>
                    </div>
                  </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula4edit" class="text-justify" ref="Clausula4">
                      <template v-if="clausula4">
                        La arrendataria asumirá la responsabilidad de pagar puntualmente y a la entidad correspondiente
                        los siguientes servicios y gastos asociados al inmueble:
                        <template v-for="(item, index) in Clausulas4">
                          {{ item.label.toLowerCase() }}
                          <template v-if="index !== Clausulas4.length - 1">,</template>
                        </template>
                        .
                        Los comprobantes de pago deben ser enviados al siguiente correo electrónico:
                        <template v-if="store2.propiedad.propietario.type=== 'persona'">
                          {{ store2.propiedad.propietario.email }}.
                        </template>
                        <template v-else>
                          {{ store2.propiedad.propietario.representante.email }}.
                        </template>
                        En caso de un atraso de un mes en cualquiera de estos pagos, la arrendadora tendrá el derecho de
                        solicitar a la compañía de servicios correspondiente la suspensión del servicio en cuestión.
                      </template>
                      <template v-else>
                        En este caso, el propietario se hará cargo de todos los gastos comunes y otros pagos
                        relacionados con el inmueble. Esto incluye, pero no se limita a, los servicios de cable, agua,
                        gas, internet, luz y telefonía. El propietario se compromete a mantener estos servicios en
                        funcionamiento y a asumir cualquier costo asociado a ellos.
                      </template>
                    </p>

                  </div>
                </div>
                <div class="col-3 mt-3">
                  <material-switch id="Clausula4" name="Clausula4" label="" v-model:checked="clausula4">¿Desea que el
                    arrendatario pague los gastos comunes?
                  </material-switch>
                  <material-choices v-if="clausula4" id="Clausulas4" label="¿Que debe pagar el arrendatario?"
                                    :options="optionsClausula4" name="Clausulas4" is-multiple remove-item-button
                                    v-model="Clausulas4"></material-choices>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula5" class="col-8 card-title text-center">Clausula 5 PLAZO:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula5" v-model="clausula5edit">Editar</material-checkbox>
                </div>
              </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula5edit" class="text-justify" ref="Clausula5">
                      El presente contrato comenzará a regir a partir de {{ formatDate(fechaInicioContrato) }}, y tendrá
                      una duración de {{ duracionContrato }} meses,
                      <template v-if="prorrogaAutomatica">
                        que se prorrogará automática y sucesivamente por períodos de <strong>

                        {{ periodoProrroga }} meses cada uno,
                      </strong>
                      </template>
                      salvo que cualquiera de las partes diere a la otra aviso de su intención de no perseverar en el
                      contrato, lo que deberá hacer por correo electrónico a {{ store2.propiedad.propietario.email }} o
                      delegando la notificacion al indicar el termino del contrato mediante la aplicacion web <strong>Happ
                      Rent</strong>, con a lo menos 60 días de anticipación al vencimiento del plazo original o de
                      cualquiera de sus prórrogas
                      <template v-if="store2.codeudor">
                        con copia al aval y codeudora solidaria y al corredor de propiedades que intervino en esta
                        operación de arriendo.
                      </template>
                      <template v-else>
                        .
                      </template>

                      En el evento de que la arrendataria no restituyere la propiedad en la fecha de término de la
                      vigencia del plazo original o de cualquiera de sus prórrogas,
                      continuará obligada a pagar mensualmente la suma correspondiente a la renta convenida hasta que
                      efectúe la restitución del inmueble (Art.6º Ley 18.101),
                      sin perjuicio de que deberá pagar, además, mensualmente y durante todo el período de mora, a
                      título de multa,
                      una cantidad equivalente al 50% de la referida suma,
                      sin perjuicio de los derechos del arrendador para demandar la restitución del inmueble ante la
                      justicia ordinaria.
                    </p >
                  </div>
                </div>
                <div class="col-3 mt-3">
                  <div class="mt-0">

                    <material-input type="date" name="fecha" variant="static" size="sm" id="fechaInicioContrato"
                                    label="Fecha de inicio del contrato" v-model="fechaInicioContrato"></material-input>
                  </div>
                  <div class="mt-3">
                    <material-input id="duracionContrato" variant="static" size="sm"
                                    label="Duración del contrato (en meses)"
                                    v-model="duracionContrato"></material-input>
                  </div>
                  <div class="mt-3">
                    <material-switch id="prorrogaAutomatica" label="" v-model="prorrogaAutomatica" name="clausula5">¿Se
                      prorrogará automáticamente el contrato?
                    </material-switch>
                  </div>
                  <div class="mt-3">
                    <material-input class="mt-3" v-if="prorrogaAutomatica" variant="static" size="sm" type="number"
                                    id="periodoProrroga" label="Período de prórroga (en meses)"
                                    v-model="periodoProrroga"></material-input>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
                  <div class="row">
                    <div class="col-2"/>
                  <h5 id="Clausula6" class="col-8 card-title text-center">Clausula 6 MULTA EN CASO DE MORA:</h5>
                  <div class="col-2">
                    <material-checkbox id="editClausula6" v-model="clausula6edit">Editar</material-checkbox>
                  </div>
                  </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula6edit" class="text-justify" ref="Clausula6">
                      En caso de no pago oportuno de la renta de arrendamiento, la suma a pagar por los arrendadores
                      devengará, a título de multa en favor del arrendador, la cantidad que resulte al aplicar la
                      tasa
                      máxima convencional anual para operaciones de crédito de dinero, a los días de atraso en el
                      pago
                      de la renta pactada. Dicha tasa corresponde al interés corriente, aumentado en un 50%.
                      Si como consecuencia del retraso, se le encargare a un abogado la restitución de la propiedad
                      y el
                      cobro de las rentas adeudadas, el arrendatario deberá pagar además el honorario de estos
                      servicios, ascendente al 10% (diez por ciento) de la suma de los precios de los arriendos
                      morosos.
                      Lo anterior es sin perjuicio de la cláusula 8 de este contrato.
                    </p>
                  </div>
                </div>
              </div>


              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula7" class="col-8 card-title text-center">Clausula 7 VISITAS AL INMUEBLE:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula7" v-model="clausula7edit">Editar</material-checkbox>
                </div>
              </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula7edit" class="text-justify" ref="Clausula7">
                      <template v-if="visitasPermitidas">
                        La arrendataria permitirá la visita al inmueble por parte del arrendador o su representante, con
                        el fin de verificar el estado y uso del mismo. Estas visitas se realizarán en horarios
                        razonables y previo aviso, respetando siempre la privacidad y tranquilidad de la arrendataria.
                        El arrendador podrá visitar el inmueble hasta {{ numeroVisitas }} veces al mes.
                      </template>
                      <template v-else>
                        No se permitirán visitas al inmueble por parte del arrendador o su representante, salvo en casos
                        de emergencia o reparaciones necesarias.
                      </template>
                    </p>
                  </div>
                </div>
                <div class="col-3 mt-3">
                  <material-switch id="visitasPermitidas"
                                   v-model="visitasPermitidas" name="uwu ">¿El propietario desea visitar el inmueble?
                  </material-switch>
                  <material-input v-if="visitasPermitidas" id="numeroVisitas" type="number"
                                  label="Número de visitas al mes" size="sm" variant="static"
                                  v-model="numeroVisitas"></material-input>
                  <!--                    <material-switch v-if="visitasPermitidas" id="visitasAceptadas" label="¿El arrendatario acepta las visitas?" v-model="visitasAceptadas"></material-switch>-->
                </div>
              </div>


              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula8" class="col-8 card-title text-center">Clausula 8 TERMINO ANTICIPADO:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula8" v-model="clausula8edit">Editar</material-checkbox>
                </div>
              </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula8edit" class="text-justify" ref="Clausula8">
                      Queda prohibido a la arrendataria y su infracción dará derecho a la arrendadora para demandar
                      el
                      término ipso-facto del presente contrato, notificando a la arrendataria, al aval y codeudor
                      solidario:
                      <br>a) Pagar la renta de arrendamiento fuera del plazo estipulado en este contrato, ello sin
                      perjuicio de lo dispuesto en el Art. 1.945 del Código Civil.
                      <br>b) Si la arrendataria destina la propiedad a cualquier otro fin que no sea el indicado en
                      este
                      contrato.
                      <br>c) Subarrendar el inmueble o ceder en todo o parte del contrato de arrendamiento a
                      cualquier
                      persona. La infracción de esta prohibición hará a la arrendataria responsable de todos los
                      perjuicios que de ello puedan derivarse para la arrendadora.
                      <br>d) Hacer mejoras o variaciones en lo estructural sobre la propiedad arrendada sin el
                      consentimiento previo de la arrendataria.
                      <br>e) Causar molestias a los vecinos, materiales explosivos, inflamables, ilegales o de mal
                      olor
                      en la propiedad arrendada.
                      <br>f) No respetar el reglamento de copropiedad del edificio, el que se entrega en copia junto
                      con
                      el presente contrato.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula9" class="col-8 card-title text-center">Clausula 9 MEJORAS:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula9" v-model="clausula9edit">Editar</material-checkbox>
                </div>
              </div>
                  <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula9edit" class="text-justify" ref="Clausula9">
                      La arrendadora no tendrá obligación de hacer mejoras en el inmueble. Las mejoras de carácter
                      estructural que pueda efectuar la arrendataria, deberán contar con la debida autorización
                      otorgada
                      por la arrendadora, y quedarán en beneficio de la propiedad desde el momento mismo en que sean
                      ejecutadas, sin que la arrendadora deba pagar de manera alguna por ellas, cualquiera sea su
                      carácter, naturaleza o monto, sin perjuicio de poder convenirse otra norma por escrito.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula10" class="col-8 card-title text-center">Clausula 10 MANTENCION DEL INMUEBLE:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula10" v-model="clausula10edit">Editar</material-checkbox>
                </div>
              </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula10edit" class="text-justify" ref="Clausula10">
                      Será obligación de la arrendadora mantener la propiedad arrendada en estado de servir para el
                      fin
                      a que ha sido arrendada, haciendo durante el arrendamiento las reparaciones que sean
                      necesarias
                      para tal objeto, a excepción de las "reparaciones locativas" las que serán de cargo de la
                      arrendataria. Se entenderá por "reparaciones locativas" aquellas que según la costumbre son
                      normalmente de cargo de los arrendatarios y en general, la reparación de deterioros o
                      desperfectos
                      que se producen por culpa del arrendatario o de las personas por las cuales éste responde.
                      Especialmente, se consideran "reparaciones locativas" las siguientes: las relativas a la
                      mantención periódica, de forma tal que se mantengan en perfecto estado de funcionamiento las
                      llaves de paso, válvulas y flotadores de los excusados, enchufes, timbres, interruptores de la
                      instalación eléctrica.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula11" class="col-8 card-title text-center">Clausula 11 ROBOS Y PERJUICIOS:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula11" v-model="clausula11edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula11edit" class="text-justify" ref="Clausula11">
                      La arrendadora no responderá de manera alguna por robos que puedan ocurrir en la propiedad
                      arrendada o por perjuicios que puedan producirse por incendios, inundaciones, filtraciones,
                      rotura
                      de cañerías, efectos de humedad o calor, daños en los ascensores u otros, en la medida que
                      ellos
                      sean consecuencia de cualquier caso fortuito o de fuerza mayor. </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula12" class="col-8 card-title text-center">Clausula 12 GARANTIA DE ARRIENDO:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula12" v-model="clausula12edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula12edit" class="text-justify" ref="Clausula12">
                      A fin de garantizar la conservación de la propiedad y su restitución en el mismo estado en que
                      la
                      recibe, la devolución y conservación de las especies y artefactos que se indicarán en el
                      inventario, el pago de los perjuicios y deterioros que se causen en la propiedad arrendada,
                      sus
                      servicios e instalaciones y, en general, para responder al fiel cumplimiento de las
                      estipulaciones
                      de este contrato, la arrendataria entrega en garantía en este acto a la arrendadora la suma de
                      $[{valorRenta}].- ([{valorRentaPalabras}]) equivalente a 01 (un) mes de la renta estipulada,
                      que
                      la arrendadora se obliga a restituir por igual equivalencia dentro de los 30 días siguientes a
                      la
                      fecha en que le haya sido entregada, a su satisfacción, la propiedad arrendada, quedando desde
                      ahora autorizada la arrendadora para descontar de la garantía el valor de los deterioros y
                      perjuicios de cargo del arrendatario que se hayan ocasionado, como asimismo, el valor de las
                      cuentas pendientes de gastos comunes, energía eléctrica, agua u otros que sean de cargo de la
                      arrendataria. La arrendataria no podrá en caso alguno imputar la garantía al pago de la renta
                      de
                      arrendamiento, ni aún tratándose de la renta del último mes. Asimismo, a la firma del contrato
                      se
                      pagará mediante transferencia electrónica la suma de:

                      <br>Garantía: $[{valorRenta}].- ([{valorRentaPalabras}])
                      <br>Proporcional 9 días mes de diciembre: $203.226.-(doscientos tres mil doscientos veintiséis
                      pesos)
                      <br>Honorarios de corretaje: $350.000.- (trescientos cincuenta mil pesos)
                    </p>
                  </div>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula13" class="col-8 card-title text-center">Clausula 13 ENTREGA Y RESTITUCION DEL
                    INMUEBLE:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula13" v-model="clausula13edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula13edit" class="text-justify" ref="Clausula13">
                      La arrendataria se obliga a restituir inmediatamente que termine este contrato, en el mismo
                      estado, tomándose en consideración el deterioro ocasionado por el paso del tiempo y el uso
                      legítimo de ella. La entrega deberá hacerse mediante la desocupación total de la propiedad,
                      poniéndola a disposición de la arrendadora y entregando las llaves. En el evento que el
                      arrendatario no restituyere la propiedad en la fecha de término del arrendamiento, se aplicará
                      lo
                      estipulado en la cláusula 4ª y 6ª. Por otra parte, deberá exhibir los recibos que acrediten el
                      pago, hasta el último día que ocupó el inmueble, de los gastos comunes, los consumos de
                      energía
                      eléctrica, basura y otros similares que puedan afectar al inmueble arrendado.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula14" class="col-8 card-title text-center">Clausula 14 ARBITRAJE:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula14" v-model="clausula14edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula14edit" class="text-justify" ref="Clausula14" >
                      Toda y cualquier controversia, dificultad o diferencia que se produzca entre las partes y que
                      tenga su origen en la interpretación, cumplimiento, aplicación, validez, ejecución, nulidad,
                      efectos o vigencia del presente contrato, cualquiera de sus cláusulas o efectos, siendo la
                      anterior enumeración a título ejemplar, se someterá al conocimiento y fallo de la justicia
                      ordinaria.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula15" class="col-8 card-title text-center">Clausula 15 CODEUDOR SOLIDARIO:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula15" v-model="clausula15edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula15edit" class="text-justify" ref="Clausula15">
                      Por el presente a este acto don David Alberto Roig Salgado y, declaran que se constituyen como
                      aval y codeudor solidario de las obligaciones contraídas en este acto por el arrendatario don
                      Nicolás Alberto Pérez Pérez, aceptando, desde luego las variaciones en la renta de
                      arrendamiento,
                      renovaciones tácitas o expresas de la vigencia de este contrato y especialmente cualquier otra
                      modificación acordada por las partes.</p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula16" class="col-8 card-title text-center">Clausula 16 COMISION:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula16" v-model="clausula16edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula16edit" class="text-justify" ref="Clausula16">
                      Las partes pagarán una comisión de corretaje por un monto equivalente al 50% de un mes de
                      arriendo
                      al momento de la firma de contrato a la corredora de propiedades Alejandra Solis Pradenas, rut
                      8.493.004-0, cta cte 47 60 758 398, Banco Chile, email: a.solis@delacasapropiedades.cl.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula17" class="col-8 card-title text-center">Clausula 17 OTRAS CONDICIONES:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula17" v-model="clausula17edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula17edit" class="text-justify" ref="Clausula17">
                      En caso de que una de las partes quisiera dar término al presente contrato, antes del primer
                      año
                      estipulado se cancelará un mes de arriendo como indemnización que las partes establecen como
                      suma
                      de los perjuicios causados, a partir del segundo año bastará el aviso con 60 días de
                      anticipación
                      a la fecha de salida.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-9">
              <div class="row">
                <div class="col-2"/>
                  <h5 id="Clausula18" class="col-8 card-title text-center">Clausula 18 DOMICILIO:</h5>
                <div class="col-2">
                  <material-checkbox id="editClausula18" v-model="clausula18edit">Editar</material-checkbox>
                </div>
                </div>
                <div class="mb-3 mt-3 ms-3">
                    <p :contenteditable="clausula18edit" class="text-justify" ref="Clausula18">
                      Las partes fijan domicilio convencional en la ciudad y comuna de Santiago para todos los
                      efectos
                      legales que pudieren emanar del presente instrumento y se someten a la competencia y
                      jurisdicción
                      de sus Tribunales de Justicia, estableciendo, desde luego, como domicilios hábiles para
                      recibir
                      notificaciones asociadas o relacionadas al Contrato, aquellos especificados en el
                      encabezamiento
                      del Contrato.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
          <material-button variant="success" size="lg" class="mt-4 mb-6" full-width @click="enviarContrato">Crear Contrato</material-button>
        </div>
    </div>
  </div>
</template>