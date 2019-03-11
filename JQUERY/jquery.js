// $ (function () {
//     // console.log('Hello, world!');
// $ ("li.active").addClass("border-red");
// $("li").addClass("textUpper");

// $ ("li.active").addClass("fontColor");
// $("li.second").addClass("middle")

// });

$ (function (){

    $('img').each(function(index, element) {
        // $(element).attr('src', 'img/' + index);
        // $(element).attr('with, index*150');
        $(element).attr("src", "img/bird" + index+".png");
        //$(element).attr('width', index*150);
    });
    //$('div').before('<p>Amazing Gallery</p>');
});