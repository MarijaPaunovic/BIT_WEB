// function selectSecondList (){
//     var element = document.querySelector(".second-list").classList = 'blue';
//     return element;
// }
// selectSecondList();

// function selectAllLi (){
//     var elementLi = document.querySelectorAll('li');

//     for (var i = 0; i < elementLi.length; i++){
//         elementLi[i].className = 'pink';
//     } 
// }
// selectAllLi();

// function thirdLi (){
//     var elLi = document.querySelectorAll('.third-list li');

//     for (var i = 0; i < elLi.length; i++){
//         elLi[i].className = 'blue';
//     } 
    
// }
// thirdLi();

///////////////// TRAVERSING //////////////////

// function selectFirstLi (){
//     var element = document.querySelector(".active");
//     element.classList.remove('active');
//     element = document.querySelector('.trav-first').firstElementChild;
//     console.log(element)
//     element.className = 'green';

// }
// selectFirstLi();

//////////// Access/Update Text Node ////////////

function navElement (){
    var element = document.querySelector(".navigation").firstElementChild.textContent;
    alert(element);
}
navElement();

function navSecondElement (argument) {
    document.querySelector(".navigation").lastElementChild.textContent = argument;
}
navSecondElement('Neki tekst');