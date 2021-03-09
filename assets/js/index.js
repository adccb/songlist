const themeKey = "songbook.autumn.zone/theme"
const historyKey = "songbook.autumn.zone/history"

/* 
 * init stuff
 */
document.addEventListener('DOMContentLoaded', function() {
  const theme = window.localStorage.getItem(themeKey) || 'dark'
  document.body.className = ''
  document.body.classList.add(theme)
})

/*
 * theme stuff
 */
function darken() {
  const body = document.body
  body.classList.remove('light')
  body.classList.add('dark')
  window.localStorage.setItem(themeKey, 'dark')
}

function lighten() {
  const body = document.body
  body.classList.remove('dark')
  body.classList.add('light')
  window.localStorage.setItem(themeKey, 'light')
}

function toggleTheme() {
  const theme = window.localStorage.getItem(themeKey)
  if(theme === 'light') darken()
  else lighten()
  renderBarItems()
}

function updateTheme(event) {
  if(event.keyCode === 68) darken()
  else if(event.keyCode === 76) lighten()
  renderBarItems()
} 

document.addEventListener("keydown", updateTheme)

/*
 * bar icons
 */
function renderBarItems() {
  // get the element to render into and clear it out
  const bar = document.querySelector('.bar')
  while(bar.firstChild) { bar.removeChild(bar.firstChild) }

  // get the theme info
  const setting = window.localStorage.getItem(themeKey) || "dark"
  const buttonText = setting === "light" ? "☉" : "☽"

  // generate the actual button
  const toggleButton = document.createElement('button')
  toggleButton.className = ['theme-btn', setting].join(' ')
  toggleButton.onclick = toggleTheme
  toggleButton.appendChild(document.createTextNode(buttonText))
  bar.appendChild(toggleButton)
}

document.addEventListener('DOMContentLoaded', renderBarItems)

/*
 * history
 */
document.addEventListener("DOMContentLoaded", function() {
  const history = window.localStorage.getItem(historyKey)
  if(!history) window.localStorage.setItem(historyKey, JSON.stringify([]))
})
