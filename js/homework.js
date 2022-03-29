'use strict'; /*- объявляем что будем работать в новом режиме */

//ПЕРВАЯ ДОМАШНЯЯ РАБОТА

/* 
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

 */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

/* N.2 Домашнее задание FUNCTIONS_AND_ARRAYS */

/* 1. Напишите функцию, которая принимает массив целых чисел и строк. Преобразуйте целые числа в строки и верните новый массив.
convertElements([1, 2, "x", "z"]) ➞ ["1", "2", "x", "z"]
convertElements(["pdf", 123, "def", 456]) ➞ ["pdf", "123", "def", "456"]
convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
convertElements([]) ➞ [] */

/* function convertElements(arr) {
    for(var i = 0; i < arr.length; i++){
        
    }
    return arr;
}

console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([])); */

/* 2. Создайте функцию, которая возвращает количество " true” значений в массиве.
 numericTrue([true, false, false, true, false]) ➞ 2
 numericTrue ([false, false, false, false]) ➞ 0
 numericTrue ([]) ➞ 0
//Вернуть 0, если дан пустой массив.
//Все элементы массива имеют тип bool (true или false). */

/* function numericTrue(arr) {
    var a = 0;
    var b = 0;
    for(var i = 0; i < arr.length; i++);
    if (arr[i] === true) {
        a++;
    }
    return a;
}

console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue ([false, false, false, false]));
console.log(numericTrue ([])); */

/* 3. Вернуть наибольшее и наименьшее числа
Создайте функцию, которая принимает массив чисел, и возвращает наибольшее и наименьшее число.
highLow([1, 2, 3, 4, 5]) ➞ 5, 1
highLow([1, 2, -3, 4, 5]) ➞ 5. -3
highLow([1, 9, 3, 4, –5]) ➞ 9, -5
highLow([13]) ➞ 13, 13
 */

function highLow(arr) {

/*     var a = Math.max(arr[i]); */
    

    for(var i = 0; i < arr.length; i++) {
        var b = Math.min(arr[i]);
    }

    return b;
}

console.log(highLow([1, 2, 3, 4, 5]));
console.log(highLow([1, 2, -3, 4, 5]));
console.log(highLow([1, 9, 3, 4, -5])); 
console.log(highLow([13]));