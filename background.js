'use strict';

chrome.runtime.onInstalled.addListener(function() {
    console.log('Im in');

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.youtube.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

// chrome.extension.onConnect.addListener(function(port) {
//     console.log("Connected .....");
//     port.onMessage.addListener(function(msg) {
//          console.log("channel recieved" + msg);
//     });
// })