'use strict'; /*- объявляем что будем работать в новом режиме */

/* Функция для вывода четных и нечетных чисел */

/* function num(arg) {
    if (arg % 2 == 0) {
        alert('Четные');
    } else {
        alert('Не четные');
    }
    return num;
}

console.log(num(100)); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//1.Напишите функцию max(a,b), которая возвращает наибольшее из чисел a и b.

/* function max(a, b) {
    if (a > b) {
        alert(a);
    } else {
        alert(b);
    }
}

max(44, 16); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//2.Написать функцию, которая вычисляет среднее арифметическое элементов , переданных ей в качестве аргументов. Пусть будет передано 3 аргумента.

/* function sum (a, b, c) {
    let x = ((a + b + c) / 3);
    alert(x);

}

sum (4, 8, 4); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//3.Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

/* function pow(x,n) {
    let summ = x ** n;
    alert(summ);
}

pow(2, 3); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//1. Создайте функцию,
//которая принимает два числа в качестве аргументов (num, length) и возвращает массив, каждый элемент которого кратный num, пока длина массива не достигнет length.

/* arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] */

//Обратите внимание, что num также включено в возвращаемый массив.

/*  function arrayOfMultiples(num, length) {
    var ar = [];
     for (var i = 0; i < length; i++) {
        ar.push(num * (ar.length +1));
     }
     return ar;
 }

 console.log(arrayOfMultiples(7, 5));
 console.log(arrayOfMultiples(12, 10));
 console.log(arrayOfMultiples(17, 6)); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//2. Учитывая число(в виде аргумента), верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше.

//Все числа должны быть целыми.
//Вы также можете ожидать отрицательные числа.

/* numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */

/* function numberSplit(numb) {
    var ar = [];
    if (numb % 2 === 0) {
        ar.push(numb/2);
        ar.push(numb/2);
    } else {
        var firstOperand = (numb/2) - 0.5;
        var secondOperand = (numb/2) + 0.5;
        ar.push(firstOperand);
        ar.push(secondOperand);
    }
    return ar;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9)); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Task1. Напишите функцию, которая для каждого элемента массива добавлять +1 к текущему числу.

/* incrementElements([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementElements([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementElements([-1, -2, -3, -4]) ➞ [0, -1, -2, -3] */

/* function incrementElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i]+=1;
    }
    return arr;
}

console.log(incrementElements([0, 1, 2, 3]));
console.log(incrementElements([2, 4, 6, 8]));
console.log(incrementElements([-1, -2, -3, -4])); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task2. Напишите функцию для отображения массива в обратном порядке.

// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

/* function reverse(arr) {
    var arrResult = [];
    for(var i = arr.length -1; i >= 0; i--) {
        arrResult.push(arr[i]);
    }
    return arrResult;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([])); */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task3. Создайте функцию, которая принимает два массива и вставляет второй массив в середину первого массива.

// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

//* Первый массив всегда состоит из двух элементов.
/* 
function tuckIn (arr1, arr2) {
    var lastElement = arr1[1];
    arr1.pop();

    for(var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    arr1.push(lastElement);

    return arr1;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); */

 //------------------------------------------------------------------------------------------------------------------------------------------------------------





 //4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444



 //1. Напишите функцию, которая принимает строку и возвращает строку, в которой каждый символ повторяется один раз.
// doubleElement("String") ➞ "SSttrriinngg"
// doubleElement("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleElement("1234!_ ") ➞ "11223344!!__  "
// Все тестовые примеры содержат допустимые строки. Пробелы, специальные символы или цифры также учитываем.


/* function doubleElement (str) {
    var arr = [];

    arr = str.split('');

    for(var i = 0; i < arr.length; i++) {
        arr[i] += arr[i];
    }

    console.log(arr.join(''));
}


doubleElement("String"); 
doubleElement("Hello World!");
doubleElement("1234!_ ");
 */

//2. Напишите функцию, которая перемещает все заглавные буквы в начало слова.

// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

//Сохраняйте исходный относительный порядок букв верхнего и нижнего регистра одинаковым.

/* function capToFront(str) {
    
}


capToFront("hApPy");
capToFront("moveMENT"); 
capToFront("shOrtCAKE");
 */


//3. Напишите функцию для замены всех экземпляров символа s1 на символ s2 и наоборот.

// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"
// doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"
// doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"







//4. Напишите функцию, которая возвращает массив строк, отсортированных по длине в порядке возрастания.

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []

//Строки будут иметь уникальную длину, поэтому не беспокойтесь о сравнении двух строк одинаковой длины.
//Вернуть пустой массив, если входной массив пуст

/* function sortByLength(arr) {
    
    arr.sort(function arraySort(arr2) {
        for(var i = 0; i < arr2.length; i++) {
            arr2[i] - arr2[i];
        }
    });

    console.log(arr);

}

sortByLength(["a", "ccc", "dddd", "bb"]);
sortByLength(["apple", "pie", "shortcake"]);
sortByLength(["may", "april", "september", "august"]);
sortByLength([]); */


