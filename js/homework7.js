/* 1.	Напишите функцию, которая переупорядочивает цифры каждого числового элемента в массиве в порядке возрастания (asc) или убывания (desc).
reorderNums([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]
reorderNums ([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
reorderNums ([63251, 78221], "asc") ➞ [12356, 12278]
reorderNums ([63251, 78221], "desc") ➞ [65321, 87221]
reorderNums ([1, 2, 3, 4], "asc") ➞ [1, 2, 3, 4]
reorderNums ([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4] */


function reorderNums(arr, str) {
    var obj = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };
    if(!obj[str]) {
        return arr;
    }
    return arr.reduce((sum, item) => {
        var a = Array.from(String(item), Number);
        var v = a.sort(obj[str]).join('');
        sum.push(Number(v));
        return sum;
    }, []);
}

console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
console.log(reorderNums([515, 341, 98, 44, 211], "desc"));
console.log(reorderNums([63251, 78221], "asc"));
console.log(reorderNums([63251, 78221], "desc"));
console.log(reorderNums([1, 2, 3, 4], "asc"));
console.log(reorderNums([1, 2, 3, 4], "desc"));


/* 2.	Напишите функцию, которая принимает закодированную строку и возвращает объект в соответствии со следующим примером:
parseCode("John000Doe000123") ➞ {  firstName: "John",  lastName: "Doe",  id: "123"}
parseCode("michael0smith004331") ➞ {  firstName: "michael",  lastName: "smith",  id: "4331"}
parseCode("Thomas00LEE0000043") ➞ {  firstName: "Thomas",  lastName: "LEE",  id: "43"} */


function parseCode(str) {
    var arr = str.split('0');
    var obj = {};
    arr = arr.filter(Boolean);
    arr.forEach(item => {
        obj.firstName = arr[0];
        obj.lastName = arr[1];
        obj.id = arr[2];
    });
    console.log(obj);
}

parseCode("John000Doe000123");
parseCode("michael0smith004331");
parseCode("Thomas00LEE0000043");


function parseCode(str) {
    let NewArr2Values = [];
    let arr = str.split("0");
    let obj = {};
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
            NewArr2Values.push(arr[i]);
        };
    };
    obj.firstName = NewArr2Values[0];
    obj.lastName = NewArr2Values[1];
    obj.id = NewArr2Values[2];
    return obj;

}

console.log(parseCode("John000Doe000123"));
console.log(parseCode("michael0smith004331"));
console.log(parseCode("Thomas00LEE0000043"));


/* 3. Создайте функцию, которая принимает массив в качестве аргумента и возвращает истину или ложь в зависимости от того, является ли среднее всех элементов в массиве целым числом или нет.
isAvgWhole([1, 3]) ➞ true
isAvgWhole([1, 2, 3, 4]) ➞ false
isAvgWhole([1, 5, 6]) ➞ true
isAvgWhole([1, 1, 1]) ➞ true
isAvgWhole([9, 2, 2, 5]) ➞ false */


function isAvgWhole(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % arr.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));


/* 4. Дан массив чисел, верните массив, содержащий все четные числа в исходном массиве, который также имеет четные индексы.
getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
 */

function getOnlyEvens(arr) {
    var result = arr.filter(function (item, index) {
        if (item % 2 === 0 && index % 2 === 0) {
            return true;
        }
    });
    console.log(result);
}

getOnlyEvens([1, 3, 2, 6, 4, 8]);
getOnlyEvens([0, 1, 2, 3, 4]);
getOnlyEvens([1, 2, 3, 4, 5]);
