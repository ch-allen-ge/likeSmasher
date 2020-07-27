var channelArray = [];

// var port = chrome.extension.connect({
//     name: "Sample Communication"
// });

var allInputs = document.querySelectorAll("input");
var allSaveButtons = document.querySelectorAll("button");

function spanToText(text) {
    return ('<span style="display: flex; justify-content: center;">' + text + '</span>')
}

function saveData(listOfChannels) {
    chrome.storage.sync.set({'listOfChannels': listOfChannels}, function() {
        console.log('listOfChannels saved');
    });
}

function createNewRow() {
    $('#main').append('<div style="background-color: orange"><div class="t"><input type="text" class="channelName" id="channelName"/></div><button value="Save" id="Save">Save</button></div>');

    //listen for enter clicks
    document.getElementById('channelName').addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            channelArray.push(document.getElementById('channelName').value);
            $(this).parent().parent().replaceWith(spanToText(document.getElementById('channelName').value));
            createNewRow();
        }
    });
    
    //listen for button clicks
    document.getElementById('Save').addEventListener("click", function() {
        let value = $(this).parent().children('.t').children('input').val();
        channelArray.push(value);
        saveData(channelArray);
        $(this).parent().replaceWith('<span style="display: flex; justify-content: center;">' + value + '</span>');
        console.log(channelArray);
        createNewRow();
    });
}

allInputs.forEach(function(input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            channelArray.push(input.value);
            saveData(channelArray);
            $(this).parent().parent().replaceWith(spanToText(input.value));
            createNewRow();
        }
    });
});

allSaveButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = $(this).parent().children('.t').children('input').val();
        channelArray.push(value);
        saveData(channelArray);
        $(this).parent().replaceWith('<span style="display: flex; justify-content: center;">' + value + '</span>');
        console.log(channelArray);
        createNewRow();
    });
});

//MUST CLEAN UP CODE, THIS IS SO UGLY AND HARD CODED