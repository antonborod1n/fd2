
//1

function changeContent1() {
    var changeImg = document.getElementsByTagName('img')[1].src = "./images/cat1.jpg";
    var changeTitle = document.querySelector('.card-content p');
    var changeSubTitle = document.querySelector('.card-title');

    changeTitle.innerHTML = 'I am a beautiful cat №1';
    changeSubTitle.textContent = 'Cat1';
}

function changeContent2() {
    var changeImg = document.getElementsByTagName('img')[1].src = "./images/cat2.jpg";
    var changeTitle = document.querySelector('.card-content p');
    var changeSubTitle = document.querySelector('.card-title');

    changeTitle.innerHTML= 'Hello my name is cat №2)';
    changeSubTitle.textContent = 'Cat2';
}

function changeContent3() {
    var changeImg = document.getElementsByTagName('img')[1].src = "./images/cat3.jpg";
    var changeTitle = document.querySelector('.card-content p');
    var changeSubTitle = document.querySelector('.card-title');

    changeTitle.innerHTML = 'I am a tiger №3 - I love to swim ';
    changeSubTitle.textContent = 'Cat3';
}

//2

function addNewCat() {
    var namePet = prompt('Name');
    var countryPet = prompt('Country');
    var birthPet = prompt('Year of birth');

    var add = document.getElementById('cat-info');
    var tr = document.createElement('tr');
    var a = add.append(tr);
    
    tr.innerHTML = `<td>${namePet}</td><td>${countryPet}</td><td>${birthPet}</td>`;
}

//3

function theme() {
    var img = document.getElementsByTagName('img')[0];
    var chageTextColor = document.getElementsByTagName('body');

    img.src="./images/moon.svg";
    chageTextColor[0].style.backgroundColor = '#1d1d1d';

    for(var i = 0; i < chageTextColor.length; i++) {
        chageTextColor[i].style.color = '#FFFFFF';
    }
}


