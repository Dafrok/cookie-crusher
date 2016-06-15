chrome.runtime.onMessage.addListener(function (msg) {
    console.log(msg)
})
chrome.runtime.sendMessage('Message from content.js')

document.getElementById('support').remove()

var bigCookie = document.getElementById('bigCookie')
var timers = {
    autoClick: null,
    autoUpgrade: null,
    autoBonus: null
}

function oneClick(cookie) {
    cookie.click()
}

function bonusClick() {

}

function upgrade() {

}

function toggleAutoClick (bool) {
    console.log('Auto click.')
    if (typeof bool === 'undefined' ? timers.autoClick !== null : bool) {
        clearInterval(timers.autoClick)
        timers.autoClick = null
    } else if (typeof bool === 'undefined' ? timers.autoClick === null : bool){
        timers.autoClick = setInterval(oneClick, 1, bigCookie)
    }
}

function toggleAutoBonus (bool) {
    if (typeof timers.autoBonus !== null) {
        timers.autoBonus = null
    } else {
        timers.autoBonus = setInterval(bonusClick, 1000)
    }
}

function toggleAutoUpgrade (bool) {
    if (typeof timers.autoUpgrade !== null) {
        timers.autoUpgrade = null
    } else {
        timers.autoUpgrade = setInterval(upgrade, 5000)
    }
}
