const twitchPipContextMenu = {
    id: 'twitch-pip',
    title: 'Twitch PIP - Enable',
    type: 'normal',
    contexts: ['page'],
}

chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create(twitchPipContextMenu);
});

chrome.contextMenus.onClicked.addListener(function (menuItem, tab) {
    if (menuItem.menuItemId === twitchPipContextMenu.id) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["/src/scripts/twitch-pip.js"],
        })
    }
})