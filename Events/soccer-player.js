// VEZBA 2

var soccerField = document.querySelector('.bodyDiv');
var player = document.querySelector('#player');

soccerField.onclick = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    player.style.left = x + 'px';
    player.style.top = y + 'px';
}

var stopButton = document.querySelector('button');

stopButton.onclick = function (event) {
    event.removeEventListener();
}
