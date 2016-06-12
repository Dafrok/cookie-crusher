var bigCookie = document.getElementById('bigCookie')

function oneClick(cookie) {
  cookie.click()
}

setInterval(oneClick, 1, bigCookie)
