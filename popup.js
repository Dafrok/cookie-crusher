function getDOM(id) {
    return document.querySelector(id)
}

var flags = {
    autoClick: false,
    autoBonus: false,
    autoUpgrade: false
}

var btnAutoClick = getDOM('#auto-click')
var btnAutoBonus = getDOM('#auto-bonus')
var btnAutoUpgrade = getDOM('#auto-upgrade')

btnAutoClick.onclick = function () {
    if (flags.autoClick) {
        btnAutoClick.classList.remove('active')
    } else {
        btnAutoClick.classList.add('active')
    }
    flags.autoClick = !flags.autoClick
}

btnAutoBonus.onclick = function () {
    if (flags.autoBonus) {
        btnAutoBonus.classList.remove('active')
    } else {
        btnAutoBonus.classList.add('active')
    }
    flags.autoBonus = !flags.autoBonus
}

btnAutoUpgrade.onclick = function () {
    if (flags.autoUpgrade) {
        btnAutoUpgrade.classList.remove('active')
    } else {
        btnAutoUpgrade.classList.add('active')
    }
    flags.autoUpgrade = !flags.autoBonus
}
