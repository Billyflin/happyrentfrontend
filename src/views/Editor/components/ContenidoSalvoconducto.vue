<template>
  <div class="container my-5" v-if="store">
    <p class="text-end">Santiago, {{ formatDate(Date.now()) }}.</p>

    <p>
      Yo, <strong>{{ fullName(store.propiedad.arrendador) }}</strong>, cédula nacional de identidad número
      <strong>{{ store.propiedad.arrendador.rut }}</strong>, propietario/a del inmueble ubicado en
      <strong>{{ store.propiedad.propiedad.direccion.calle }}</strong>,
      ciudad <strong>{{ store.propiedad.propiedad.direccion.ciudad }}</strong>, país Chile.
    </p>

    <p>
      Declaro que el arrendatario u ocupante Don/Doña <strong>{{ fullName(store.propiedad.arrendatario) }}</strong>,
      cédula nacional de identidad número <strong>{{ store.propiedad.arrendatario.rut }}</strong>, se encuentra al día
      en todos los pagos involucrados en este arrendamiento, incluyendo la renta correspondiente
      al último mes y los servicios con que cuenta el inmueble.
    </p>

    <p>
      Por lo tanto, no hay impedimento legal, judicial ni contractual alguno de mi parte para que
      traslade sus bienes muebles del domicilio recién indicado.
    </p>

    <p>
      Emito la presente declaración en cumplimiento de la Ley 20.227 a fin de que se obtenga la
      correspondiente declaración jurada.
    </p>

    <div class="signature text-center mt-5">
      <p>........................................</p>
      <p><strong>{{ fullName(store.propiedad.arrendador) }}</strong></p>
      <p><strong>{{ store.propiedad.arrendador.rut }}</strong></p>
    </div>

    <button class="btn btn-primary mt-4" @click="downloadPDF">Descargar PDF</button>
  </div>
</template>

<script setup>
import { usePropiedadesStore } from '@/store/propiedadesStore.js';
import { formatDate } from '../../NuevoContrato/utils.js';
import jsPDF from 'jspdf';

const store = usePropiedadesStore();

const fullName = (person) => {
  return `${person.nombre} ${person.apellidoPaterno} ${person.apellidoMaterno}`;
};

const downloadPDF = () => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter'
  });

  const marginLeft = 40;
  const marginTop = 80;
  const lineHeight = 20;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const textWidth = pageWidth - 2 * marginLeft;

  let cursorY = marginTop;

  // Título
  pdf.setFont('Times', 'Bold');
  pdf.setFontSize(16);
  pdf.text('PODER SIMPLE', pageWidth / 2, cursorY, { align: 'center' });
  cursorY += lineHeight;
  pdf.text('SALVOCONDUCTO ARRENDATARIO', pageWidth / 2, cursorY, { align: 'center' });
  cursorY += lineHeight * 2;

  // Configuración de la fuente para el contenido
  pdf.setFont('Times', 'Roman');
  pdf.setFontSize(12);

  // Párrafo 1: Fecha
  const fechaTexto = `Santiago, ${formatDate(Date.now())}.`;
  pdf.text(fechaTexto, pageWidth - marginLeft, cursorY, { align: 'right' });
  cursorY += lineHeight * 2;

  // Párrafo 2: Declaración del propietario
  const paragraph1 = `Yo ${fullName(store.propiedad.arrendador)}, cédula nacional de identidad número ${store.propiedad.arrendador.rut}, propietario/a del inmueble ubicado en ${store.propiedad.propiedad.direccion.calle}, comuna ${store.propiedad.propiedad.direccion.comuna}, ciudad ${store.propiedad.propiedad.direccion.ciudad}, país Chile.`;
  pdf.text(paragraph1, marginLeft, cursorY, { maxWidth: textWidth, align: 'justify' });
  cursorY += lineHeight * 2;

  // Párrafo 3: Declaración sobre el arrendatario
  const paragraph2 = `Declaro que el arrendatario u ocupante Don/Doña ${fullName(store.propiedad.arrendatario)}, cédula nacional de identidad número ${store.propiedad.arrendatario.rut}, se encuentra al día en todos los pagos involucrados en este arrendamiento, incluyendo la renta correspondiente al último mes y los servicios con que cuenta el inmueble.`;
  pdf.text(paragraph2, marginLeft, cursorY, { maxWidth: textWidth, align: 'justify' });
  cursorY += lineHeight * 2;

  // Párrafo 4: Declaración final
  const paragraph3 = `Por lo tanto, no hay impedimento legal, judicial ni contractual alguno de mi parte para que traslade sus bienes muebles del domicilio recién indicado.`;
  pdf.text(paragraph3, marginLeft, cursorY, { maxWidth: textWidth, align: 'justify' });
  cursorY += lineHeight * 2;

  // Párrafo 5: Emisión de la declaración
  const paragraph4 = `Emito la presente declaración en cumplimiento de la Ley 20.227 a fin de que se obtenga la correspondiente declaración jurada.`;
  pdf.text(paragraph4, marginLeft, cursorY, { maxWidth: textWidth, align: 'justify' });
  cursorY += lineHeight * 5;

  // Espacio para la firma
  const signatureLineHeight = 30;
  pdf.text('........................................', pageWidth / 2, cursorY, { align: 'center' });
  cursorY += signatureLineHeight;

  pdf.text(fullName(store.propiedad.arrendador), pageWidth / 2, cursorY, { align: 'center' });
  cursorY += signatureLineHeight;

  pdf.text(store.propiedad.arrendador.rut, pageWidth / 2, cursorY, { align: 'center' });

  // Guardar el PDF
  pdf.save(`Salvoconducto ${store.propiedad.propiedad.direccion.calle}, ciudad ${store.propiedad.propiedad.direccion.ciudad}.pdf`);
};

</script>

<style scoped>
p {
  font-size: 1.1rem;
}
</style>
<!--  pdf.save(`Salvoconducto ${store.propiedad.propiedad.direccion.calle}, comuna ${store.propiedad.propiedad.direccion.comuna}, ciudad ${store.propiedad.propiedad.direccion.ciudad}.pdf`);-->
