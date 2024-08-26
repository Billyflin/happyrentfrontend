import bootstrap from 'bootstrap/dist/js/bootstrap'

// initialization of Tooltips
export default function setTooltip() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  // eslint-disable-next-line no-unused-vars
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}
