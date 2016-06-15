chrome.runtime.onConnect.addListener(function (port) {
    console.log(port)
    port.onMessage.addListener(function (msg) {
        console.log(msg)
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
