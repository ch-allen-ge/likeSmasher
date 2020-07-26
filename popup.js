var channelArray = [];

var port = chrome.extension.connect({
    name: "Sample Communication"
});

var allInputs = document.querySelectorAll("input");
var allSaveButtons = document.querySelectorAll("button");

function createNewRow() {

}

function generateStaticRow() {
    
}

allInputs.forEach(function(input) {
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            channelArray.push(input.value);
            console.log(channelArray);
            $(this).parent().parent().replaceWith('<div>' + input.value + '</div>');
            //createNewRow
        }
    });
});

allSaveButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = $(this).parent().children('.t').children('input').val();
        channelArray.push(value);
        $(this).parent().replaceWith('<div>' + value + '</div>');
        console.log(channelArray);
        //createNewRow
    });
});