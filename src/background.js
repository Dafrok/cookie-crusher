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
    port.onError
})

console.log(localStorage.getItem('auto-click'))
