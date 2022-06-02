//Домашнее задание №18 LOGIC_TASKS

//1
var obj = {
    a8: "белый", b8: "черный", c8: "белый", d8: "черный", e8: "белый", f8: "черный", g8: "белый", h8: "черный",
    a7: "черный", b7: "белый", c7: "черный", d7: "белый", e7: "черный", f7: "белый", g7: "черный", h7: "белый",
    a6: "белый", b6: "черный", c6: "белый", d6: "черный", e6: "белый", f6: "черный", g6: "белый", h6: "черный",
    a5: "черный", b5: "белый", c5: "черный", d5: "белый", e5: "черный", f5: "белый", g5: "черный", h5: "белый",
    a4: "белый", b4: "черный", c4: "белый", d4: "черный", e4: "белый", f4: "черный", g4: "белый", h4: "черный",
    a3: "черный", b3: "белый", c3: "черный", d3: "белый", e3: "черный", f3: "белый", g3: "черный", h3: "белый",
    a2: "белый", b2: "черный", c2: "белый", d2: "черный", e2: "белый", f2: "черный", g2: "белый", h2: "черный",
    a1: "черный", b1: "белый", c1: "черный", d1: "белый", e1: "черный", f1: "белый", g1: "черный", h1: "белый"
};

function chessBoard(square) {
    return obj[square];
}

console.log(chessBoard("a1"));
console.log(chessBoard("e5"));
console.log(chessBoard("d1"));


//2

function mirror(arr) {
    let firstArr = arr.reverse().slice(1);
    let secondArr = arr.reverse();
    let result = [...secondArr, ...firstArr];

    return result;
}

console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5]));
console.log(mirror([3, 5, 6, 7, 8]));


//3

function isDisarium(num) {
    var sum = 0;
    var str = num.toFixed();
    for (var i = 0; i < str.length; i++) {
        var c = str[i] ** [i + 1];
        sum += c;
    }
    if (num == sum) {
        return true;
    } else {
        return false;
    }
}
console.log(isDisarium(75));
console.log(isDisarium(135));
console.log(isDisarium(8));
console.log(isDisarium(466));