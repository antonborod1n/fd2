/* N.5 Домашнее задание VOWELS */

/* 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
    Спросить у пользователя строку. 
    Вывести в консоль количество русских гласных букв в ней.
•	с использованием метода массива forEach,
•	с использованием метода массива filter,
•	с использованием метода массива reduce. */

/* var a = prompt('Введите слово?'); */
/* var userArr = a.toLowerCase().split('');  */

/* function сheckLetter(userArr) {
    var letterArr = ['а', 'у', 'о', 'и', 'э', 'ы'];
    var count = 0;

    userArr.forEach(function (item, index) {

        if(userArr.item === letterArr) {
            count++;
        }
    });
    console.log(count);
} */


/* function сheckLetter(userArr) {
    var letterArr = ['а', 'у', 'о', 'и', 'э', 'ы'];
    var count = 0;

    userArr.filter(function(el, index){


    });
} */

/* function сheckLetter(a) {
    var letter = 'аоиеёэыуюя';
    var count = 0;
    [...a].forEach(function(item) {
        if (letter.includes(item))
            count++;
    });
    return count;
}
 
console.log(сheckLetter(a)); */




//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



/* 2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача - 
создать объект, отображающий каждого человека по его роду занятий.

            var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
            var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

combineNameWork (names, jobs) ➞ {
Max: "Butcher",
Vera: "Programmer",
Joe: "Doctor",
Annette: "Teacher",
Sussan: "Lecturer"
} */

//Два массива имеют одинаковую длину.
//Индекс имени в массиве имен совпадает с индексом работы человека в массиве вакансий, как показано в таблице выше.

/* function f() {
    var names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
    var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];  
    var combineNameWork = {};
    if(names.length !== jobs.length) {
        return false;
    } else {
        return true;
    }
}
console.log(f()); */


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* 3.	У вас есть входной массив (из строк с двумя буквами) и массив слов
Напишите функцию, которая возвращает true, если каждую строку из первого массива можно найти хотя бы один раз в массиве слов
canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" не найден ни в одном из слов.
canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false */
 
/* function canFind(arr1, arr2) { 
    var a = arr1.every(r => arr2.some(e => e.includes(r)));
    return a; 
} 

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])); 
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])); 
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])); 
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])); */