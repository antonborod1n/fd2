/* N.6 Домашнее задание ARRAY_TASKS
1.	Напишите функцию, которая создает объект, в котором каждая пара (ключ, значение) представляет собой (нижний, верхний регистр) версии буквы, соответственно.
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" } */

function mapping(arr) {
  let obj = {};
  arr.forEach(item => {
    obj[item] = item.toUpperCase();
  });
  return obj;
}

console.log(mapping(["p", "s"]));
console.log(mapping(["a", "b", "c"]));
console.log(mapping(["a", "v", "y", "z"]));

/* 2.	Напишите функцию, которая принимает массив учеников и возвращает массив их главных заметок. Если у ученика нет заметок, предположим, пусть главная заметка будет равна 0.
            getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    }
]) ➞ результат [5, 5, 4] */

//Нужно попробовать сделать с использованием метода map и reduce.
//В качестве альтернативы используйте Math.max вместо reduce.

function getStudentTopNotes(arr) {
  const arrNew = [];
  arr.map((item) => {
    arrNew.push(item.notes.reduce((sum, elem) => {
      if (elem > sum) sum = elem;
      return sum;
    }, 0));
  });
  return arrNew;
}

console.log(getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]));

/* 3.	Первый массив arr1 содержит некоторые числа, а второй массив arr2 содержит квадраты значений чисел, заданных в первом массиве.
Напишите функцию, которая берет эти два массива и возвращает true, если доступны все квадратные значения во втором массиве из первого, иначе false.

simpleCompare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) ➞ true
simpleCompare([4, 4], [1, 31]) ➞ false
simpleCompare([2, 2, 3], [4, 4, 9]) ➞ true */

function simpleCompare(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i] ** 2)) {
      return 'true';
    }
    else {
      return 'false';
    }
  }
}
console.log(simpleCompare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(simpleCompare([4, 4], [1, 31]));
console.log(simpleCompare([2, 2, 3], [4, 4, 9]));

/* 4.	Напишите функцию, которая принимает строку в качестве аргумента и преобразует первый символ каждого слова в верхний регистр. Верните вновь отформатированную строку.
makeTitle("This is a title") ➞ "This Is A Title"
makeTitle("capitalize every word") ➞ "Capitalize Every Word"
makeTitle("I Like Pizza") ➞ "I Like Pizza"
makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA" */

function makeTitle(str) {
  let a = '';
  for (let key of str.split(' ')) {
    a = a + String(key.replace(key[0], key[0].toUpperCase())) + " ";
  }
  return a;
}

console.log(makeTitle("This is a title"));
console.log(makeTitle("capitalize every word"));
console.log(makeTitle("I Like Pizza"));
console.log(makeTitle("PIZZA PIZZA PIZZA"));




