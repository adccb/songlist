document.addEventListener("DOMContentLoaded", function() {
  const pathname = window.location.pathname
  if(pathname === '/') return

  const name = pathname.match(/\/songs\/(?<title>.+)\.html$/).groups.title
  const title = name.replace(/-/g, ' ')

  const history = JSON.parse(window.localStorage.getItem(historyKey))
  window.localStorage.setItem(historyKey, JSON.stringify(history.concat({ name, title })))
})
