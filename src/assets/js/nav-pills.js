/* eslint-disable */

export default function setNavPills() {
  const navPills = document.querySelectorAll('.nav-pills')

  function createMovingDiv(item) {
    const movingDiv = document.createElement('div')
    const firstLi = item.querySelector('li:first-child .nav-link')
    const tab = firstLi.cloneNode()
    tab.innerHTML = '-'

    movingDiv.classList.add('moving-tab', 'position-absolute', 'nav-link')
    movingDiv.appendChild(tab)
    item.appendChild(movingDiv)

    return movingDiv
  }

  function updateMovingDivPosition(item, movingDiv, li, nodes) {
    let sum = 0
    const index = nodes.indexOf(li) + 1

    if (item.classList.contains('flex-column')) {
      for (let j = 1; j <= nodes.indexOf(li); j++) {
        sum += item.querySelector(`li:nth-child(${j})`).offsetHeight
      }
      movingDiv.style.transform = `translate3d(0px, ${sum}px, 0px)`
      movingDiv.style.height = `${item.querySelector(`li:nth-child(${index})`).offsetHeight}px`
    } else {
      for (let j = 1; j <= nodes.indexOf(li); j++) {
        sum += item.querySelector(`li:nth-child(${j})`).offsetWidth
      }
      movingDiv.style.transform = `translate3d(${sum}px, 0px, 0px)`
      movingDiv.style.width = `${item.querySelector(`li:nth-child(${index})`).offsetWidth}px`
    }
  }

  function initNavs() {
    navPills.forEach(item => {
      const movingDiv = createMovingDiv(item)
      const listLength = item.getElementsByTagName('li').length

      movingDiv.style.padding = '0px'
      movingDiv.style.width = `${item.querySelector('li:nth-child(1)').offsetWidth}px`
      movingDiv.style.transform = 'translate3d(0px, 0px, 0px)'
      movingDiv.style.transition = '.5s ease'

      item.addEventListener('mouseover', event => {
        const target = getEventTarget(event)
        const li = target.closest('li')
        if (li) {
          const nodes = Array.from(li.closest('ul').children)
          item.querySelector(`li:nth-child(${nodes.indexOf(li) + 1}) .nav-link`).onclick = () => {
            updateMovingDivPosition(item, movingDiv, li, nodes)
          }
        }
      })
    })
  }

  function handleResize() {
    navPills.forEach(item => {
      item.querySelector('.moving-tab').remove()
      const movingDiv = createMovingDiv(item)

      movingDiv.style.padding = '0px'
      movingDiv.style.transition = '.5s ease'

      const activeLi = item.querySelector('.nav-link.active').parentElement
      if (activeLi) {
        const nodes = Array.from(activeLi.closest('ul').children)
        updateMovingDivPosition(item, movingDiv, activeLi, nodes)
      }
    })

    if (window.innerWidth < 991) {
      navPills.forEach(item => {
        if (!item.classList.contains('flex-column')) {
          item.classList.remove('flex-row')
          item.classList.add('flex-column', 'on-resize')
          const activeLi = item.querySelector('.nav-link.active').parentElement
          const nodes = Array.from(activeLi.closest('ul').children)
          updateMovingDivPosition(item, document.querySelector('.moving-tab'), activeLi, nodes)
        }
      })
    } else {
      navPills.forEach(item => {
        if (item.classList.contains('on-resize')) {
          item.classList.remove('flex-column', 'on-resize')
          item.classList.add('flex-row')
          const activeLi = item.querySelector('.nav-link.active').parentElement
          const nodes = Array.from(activeLi.closest('ul').children)
          updateMovingDivPosition(item, document.querySelector('.moving-tab'), activeLi, nodes)
        }
      })
    }
  }

  function getEventTarget(e) {
    return e.target || e.srcElement
  }

  setTimeout(initNavs, 100)
  window.addEventListener('resize', handleResize)

  if (window.innerWidth < 991) {
    navPills.forEach(item => {
      if (item.classList.contains('flex-row')) {
        item.classList.remove('flex-row')
        item.classList.add('flex-column', 'on-resize')
      }
    })
  }
}
