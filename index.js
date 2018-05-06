const scope = {}
scope.currentYear = (new Date()).getFullYear()

Array.prototype.forEach.call(document.querySelectorAll('[data-js-textContent]'), (el) => {
  el.textContent = scope[el.getAttribute('data-js-textContent')]
})
