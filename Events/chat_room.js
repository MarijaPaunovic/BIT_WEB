// VEZBA 1

var submitButton = document.querySelector('button');

submitButton.onclick = function () {
    var textInputValue = document.querySelector(".text-msg").value;

    if (textInputValue.length) {
        var message = document.createElement('p');

        message.textContent = textInputValue;

        document.querySelector(".input-container").appendChild(message);
    }
}
