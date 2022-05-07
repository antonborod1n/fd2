function HashStorageFunc() {
    let obj = {};

    this.addValue = function (key, value) {
        obj[key] = value;
    };
    this.getValue = function (key) {
        if (key in obj) {
            console.log('Напиток: ' + key + ' ' + 'алкогольный: ' + obj[key]);
        }
        else {
            console.log('Такого коктейля в списке нет');
        }
    };
    this.deleteValue = function (key) {
        if (key in obj) {
            delete obj[key];
            console.log('Удален');
        }
        else {
            console.log('Такого коктейля в списке нет');
        } 
    };
    this.getKeys = function (key) {
        for (key in obj) {
            console.log(key);
        }
    };
    console.log(obj);
}

var drinkStorage = new HashStorageFunc();

function add() {
    var name = prompt('Введите название напитка');
    var isAlc = prompt('Он алкогольный?');
    var structure = prompt('Способ приготовления');
    var result = isAlc + ' рецепт приготовления: ' + structure;
    drinkStorage.addValue(name, result );
}

function get() {
    var key = prompt('Введите название напитка');
    drinkStorage.getValue(key);
}

function del() {
    var key = prompt('Введите название напитка');
    drinkStorage.deleteValue(key);
}

