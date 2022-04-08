'use strict';   /*- объявляем что будем работать в новом режиме */

/* 1. Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут быть числами или снова массивами, и так до любого уровня.
Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
При написании функции не описывать каких-либо вложенных в неё функций.
Проверить работу функции можно на следующем массиве (сумма 50): */

function treeSum(arr) {
	var sum = 0;
	
	for (let key of arr) {
		if (typeof key === 'object') {
			sum += treeSum(key);
		} else {
			sum += key;
		}
	}
	return sum;
}

console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, [] ],1, 8]));


/* 2. Создайте функцию, которая принимает число как строку n и возвращает число без конечных и стартовых нулей.
Конечные нули - это нули после десятичной точки, которые не влияют на значение (например, последние три нуля в 6.7000 и 6.07000).
Стартовые нули - это нули перед целым числом, которые не влияют на значение (например, первые три нуля в 000427 и 000930).

removeLeadingTrailing("190.000") ➞ "190"
removeLeadingTrailing("00803") ➞ "803"
removeLeadingTrailing("07.1200") ➞ "7.12"
removeLeadingTrailing("90") ➞ "90" */

//Вернуть строку.
//Если вы получаете число с .0 в конце, верните целочисленное значение (например, верните «4», а не «4,0»).
//Если число 0, 0,0, 000, 00,00 и т. Д. ... верните «0».

function removeLeadingTrailing(str) {
	var a = Number(str);
	console.log(a);
}

removeLeadingTrailing("190.000");
removeLeadingTrailing("00803");
removeLeadingTrailing("07.1200");
removeLeadingTrailing("90");
removeLeadingTrailing("6.7000"); 
removeLeadingTrailing("6.07000");
removeLeadingTrailing("000427");
removeLeadingTrailing("000930");
removeLeadingTrailing("4.0");
removeLeadingTrailing("0");
removeLeadingTrailing("0.0");
removeLeadingTrailing("000");
removeLeadingTrailing("000.000");
 