var conn = chrome.runtime.connect({
    name: "CookieCrusher"
})

function getDOM(id) {
    return document.querySelector(id)
}

var flags = {
    autoClick: false, // !!localStorage.getItem('autoClick'),
    autoBonus: false, // !!localStorage.getItem('autoBonus'),
    autoUpgrade: false //!!localStorage.getItem('autoUpgrade')
}

var btnAutoClick = getDOM('#auto-click')
var btnAutoBonus = getDOM('#auto-bonus')
var btnAutoUpgrade = getDOM('#auto-upgrade')

// function initBtn(btn, name) {
//     if (flags[name]) {
//         btn.classList.add('active')
//     } else {
//         btn.classList.remove('active')
//     }
// }

// initBtn(btnAutoClick, 'autoClick')
// initBtn(btnAutoBonus, 'autoBonus')
// initBtn(btnAutoUpgrade, 'autoUpgrade')

btnAutoClick.onclick = function () {
    conn.postMessage('auto-click')
    if (flags.autoClick) {
        // localStorage.setItem('autoClick', '')
        btnAutoClick.classList.remove('active')
    } else {
        // localStorage.setItem('autoClick', 'true')
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
