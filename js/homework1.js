'use strict'; /*- объявляем что будем работать в новом режиме */

//ПЕРВАЯ ДОМАШНЯЯ РАБОТА

let userName,
    surname,
    patr,
    userYear;

do {
    userName = prompt('Введите вашу фамилию?');
} while (userName == null || userName == '');

do {
    surname = prompt('Введите ваше имя?');
} while (surname == null || surname == '');

do {
    patr = prompt('Введите ваше отчетво?');
} while (patr == null || patr == '');

do {
    userYear = +prompt('Возраст в годах?');
} while (isNaN(userYear) || userYear == '');


let userGender = confirm('Ваш пол - мужской?');

let gender = (userGender) ? 'мужской' : 'женский';
let pens = (userYear > 65) ? 'да' : 'нет'; 

alert(`Ваше ФИО: ${userName} ${surname} ${patr} \nВаш возраст в годах: ${userYear} \nВаш возраст в днях: ${userYear * 365} \nЧерез 5 лет вам будет: ${userYear + 5} \nВаш пол: ${gender} \nВы на пенсии: ${pens}`);


