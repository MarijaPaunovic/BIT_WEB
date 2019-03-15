
var inputField = document.querySelector('.search');
var container = document.querySelector('.imgContainer');



var newText = document.createElement('p');


$(".search").on("keydown", function (event) {
    if (event.keyCode === 13) {

        event.preventDefault();

        // event.setRequestHeader('Accept: application / vnd.github.v3' + json);

        $.ajax({
            url: "https://api.github.com/search/users?q=" + inputField.value,
            headers: {
                "Accept": "application/vnd.github.v3+json"
            }


        }).done(function (data) {

            console.log(data);

            for (var i = 0; i < data.items.length; i++) {
                var dataImg = data.items[i].avatar_url;

                var newImage = document.createElement('img');

                newImage.setAttribute('src', dataImg);
            }

        });
    }

});


