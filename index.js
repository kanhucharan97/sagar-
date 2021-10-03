alert('hello Mr. Achu, i hope you are well now click ok to continue')
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
