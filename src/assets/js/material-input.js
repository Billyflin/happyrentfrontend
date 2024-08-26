// Añadir clase 'focused' cuando el input está enfocado
function focused(el) {
  if (el.parentElement.classList.contains('input-group')) {
    el.parentElement.classList.add('focused')
  }
}

// Quitar clase 'focused' cuando el input pierde el foco
function defocused(el) {
  if (el.parentElement.classList.contains('input-group')) {
    el.parentElement.classList.remove('focused')
  }
}

// Ayudante para añadir múltiples atributos a un elemento
function setAttributes(el, options) {
  Object.keys(options).forEach((attr) => {
    el.setAttribute(attr, options[attr])
  })
}

// Añadir atributos a los inputs para llamar a las funciones de enfoque y desenfoque
function addFocusListeners() {
  const allInputs = document.querySelectorAll('input.form-control')
  allInputs.forEach((el) =>
    setAttributes(el, {
      onfocus: 'focused(this)',
      onblur: 'defocused(this)'
    })
  )
}

// Configurar los inputs con Material Design
export default function setMaterialInput() {
  const inputs = document.querySelectorAll('input')

  inputs.forEach((input) => {
    // Agrega la clase 'is-filled' si el input tiene un valor
    if (input.value) {
      input.parentElement.classList.add('is-filled')
    }

    input.addEventListener('focus', handleFocus, false)
    input.addEventListener('blur', handleBlur, false)
    input.addEventListener('keyup', handleKeyUp, false)
  })
}

// Manejador para el evento 'focus'
function handleFocus(event) {
  this.parentElement.classList.add('is-focused')
}

// Manejador para el evento 'blur'
function handleBlur(event) {
  if (this.value !== '') {
    this.parentElement.classList.add('is-filled')
  }
  this.parentElement.classList.remove('is-focused')
}

// Manejador para el evento 'keyup'
function handleKeyUp(event) {
  if (this.value !== '') {
    this.parentElement.classList.add('is-filled')
  } else {
    this.parentElement.classList.remove('is-filled')
  }
}

// Inicializar la configuración de los inputs al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
  addFocusListeners()
  setMaterialInput()
})
