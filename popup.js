var port = chrome.extension.connect({
    name: "Sample Communication"
});

document.getElementById('theForm').addEventListener('submit', function() {
    console.log('triggered');
    port.postMessage(document.getElementById('channelName').value);
});

// port.onMessage.addListener(function(msg) {
//     console.log("message recieved" + msg);
// });