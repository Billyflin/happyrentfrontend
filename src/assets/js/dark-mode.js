/* eslint-disable */

/* eslint-disable */

export function activateDarkMode() {
  const body = document.body
  const selectors = [
    { selector: 'div:not(.sidenav) > hr', classRemove: 'dark', classAdd: 'light' },
    { selector: 'div:not(.bg-gradient-dark) hr', classRemove: 'dark', classAdd: 'light' },
    { selector: 'button:not(.btn) > .text-dark', classRemove: 'text-dark', classAdd: 'text-white' },
    {
      selector: 'span.text-dark, .breadcrumb .text-dark',
      classRemove: 'text-dark',
      classAdd: 'text-white'
    },
    { selector: 'strong.text-dark', classRemove: 'text-dark', classAdd: 'text-white' },
    { selector: 'a.nav-link.text-dark', classRemove: 'text-dark', classAdd: 'text-white' },
    {
      selector: '.text-secondary',
      classRemove: 'text-secondary',
      classAdd: 'text-white',
      extraClassAdd: 'opacity-8'
    },
    { selector: '.bg-gray-100', classRemove: 'bg-gray-100', classAdd: 'bg-gray-600' },
    {
      selector: '.btn.btn-link.text-dark, .material-icons.text-dark',
      classRemove: 'text-dark',
      classAdd: 'text-white'
    },
    { selector: 'g', attribute: 'fill', attributeValue: '#fff' },
    { selector: '.card.border', classAdd: 'border-dark' },
    {
      selector: '.main-content .container-fluid .card',
      classRemove: 'blur',
      extraClassRemove: 'shadow-blur'
    }
  ]

  body.classList.add('dark-version')

  applyClasses(selectors)
}

export function deactivateDarkMode() {
  const body = document.body
  const selectors = [
    { selector: 'div:not(.sidenav) > hr', classRemove: 'light', classAdd: 'dark' },
    { selector: 'div:not(.bg-gradient-dark) hr', classRemove: 'light', classAdd: 'dark' },
    {
      selector: 'button:not(.btn) > .text-white',
      classRemove: 'text-white',
      classAdd: 'text-dark'
    },
    {
      selector: 'span.text-white, .breadcrumb .text-white',
      classRemove: 'text-white',
      classAdd: 'text-dark',
      exclude: ['.sidenav', '.card.bg-gradient-dark']
    },
    { selector: 'strong.text-white', classRemove: 'text-white', classAdd: 'text-dark' },
    {
      selector: 'a.nav-link.text-white',
      classRemove: 'text-white',
      classAdd: 'text-dark',
      exclude: ['.sidenav']
    },
    {
      selector: '.text-white',
      classRemove: 'text-white',
      classAdd: 'text-dark',
      extraClassRemove: 'opacity-8'
    },
    { selector: '.bg-gray-600', classRemove: 'bg-gray-600', classAdd: 'bg-gray-100' },
    {
      selector: '.btn.btn-link.text-white, .material-icons.text-white',
      classRemove: 'text-white',
      classAdd: 'text-dark',
      exclude: ['.card.bg-gradient-dark']
    },
    { selector: 'g', attribute: 'fill', attributeValue: '#252f40' },
    { selector: '.card.border.border-dark', classRemove: 'border-dark' },
    {
      selector: '.main-content .container-fluid .card',
      classAdd: 'blur',
      extraClassAdd: 'shadow-blur'
    }
  ]

  body.classList.remove('dark-version')

  applyClasses(selectors)
}

function applyClasses(selectors) {
  selectors.forEach(
    ({
      selector,
      classRemove,
      classAdd,
      extraClassRemove,
      extraClassAdd,
      attribute,
      attributeValue,
      exclude
    }) => {
      const elements = document.querySelectorAll(selector)

      elements.forEach((element) => {
        if (exclude && exclude.some((ex) => element.closest(ex))) return

        if (classRemove) element.classList.remove(classRemove)
        if (classAdd) element.classList.add(classAdd)
        if (extraClassRemove) element.classList.remove(extraClassRemove)
        if (extraClassAdd) element.classList.add(extraClassAdd)
        if (attribute) element.setAttribute(attribute, attributeValue)
      })
    }
  )
}
