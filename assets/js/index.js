const key = "songbook.autumn.zone/theme"

document.addEventListener('DOMContentLoaded', function() {
  const theme = window.localStorage.getItem(key) || 'dark'
  document.body.className = ''
  document.body.classList.add(theme)
})

document.addEventListener("keydown", function (event) {
  const body = document.body

  if(event.keyCode === 68) {
    body.classList.remove('light')
    body.classList.add('dark')
    window.localStorage.setItem(key, 'dark')
  } else if(event.keyCode === 76) {
    body.classList.remove('dark')
    body.classList.add('light')
    window.localStorage.setItem(key, 'light')
  }
})
