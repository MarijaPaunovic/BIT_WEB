// VEZBA 1

// $ (function () {
//     // console.log('Hello, world!');
// $ ("li.active").addClass("border-red");
// $("li").addClass("textUpper");

// $ ("li.active").addClass("fontColor");
// $("li.second").addClass("middle")

// });


// VEZBA 2

// $(function () {

//     $('img').each(function (index, element) {
//         $(element).attr("src", "img/bird" + index + ".jpg");
//         // $(element).attr('width', index * 50);
//         var number = 100 + Math.floor(Math.random() * 300);
//         console.log(number)
//         $(element).attr('width', number);

//         if (number < 200) {
//             $(element).css('border', '1px solid green');
//             return;
//         }
//     });
//     $('div').before('<p>Amazing Gallery</p>');
// });


// VEZBA 3 - SOCCER PLAYER drugi fajl

// VEZBA 4

$(function () {

    $('img').each(function (index, element) {
        $(element).attr("src", "img/bird" + index + ".jpg");
        $(element).width('.picture-width');
    });
    $('.imageGallery img:nth-child(2)').addClass('selected');


    function redBorder() {
        $('img.selected').removeClass('selected');

        $('.imageGallery2').children('img:nth-child(2)').addClass('selected');

    }
    redBorder();

    $('div').before('<p>Amazing Gallery</p>');
});

// 