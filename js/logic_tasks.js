/* 1.  Напишите функцию для склеивания подмассивов в один массив. 
(Предположим, что в прототипе массива есть метод .flat (), но мы его не знаем). Другими словами, нужно преобразовать это: [[1, 2], [3, 4]] в [1, 2, 3, 4].
flatten([[1, 2], [3, 4]]) ➞ [1, 2, 3, 4]
flatten([["a", "b"], ["c", "d"]]) ➞ ["a", "b", "c", "d"]
flatten([[true, false], [false, false], [true, true] ]) ➞ [true, false, false, false, true, true] */


function flatten(arr) {
    var a = arr.toString().split(',');
    console.log(a);
}

flatten([[1, 2], [3, 4]]);
flatten([["a", "b"], ["c", "d"]]);
flatten([[true, false], [false, false], [true, true]]);


/* 2. Для объекта людей и их возраста верните, сколько лет будет людям по прошествии n лет. Используйте абсолютное значение n(т.е. больше 0).
afterNYears({  "Joel" : 32,  "Fred" : 44,  "Reginald" : 65,  "Susan" : 33,  "Julian" : 13}, 1) ➞ {  "Joel" : 33,  "Fred" : 45,  "Reginald" : 66,  "Susan" : 34,  "Julian" : 14}
afterNYears({  "Baby" : 2,  "Child" : 8,  "Teenager" : 15,  "Adult" : 25,  "Elderly" : 71}, 19) ➞ {  "Baby" : 21,  "Child" : 27,  "Teenager" : 34,  "Adult" : 44,  "Elderly" : 90}
afterNYears({  "Genie" : 1000,  "Joe" : 40}, 5) ➞ {  "Genie" : 1005,  "Joe" : 45} */

function afterNYears(obj, num) {
    var a = obj.reduce((sum, item) => {
        return obj.item;
    });
}

console.log(afterNYears({ "Joel": 32, "Fred": 44, "Reginald": 65, "Susan": 33, "Julian": 13 }, 1));
console.log(afterNYears({ "Baby": 2, "Child": 8, "Teenager": 15, "Adult": 25, "Elderly": 71 }, 19));
console.log(afterNYears({ "Genie": 1000, "Joe": 40 }, 5));


/* 3. Создайте функцию, которая возвращает true, если меньшие массивы могут объединяться для формирования целевого массива, и false в противном случае.
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false//  Повторяющиеся семерки не найдены в целевом массиве.
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false// Отсутствует 6 в целевом массиве. */
