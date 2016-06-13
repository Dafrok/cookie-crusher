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
    if (typeof timers.autoClick !== null) {
        timers.autoClick = null
    } else {
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
