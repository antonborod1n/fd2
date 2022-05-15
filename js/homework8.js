function HashStorageFunc() {
    let obj = {};

    this.addValue = function (key, value) {
        obj[key] = value;
    };
    this.getValue = function (key) {
        if (key in obj) {
            return 'Напиток: ' + key + ' ' + 'алкогольный: ' + obj[key];
        }
        else {
            return 'Такого коктейля в списке нет';
        }
    };
    this.deleteValue = function (key) {
        if (key in obj) {
            delete obj[key];
            return 'Удален';
        }
        else {
            return 'Такого коктейля в списке нет';
        } 
    };
    this.getKeys = function (key) {
        for (key in obj) {
            return key;
        }
    };
}

var drinkStorage = new HashStorageFunc();

function add() {
    var name = prompt('Введите название напитка');
    var isAlc = prompt('Он алкогольный?');
    var structure = prompt('Способ приготовления');
    var result = isAlc + ' рецепт приготовления: ' + structure;
    drinkStorage.addValue(name, result);
}

function get() {
    var key = prompt('Введите название напитка');
    drinkStorage.getValue(key);
}

function del() {
    var key = prompt('Введите название напитка');
    drinkStorage.deleteValue(key);
}
