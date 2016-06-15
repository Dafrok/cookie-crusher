chrome.tabs.onCreated (function (tabId) {
    chrome.tabs.executeScript(tabId, {file: "content.js", allFrames: true})
})

// chrome.runtime.onConnect.addListener(function (port) {
//     console.log(port)
//     port.onMessage.addListener(function (msg) {
//         console.log(msg)
//     })
// })
