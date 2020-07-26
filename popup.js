var channelArray = [];

var port = chrome.extension.connect({
    name: "Sample Communication"
});

var allInputs = document.querySelectorAll("input");

allInputs.forEach(function(input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            channelArray.push(input.value);
            console.log(channelArray);
        }
    });
});