var flags = {
    get autoClick () {
        return !!localStorage.getItem('autoClick')
    },
    set autoClick (val) {
        localStorage.setItem('autoClick', val)
    },
    get autoBonus () {
        return !!localStorage.getItem('autoBonus')
    },
    set autoBonus (val) {
        localStorage.setItem('autoBonus', val)
    },
    get autoUpgrade () {
        return !!localStorage.getItem('autoUpgrade')
    },
    set autoUpgrade (val) {
        localStorage.setItem('autoUpgrade', val)
    }
}

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        switch (msg) {
            case 'auto-click':
                chrome.tabs.executeScript({code: 'toggleAutoClick()'})
                break
            case 'auto-bonus':
                chrome.tabs.executeScript({code: 'toggleAutoBonus()'})
                break
            case 'auto-upgrade':
                chrome.tabs.executeScript({code: 'toggleAutoUpgrade()'})
                break
        }
    })
})

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (tab.url === 'http://orteil.dashnet.org/cookieclicker/') {
//         chrome.tabs.executeScript({code: 'toggleAutoClick(true)'})
//     }
// })
