<script>
import { onMounted, onUnmounted } from 'vue'
import { useAppStore, useAuthStore } from '@/store/index.js'
import NavPill from '@/views/components/NavPill/NavPill.vue'
import SideNav from '@/views/Contrato/components/SideNav.vue'

export default {
  name: 'ClausulasNuevoContrato',
  components: { SideNav, NavPill },
  setup() {
    const store = useAppStore()
    const store2 = useAuthStore()
    const { toggleEveryDisplay } = store
    onMounted(() => {
      toggleEveryDisplay()
    })

    onUnmounted(() => {
      toggleEveryDisplay()
    })
    return { store, store2 }
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

          <h1 class="text-center">Clausulas del contrato</h1>
          <p class="text-center">A continuación se presentan las clausulas del contrato</p>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body col-lg-10 mt-lg-0 mt-4 mx-5 text-center">
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula1" class="card-title text-center">Comparecencia:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          En Santiago, a [{fechaCreacionContrato}], comparecen: por una parte, PROPIETARIA doña
                          [{nombrePropietario}] , cédula nacional de identidad n° [{rutPropietario}],
                          [{paisPropietario}], [{estadoCivilPropietario}], domiciliada en [{direccionPropietario}],
                          correo: [{correoPropietario}], celular [{numeroPropietario}], en adelante la parte
                          “arrendadora”; y don ARRENDATARIO [{nombreArrendatario}] cédula de identidad
                          n°[{rutArrendatario}], [{paisArrendatario}], [{estadoCivilArrendatario}], domiciliado en
                          [{direccionArrendatario}] comuna [{comunaArrendatario}], [{ciudadArrendatario}], celular
                          [{numeroArrendatario}], email:[{correoArrendatario}], en adelante la parte “arrendataria”
                          [[{SectorCodeudor}]y don CODEUDOR [{nombreCodeudor}], [{paisCodeudor}],
                          [{estadoCivilCodeudor}], cédula nacional de identidad N°[{rutCodeudor}],
                          email:[{correoCodeudor}], celular [{numeroCodeudor}] , con domicilio en [{direccionCodeudor}],
                          comuna [{comunaCodeudor}], [{regionCodeudor}], en su calidad de Aval y Codeudor
                          Solidario[{SectorCodeurdor}]] de la parte "arrendataria", todos los comparecientes mayores de
                          edad y libres disponedores de sus bienes, quienes han convenido el siguiente contrato de
                          arrendamiento:
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula1" class="card-title text-center">Clausula 1 PROPIEDAD:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          {{ store2.propiedad.propietario.tratamiento }} arrendadora declara ser única dueña y da en
                          arrendamiento a la arrendataria, quien acepta para sí el PROPIEDAD
                          [{direccionPropiedadContrato}], comuna [{comunaPropiedadContrato}] y que destinará a
                          habitación.
                          Se incluye el uso de la [{bodegaPropiedad}].
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula2" class="card-title text-center">Clausula 2 RENTA:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          La renta mensual de arrendamiento por los inmuebles individualizados en la
                          cláusula primera precedente es y será la suma de CONTRATO [{valorRenta}].-mensuales
                          ([{valorRentaPalabras}]). La renta se pagará por mes anticipado, dentro de los primeros cinco
                          días
                          hábiles de cada mes, depositándola a nombre de PROPIETARIA
                          [{nombrePropietario}] en [{bancoPropietario}], cuenta [{tipoCuentaBanco}] Nº
                          [{numeroCuentaBanco}], RUT:[{rutPropietario}] y deberá ser informada al correo electrónico:
                          [{correoPropietario}]. Será suficiente para acreditar el pago de las rentas antes señaladas la
                          exhibición de los comprobantes de depósito o de transferencia electrónica de fondos hecha
                          a la cuenta corriente antes singularizada.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula3" class="card-title text-center">Clausula 3 REAJUSTE:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          La renta se reajustará [{reajusteContrato}] en el mismo porcentaje que haya
                          variado el IPC (índice de precios del consumidor). En caso de IPC negativo se mantendrá
                          la renta del período inmediatamente anterior con el mínimo de [{valorRenta}].-
                          ([{valorRentaPalabras}]).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula4" class="card-title text-center">Clausula 4 OTROS PAGOS:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justifyr">
                          La arrendataria estará obligada a pagar con toda puntualidad y a quién corresponda, los gastos
                          comunes, los consumos de luz, extracción de basuras y demás consumos y servicios que puedan
                          afectar al inmueble enviando copia de los pagos al siguiente email: [{correoPropietario}]. El
                          atraso de un mes en cualquiera de los pagos indicados, dará derecho a la arrendadora para
                          requerir
                          de la compañía de servicios que corresponda, la suspensión del servicio respectivo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula5" class="card-title text-center">Clausula 5 PLAZO:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          El presente contrato comenzará a regir a partir [{fechaInicioContrato}], y tendrá una duración
                          de
                          [{duracionContrato}], que se prorrogará automática y sucesivamente por períodos de 12 meses
                          cada
                          uno, salvo que cualquiera de las partes diere a la otra aviso de su intención de no perseverar
                          en
                          el contrato, lo que deberá hacer por correo electrónico [{correoPropietario}], con a lo menos
                          60
                          días de anticipación al vencimiento del plazo original o de cualquiera de sus prórrogas, con
                          copia
                          al aval y codeudora solidaria y al corredor de propiedades que intervino en esta operación de
                          arriendo.
                          En el evento de que la arrendataria no restituyere la propiedad en la fecha de término de la
                          vigencia del plazo original o de cualquiera de sus prórrogas, continuará obligada a pagar
                          mensualmente la suma correspondiente a la renta convenida hasta que efectúe la restitución del
                          inmueble (Art.6º Ley 18.101), sin perjuicio de que deberá pagar, además, mensualmente y
                          durante
                          todo el período de mora, a título de multa, una cantidad equivalente al 50% de la referida
                          suma,
                          sin perjuicio de los derechos del arrendador para demandar la restitución del inmueble ante la
                          justicia ordinaria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula6" class="card-title text-center">Clausula 6 MULTA EN CASO DE MORA:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula7" class="card-title text-center">Clausula 7 VISITAS AL INMUEBLE:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          En el último mes de vigencia del contrato, la arrendataria se obliga a dar las facilidades
                          necesarias al arrendador o quien lo represente para mostrar la propiedad 1 vez por semana, por
                          un
                          máximo de 40 minutos cada vez, en horarios y días a convenir.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula8" class="card-title text-center">Clausula 8 TERMINO ANTICIPADO:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula9" class="card-title text-center">Clausula 9 MEJORAS:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula10" class="card-title text-center">Clausula 10 MANTENCION DEL INMUEBLE:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula11" class="card-title text-center">Clausula 11 ROBOS Y PERJUICIOS:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          La arrendadora no responderá de manera alguna por robos que puedan ocurrir en la propiedad
                          arrendada o por perjuicios que puedan producirse por incendios, inundaciones, filtraciones,
                          rotura
                          de cañerías, efectos de humedad o calor, daños en los ascensores u otros, en la medida que
                          ellos
                          sean consecuencia de cualquier caso fortuito o de fuerza mayor. </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula12" class="card-title text-center">Clausula 12 GARANTIA DE ARRIENDO:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula13" class="card-title text-center">Clausula 13 ENTREGA Y RESTITUCION DEL
                        INMUEBLE:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula14" class="card-title text-center">Clausula 14 ARBITRAJE:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          Toda y cualquier controversia, dificultad o diferencia que se produzca entre las partes y que
                          tenga su origen en la interpretación, cumplimiento, aplicación, validez, ejecución, nulidad,
                          efectos o vigencia del presente contrato, cualquiera de sus cláusulas o efectos, siendo la
                          anterior enumeración a título ejemplar, se someterá al conocimiento y fallo de la justicia
                          ordinaria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula15" class="card-title text-center">Clausula 15 CODEUDOR SOLIDARIO:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          Por el presente a este acto don David Alberto Roig Salgado y, declaran que se constituyen como
                          aval y codeudor solidario de las obligaciones contraídas en este acto por el arrendatario don
                          Nicolás Alberto Pérez Pérez, aceptando, desde luego las variaciones en la renta de
                          arrendamiento,
                          renovaciones tácitas o expresas de la vigencia de este contrato y especialmente cualquier otra
                          modificación acordada por las partes.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula16" class="card-title text-center">Clausula 16 COMISION:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          Las partes pagarán una comisión de corretaje por un monto equivalente al 50% de un mes de
                          arriendo
                          al momento de la firma de contrato a la corredora de propiedades Alejandra Solis Pradenas, rut
                          8.493.004-0, cta cte 47 60 758 398, Banco Chile, email: a.solis@delacasapropiedades.cl.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula17" class="card-title text-center">Clausula 17 OTRAS CONDICIONES:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
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
                  <div class="row">
                    <div class="col-9">
                      <h5 id="Clausula18" class="card-title text-center">Clausula 18 DOMICILIO:</h5>
                      <div class="mb-3 mt-3">
                        <p class="text-justify">
                          Las partes fijan domicilio convencional en la ciudad y comuna de Santiago para todos los
                          efectos
                          legales que pudieren emanar del presente instrumento y se someten a la competencia y
                          jurisdicción
                          de sus Tribunales de Justicia, estableciendo, desde luego, como domicilios hábiles para
                          recibir
                          notificaciones asociadas o relacionadas al Contrato, aquellos especificados en el
                          encabezamiento
                          del Contrato.-</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>