/* function highAndLow(numbers){
    var arr = [];
    arr = numbers.split('');
    var a = Math.min.apply(null, arr);
    var b = Math.max.apply(null, arr);
    for(var i = 0; i < arr.length; i++) { 
      }
      console.log(a + "," + b);
  }
  */
  


/* function highAndLow(numbers) {
    var a = numbers.split(' ');
    for(var i = 0; i < a.length; i++) {
        var b = Math.max.apply(null, a);
        var c = Math.min.apply(null, a);
    }
    return console.log(b, c);
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");  */


/*1. Верните сумму всех элементов в массиве, где каждый элемент умножается на его индекс (отсчитываемый от нуля). Для пустых массивов верните 0.

indexMulSum([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMulSum([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)

 */

/* function indexMulSum(arr) {
  var a = arr.reduce(function(sum, item, index, arr){ 
    sum = sum + (item * index);
    return sum;
  }, 0);
  console.log(a);
}

indexMulSum([1, 2, 3, 4, 5]);
indexMulSum([-3, 0, 8, -6]); */



/* 2. Напишите функцию, которая принимает массив объектов (продуктов), который вычисляет общую цену и возвращает ее в виде числа. 
У продуктового объекта есть продукт, количество и цена, например:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

// 1 бутылка молока
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 бутылка молока & 1 коробка крупы
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 бутылки молока
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Несколько продуктов
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Немного конфет
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

 */

/* function getTotalPrice(arr) {
  var a = arr.reduce(function(sum, item) {
    sum.push(item.price);
    return sum;
  }, []);
  var b = a.reduce(function(summa, item) {
      return summa + item;
  });
  console.log(b);
}


getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]);

getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]);

getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]);

getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]);

getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]); */


/*

3. Напишите функцию, которая принимает массив элементов, удаляет все повторяющиеся элементы и возвращает новый массив в том же последовательном порядке, что и старый массив (за вычетом дубликатов).
*/
/*
removeDups([0, 1, 0, 1]) ➞ [0, 1]
removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
removeDups(["Tom", "Joe", "Tom"]) ➞ ["Tom", "Joe"]
*/

/* function removeDups(arr) {
  var a = arr.filter(function(item, pos) { 
    return arr.indexOf(item) == pos;
  });
  console.log(a);
}

removeDups([0, 1, 0, 1]);
removeDups(["The", "big", "cat"]);
removeDups(["Tom", "Joe", "Tom"]);
 */



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


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* .includes */

/* const test = 'abcfdvebwx2';

if(test.includes('fdv')) {
  console.log('yes');
} else {
  console.log('no'); 
}*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/* MAP */

/* const arr = [1, 9, 3, 4, -5];

let t = arr.map(function(item, index) {
    return Math.pow(item, 3);
});

console.log(t); */



//Постановка задачи: получить имена студентов и записать их заглавными буквами.

/* let studentRecords = [ 
          {name: 'John', id: 123, marks : 98 },
          {name: '   BabJoa', id: 101, marks : 23 },
          {name: 'yaga  ', id: 200, marks : 45 },
          {name: '  Wick ', id: 115, marks : 75 } ];
           */
/* 
MAP
let studentName = studentRecords.map(function(item) {
          item.name = item.name.toUpperCase().trim();
          return item;
});

console.log(studentName); 

*/

/* forEach

let names = [];
studentRecords.forEach(function(item) {
     names.push(item.name.toUpperCase());
})
console.log(names); */

/* let a = studentRecords.filter(function(item) {
  if(item.id > 105) {
    return true;
  }
  
});

let c = a.map(function(item) {
    return item.id * 3;
});

console.log(c); */





/* ЗАГОТОВКА */

//---EVERY

//найти число или букву

/* function numInStr(arr) { 
  var arr1 = []; 
  var arr2 = ['a', 'e', 'i', 'o', 'u'];
  var mum = arr.every(e=>arr2.every(r=>e.includes(r)? arr1.push(e):1));
  return arr1; 
} 

console.log(numInStr(["1a", "a", "2b", "b"])); 
console.log(numInStr(["abc", "abc10"])); 
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); 
console.log(numInStr(["this is a test", "test1"])); */


//---FILTER
// return true
//Найти и отсортировать

/* let studentRecords = [ 
  {name: 'John', id: 123, marks : 98 },
  {name: '   BabJoa', id: 101, marks : 23 },
  {name: 'yaga  ', id: 200, marks : 45 },
  {name: '  Wick ', id: 115, marks : 75 } ];

  let a = studentRecords.filter(item => (item.marks > 50)).sort((a, b) => b.marks - a.marks);
  console.log(a); */

//---REDUSE

//сумму всех элементов в массиве, где каждый элемент умножается на его индекс

/* function indexMulSum(arr) {
  var a = arr.reduce(function(sum, item, index, arr){ 
    sum = sum + (item * index);
    return sum;
  }, 0);
  console.log(a);
}

indexMulSum([1, 2, 3, 4, 5]);
indexMulSum([-3, 0, 8, -6]); */


//---MAP-- новый массив трансформация

/* let arr = [1, 2, 2, 3, 4, 5];

var b = arr.map(item => {
  return item * 3;
});

console.log(b); */