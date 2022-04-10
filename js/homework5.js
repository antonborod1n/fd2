/* N.5 Домашнее задание VOWELS */

/* 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
    Спросить у пользователя строку. 
    Вывести в консоль количество русских гласных букв в ней.
•	с использованием метода массива forEach,
•	с использованием метода массива filter,
•	с использованием метода массива reduce. */


//-------------FOREACH

var a = prompt('Введите слово?');
var userArr = a.toLowerCase().split('');

function сheckLetter(userArr) {
    var letter = 'аоиеёэыуюя';
    var count = 0;
    userArr.forEach(function(item) {
        if (letter.includes(item))
            count++;
    });
    return count;
}

console.log(сheckLetter(userArr));

//-------------FILTER

function сheckLetter(userArr) {
    var letter = 'аоиеёэыуюя';
    var count = 0;

    userArr.filter(function(item){
        if (letter.includes(item))
            count++;
    });
    return count;
} 

console.log(сheckLetter(userArr)); 

//-------------REDUCE

function сheckLetter(userArr) {
    var letter = 'аоиеёэыуюя';

    var b = userArr.reduce(function(sum, item){
        if(letter.includes(item)) {
            sum++;
        }
        return sum;
    }, 0);
    console.log(b);
}

сheckLetter(userArr);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*  2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача -
создать объект, отображающий каждого человека по его роду занятий.

var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

combineNameWork (names, jobs) ➞ {
Max: "Butcher",
Vera: "Programmer",
Joe: "Doctor",
Annette: "Teacher",
Sussan: "Lecturer"
}  */

//Два массива имеют одинаковую длину.
//Индекс имени в массиве имен совпадает с индексом работы человека в массиве вакансий, как показано в таблице выше.


var names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];
let combineNameWork = {};

for (let i = 0; i <= 4; i++) {
	combineNameWork[names[i]] = jobs[i];
}

console.log(combineNameWork);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 3.	У вас есть входной массив (из строк с двумя буквами) и массив слов
Напишите функцию, которая возвращает true, если каждую строку из первого массива можно найти хотя бы один раз в массиве слов.

canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" не найден ни в одном из слов.
canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false */

function canFind(arr1, arr2) { 
    var result = arr1.every(item => arr2.some(elem => elem.includes(item)));
    return result; 
} 

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])); 
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])); 
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])); 
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));
