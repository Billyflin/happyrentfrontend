<template>
  <div class="container my-5" v-if="store">
    <p class="text-end">{{ formatDate(Date.now()) }}</p>

    <h3 class="text-center mb-4">ACTA DE {{ isReception ? 'RECEPCIÓN' : 'ENTREGA' }} DE PROPIEDAD</h3>

    <p><strong>{{ isReception ? 'Recibido por' : 'Entregado por' }}:</strong> {{ fullName(store.propiedad.arrendador) }}</p>
    <p><strong>{{ isReception ? 'Entregado por' : 'Recibido por' }}:</strong> {{ fullName(store.propiedad.arrendatario) }}</p>
    <p><strong>Motivo:</strong> {{ motivo }}</p>
    <p><strong>PROPIEDAD:</strong> {{ propiedad }}</p>

    <p>Con esta fecha se hace {{ isReception ? 'recepción' : 'entrega' }} de la propiedad antes mencionada.</p>
    <p>Conforme con lo anterior Don/Doña {{ fullName(store.propiedad.arrendador) }} {{ isReception ? 'recibe' : 'entrega' }} la propiedad en la condición que a continuación se detalla:</p>

    <p><strong>Lámparas:</strong></p>
    <p>__________________________________________________________</p>
    <p>__________________________________________________________</p>

    <p><strong>Cortinas:</strong></p>
    <p>__________________________________________________________</p>
    <p>__________________________________________________________</p>
    <p>__________________________________________________________</p>

    <p><strong>Garantía:</strong></p>
    <p>De acuerdo al contrato se hará devolución de la garantía 30 días después de la recepción de la propiedad y contra presentación de pago de cuentas de servicios y gastos comunes.</p>
    <p>Se descontará de la garantía precio de reposición de encimera eléctrica y reparación de cubierta de cocina.</p>

    <div class="signature text-center mt-5">
      <p>{{ fullName(store.propiedad.arrendador) }}</p>
      <p>..................................................</p>
      <p><strong>Arrendatario</strong></p>
      <p>C. I. nº _______________________________</p>
    </div>

    <button class="btn btn-primary mt-4" @click="downloadPDF">Descargar PDF</button>
  </div>
</template>

<script setup>
import { usePropiedadesStore } from '@/store/propiedadesStore.js';
import jsPDF from 'jspdf';
import { ref } from 'vue';

const store = usePropiedadesStore();
const isReception = ref(true); // Cambiar a `false` para que sea de entrega
const motivo = isReception.value ? 'Recepción de propiedad' : 'Término de contrato';
const propiedad = `${store.propiedad.propiedad.direccion.calle}, comuna ${store.propiedad.propiedad.direccion.comuna}, ciudad ${store.propiedad.propiedad.direccion.ciudad}, país Chile`;

const fullName = (person) => {
  return `${person.nombre} ${person.apellidoPaterno} ${person.apellidoMaterno}`;
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es-ES', options);
};

const downloadPDF = () => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter'
  });

  const marginLeft = 40;
  const marginTop = 60;
  const lineHeight = 20;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const textWidth = pageWidth - 2 * marginLeft;

  let cursorY = marginTop;

  pdf.setFont('Times', 'Roman');
  pdf.setFontSize(12);

  // Fecha
  pdf.text(formatDate(Date.now()), pageWidth - marginLeft, cursorY, { align: 'right' });
  cursorY += lineHeight * 2;

  // Título
  pdf.setFontSize(14);
  pdf.text(`ACTA DE ${isReception.value ? 'RECEPCIÓN' : 'ENTREGA'} DE PROPIEDAD`, pageWidth / 2, cursorY, { align: 'center' });
  cursorY += lineHeight * 2;

  // Contenido principal
  pdf.setFontSize(12);
  pdf.text(`${isReception.value ? 'Recibido por' : 'Entregado por'}: ${fullName(store.propiedad.arrendador)}`, marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text(`${isReception.value ? 'Entregado por' : 'Recibido por'}: ${fullName(store.propiedad.arrendatario)}`, marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text(`Motivo: ${motivo}`, marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text(`PROPIEDAD: ${propiedad}`, marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight * 2;

  pdf.text(`Con esta fecha se hace ${isReception.value ? 'recepción' : 'entrega'} de la propiedad antes mencionada.`, marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text(`Conforme con lo anterior Don/Doña ${fullName(store.propiedad.arrendador)} ${isReception.value ? 'recibe' : 'entrega'} la propiedad en la condición que a continuación se detalla:`, marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight * 2;

  pdf.text('Lámparas:', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text('__________________________________________________________', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text('__________________________________________________________', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight * 2;

  pdf.text('Cortinas:', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text('__________________________________________________________', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text('__________________________________________________________', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text('__________________________________________________________', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight * 2;

  pdf.text('Garantía:', marginLeft, cursorY, { maxWidth: textWidth, align: 'left' });
  cursorY += lineHeight;

  pdf.text('De acuerdo al contrato se hará devolución de la garantía 30 días después de la recepción de la propiedad y contra presentación de pago de cuentas de servicios y gastos comunes.', marginLeft, cursorY, { maxWidth: textWidth, align: 'justify' });
  cursorY += lineHeight * 2;

  pdf.text('Se descontará de la garantía precio de reposición de encimera eléctrica y reparación de cubierta de cocina.', marginLeft, cursorY, { maxWidth: textWidth, align: 'justify' });
  cursorY += lineHeight * 2;

  // Espacio para la firma
  pdf.text(`${fullName(store.propiedad.arrendador)}`, pageWidth / 2, cursorY, { align: 'center' });
  cursorY += lineHeight;

  pdf.text('..................................................', pageWidth / 2, cursorY, { align: 'center' });
  cursorY += lineHeight;

  pdf.text('Arrendatario', pageWidth / 2, cursorY, { align: 'center' });
  cursorY += lineHeight;

  pdf.text('C. I. nº _______________________________', pageWidth / 2, cursorY, { align: 'center' });

  // Guardar el PDF
  pdf.save('acta_entrega.pdf');
};
</script>

<style scoped>
p {
  font-size: 1.1rem;
}

h3 {
  font-weight: bold;
}
</style>
