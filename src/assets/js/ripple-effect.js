window.onload = function () {
  const ripples = document.querySelectorAll('.btn')

  for (let i = 0; i < ripples.length; i++) {
    ripples[i].addEventListener(
      'click',
      function (e) {
        const targetEl = e.target
        let rippleDiv = targetEl.querySelector('.ripple')

        rippleDiv = document.createElement('span')
        rippleDiv.classList.add('ripple')
        rippleDiv.style.width = rippleDiv.style.height =
          Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px'
        targetEl.appendChild(rippleDiv)

        rippleDiv.style.left = e.offsetX - rippleDiv.offsetWidth / 2 + 'px'
        rippleDiv.style.top = e.offsetY - rippleDiv.offsetHeight / 2 + 'px'
        rippleDiv.classList.add('ripple')
        setTimeout(function () {
          rippleDiv.parentElement.removeChild(rippleDiv)
        }, 600)
      },
      false
    )
  }
}
