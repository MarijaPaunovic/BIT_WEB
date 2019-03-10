var grass = document.querySelector('.container');
var mario = document.querySelector('.marioStand');
var marioRunning = document.querySelector('.marioRunning');

document.addEventListener('keydown', startRunning);
document.addEventListener('keyup', stopRunning);

var step = 0;
var intervalX;

function moveBackground() {
    step -= 10;
    grass.style.backgroundPositionX = step + "px";
};

function startRunning (event) { // Right arrow
    if (event.keyCode === 39) {
        if (!intervalX) {
          marioRunning.style.display = "block";
          mario.style.display = "none";
          intervalX = setInterval(moveBackground, 10);
          }
    }
    if (event.keyCode === 37) { // Left arrow
        if (!intervalX) {
            marioRunning.style.display = "block";
            marioRunning.style.transform = "scaleX(-1)";
            mario.style.display = "none";
            intervalX = setInterval(moveBackground, -100);
        }
    }
    if (event.keyCode === 38) { // Up arrow
        mario.setAttribute("id", "marioJump");
      }
    if (event.keyCode === 40) {
        mario.setAttribute("id", "marioCrouch");
      }
};

function stopRunning () {  // Down arrow
    mario.removeAttribute("id", "crouch");
    if (intervalX) {
        marioRunning.style.display = "none";
        mario.style.display = "block";
        marioRunning.style.transform = "";
        clearInterval(intervalX);
        intervalX = null;
    }
};

