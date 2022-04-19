function HashStorageFunc() {

    let obj = {};

    this.addValue = function(key,value) {
        obj[key] = value;   
    };
} 

var drinkStorage = new HashStorageFunc();

var name = prompt("введите название напитка");
var isAlc = prompt("он алкогольный?")
var structure= prompt("способ приготовления");
var result = isAlc + " " + structure;

drinkStorage.addValue(name, result);

console.log(drinkStorage);








/* let obj = {};

function addValue() {
    var drink = prompt('Введите название напитка');
    var d1 = confirm('Он алкогольный?');
    var d2 = prompt('Введите рецепт его приготовления');
    
    obj.nam = d;
    obj.alc = d1;
    obj.rec = d2;
    return obj;
}

console.log(obj);

function getValue() {
    var d = prompt('Введите название напитка');
    if(d === arr) {
        alert(d);
    } else {
        alert('Такой напиток отсутствует');
    }
}

function deleteValue() {
    var drink = prompt('Введите название напитка');
    deleteDrink(drink);
}

function deleteDrink(drink) {
    delete obj[nam];
}

function getKeys() {
    alert('Все напитки');
} */