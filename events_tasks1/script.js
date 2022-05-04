//1
function imgSize1() {
    var img = document.querySelectorAll('.club-image  img');
    img[0].style.cssText = 'width: 540px; height: 540px; transition: all .3s;';
}

function imgSize2() {
    var img = document.querySelectorAll('.club-image  img');
    img[1].style.cssText = 'width: 540px; height: 540px; transition: all .3s;';
}

function imgSize3() {
    var img = document.querySelectorAll('.club-image  img');
    img[2].style.cssText = 'width: 540px; height: 540px; transition: all .3s;';
}

//2

function btnChange1(){
    var a = prompt('Введите название кнопки');
    var b = document.querySelectorAll('.btn');
    b[0].innerHTML = a;
}

function btnChange2(){
    var a = prompt('Введите название кнопки');
    var b = document.querySelectorAll('.btn');
    b[1].innerHTML = a;
}

function btnChange3(){
    var a = prompt('Введите название кнопки');
    var b = document.querySelectorAll('.btn');
    b[2].innerHTML = a;
}


//3

function arrowsLeft() {
    var arrowLeft = document.getElementById('arrow-left');
    var c = document.querySelector('.col');

    c.style.cssText = 'float:left;';
}

function arrowsRight() {
    var arrowRight = document.getElementById('arrow-right');
    var c = document.querySelector('.col');

    c.style.cssText = 'float:right;';
}