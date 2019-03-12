// VEZBA 3

// var soccerField = document.querySelector('.bodyDiv');
// var player = document.querySelector('#player');

// soccerField.onclick = function (event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     player.style.left = x + 'px';
//     player.style.top = y + 'px';
// }

// var stopButton = document.querySelector('button');

// stopButton.onclick = function (event) {
//     event.removeEventListener();
// }


$(function () {
    function movePlayer(event) {
        $('#player').css('left', event.clientX + 'px');
        $('#player').css('top', event.clientY + 'px');
    }

    $('.bodyDiv').on('click', movePlayer);

    $('button').on('click', function () {
        $('.bodyDiv').off('click', movePlayer);
    })

})