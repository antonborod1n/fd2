//N.10 Домашнее задание LOGIC_TASKS

/* 1.  Напишите функцию сортировки, которая сортирует числа не по порядку номеров, а по их длине! Это означает сортировку чисел с наименьшим количеством цифр 
в первую очередь до чисел с наибольшим количеством цифр.
 
numbSort([2, 37, 1, 2, 739, 2]) ➞ [1, 2, 2, 2, 37, 739]
numbSort([777, 182, 11, 881, 27]) ➞ [11, 27, 777, 182, 881]
numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]) ➞ [5, 4, 3, 2, 1, 6, 1, 3, 18]
 */

function numbSort(arr) {
    var x = arr.sort((a, b) => {
        var c = String(a);
        var d = String(b);
        return c.length - d.length;
    });
    return x;
}

console.log(numbSort([2, 37, 1, 2, 739, 2]));
console.log(numbSort([777, 182, 11, 881, 27]));
console.log(numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]));


/* 2. Напишите функцию, которая сортирует слова по заданной строке.
В строке могут быть лишние буквы (см. Примеры #2 и #3).
В каждом массиве будут уникальные начальные буквы.

sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop")➞ [" coconut", " mandarin", " orange", " pear"]
sortStr(["middle", "junior", "senior"], "stnmj")➞ ["senior", " middle", " junior"]
sortStr(["bike", "car", "motorcycle"], "camrb")➞ ["car", "motorcycle", "bike"]
 */

function sortStr(arr) {

    arr.filter(function (item) {
        return arr;
    });
}

sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop");
sortStr(["middle", "junior", "senior"], "stnmj");
sortStr(["bike", "car", "motorcycle"], "camrb");


/* 
3. Есть строка, переверните все слова нечетной длины. Слова четной длины не изменяются.
revOddWord("Egg") ➞ "ggE"revOddWord ("It is false") ➞ "It is eslaf"revOddWord ("Dear Santa, give me a new iPhone”)➞ "Dear atnaS, give me a wen iPhone. " */


function revOddWord(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 1) {
            arr[i] = arr[i].split('').reverse().join('');
        }
    }
    var res = arr.join(' ');
    return res;
}

console.log(revOddWord("Egg"));
console.log(revOddWord("It is false"));
console.log(revOddWord('Dear Santa, give me a new iPhone'));




