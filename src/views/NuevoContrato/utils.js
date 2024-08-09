
export function formatDate(date) {

  console.log('date', date)
  const d = new Date(date);
  console.log('date', d)

  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return d.toLocaleString( 'es-CL', opciones);
}

export function formatDateTime(date) {

  console.log('date', date)
  const d = new Date(date);
  console.log('date', d)

  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return d.toLocaleString( 'es-CL', opciones);
}



export function capitalize(string) {
  try {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } catch (e) {
    console.log('errorn en capitalize en utils', e)
    return 'error'
  }
}

export function numberToWordsInSpanish(number) {
  const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  function convertToWords(n) {
    if (n < 10) return unidades[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) {
      if (n % 10 === 0) return decenas[n / 10];
      return `${decenas[Math.floor(n / 10)]} y ${unidades[n % 10]}`;
    }
    if (n < 1000) {
      if (n % 100 === 0) return centenas[n / 100];
      return `${centenas[Math.floor(n / 100)]} ${convertToWords(n % 100)}`;
    }
    if (n < 1000000) {
      if (n === 1000) return 'mil';
      if (n < 2000) return `mil ${convertToWords(n % 1000)}`;
      if (n % 1000 === 0) return `${convertToWords(n / 1000)} mil`;
      return `${convertToWords(Math.floor(n / 1000))} mil ${convertToWords(n % 1000)}`;
    }
    if (n < 1000000000) {
      if (n === 1000000) return 'un millón';
      if (n < 2000000) return `un millón ${convertToWords(n % 1000000)}`;
      if (n % 1000000 === 0) return `${convertToWords(n / 1000000)} millones`;
      return `${convertToWords(Math.floor(n / 1000000))} millones ${convertToWords(n % 1000000)}`;
    }
    return 'Número demasiado grande';
  }

  return convertToWords(number);
}



export function formatNumberWithDots(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Ejemplo de uso
console.log(formatNumberWithDots(1234567)); // "1.234.567"
