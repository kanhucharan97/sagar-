const panels = document.querySelectorAll('.panel')

panels.forEach(function (panel) {
  panel.addEventListener('click', function () {
    removeClassList()
    panel.classList.add('active')
  })
})

function removeClassList() {
  panels.forEach(function (panel) {
    panel.classList.remove('active')
  })
}
