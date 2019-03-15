// CATS

// var getImage = document.querySelector('#btn');

// getImage.addEventListener('click', handlerFunction);

// function addImage(data) {
//     var newImage = document.createElement('img');
//     var dataImg = data[0].url;
//     newImage.setAttribute('src', dataImg);
//     newImage.setAttribute("width", "300px");
//     document.querySelector('#image').appendChild(newImage);
// };

// function handlerFunction() {
//     var request = new XMLHttpRequest();
//     request.open('GET', "https://api.thecatapi.com/v1/images/search?format=json", true);
//     request.setRequestHeader("x-api-key", "6c540bf8-9750-4f99-9425-86ca502a3d13");

//     request.onload = function () {
//         if (request.status >= 200 && request.status < 400) {
//             // Success!
//             var data = JSON.parse(request.responseText);
//             console.log(data)

//             addImage(data);

//         } else {
//             // We reached our target server, but it returned an error

//         }
//     };

//     request.onerror = function () {
//         // There was a connection error of some sort
//     };

//     request.send();
// }



///////////////////  DOGS

var getImage = document.querySelector('#btn');

getImage.addEventListener('click', handlerFunction);

function addImage(data) {
    var newImage = document.createElement('img');
    var dataImg = data.message;
    newImage.setAttribute('src', dataImg);
    newImage.setAttribute("width", "300px");
    document.querySelector('#image').appendChild(newImage);
};

function handlerFunction() {
    var request = new XMLHttpRequest();
    request.open('GET', "https://dog.ceo/api/breeds/image/random", true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            var data = JSON.parse(request.responseText);
            console.log(data);

            addImage(data);

        }
    };
    request.send();
}

