/* function HashStorageFunc() {
    let obj = {};

    this.addValue = function (key, value) {
        obj[key] = value;
    };
    this.getValue = function (key) {
        key = prompt('Название коктейля: ');
        if (key in obj) {
            alert('Напиток: ' + key + ' ' + 'Алкогольный: ' + obj.value);
        }
        else {
            alert('Такого коктейля в списке нет');
        }
    };
    this.deleteValue = function (key) {
        key = prompt('Название коктейля: ');
        if (key in obj) {
            delete obj[key];
            alert('Удален');
            console.log('true');
        }
        else {
            alert('Такого коктейля в списке нет');
            console.log('false');
        } 
    };
    this.getKeys = function (key) {
        for (key in obj) {
            alert(key);
        }
    };

    console.log(obj);
}

var drinkStorage = new HashStorageFunc();

var name = prompt("введите название напитка");
var isAlc = prompt("он алкогольный?");
var structure = prompt("способ приготовления");
var result = isAlc + " " + structure;

drinkStorage.addValue(name, result); */






