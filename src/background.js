chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    initialize(tabId)
})

chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
    initialize(tabId)
})

function initialize(tabId){
    chrome.tabs.executeScript(tabId, {file: "content.js", allFrames: true})
}
