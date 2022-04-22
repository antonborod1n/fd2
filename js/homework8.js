function HashStorageFunc() {

    let _obj = {};

    this.addValue = function () {
        var name = prompt("введите название напитка");
        var isAlc = prompt("он алкогольный?")
        var structure = prompt("способ приготовления");
        _obj[name] = name;
        _obj[isAlc] = isAlc;
        _obj[structure] = structure;

    };
    this.getValue = function () {

    };
    this.deleteValue = function () {

    };
    this.getKeys = function () {

    };
    
}

var drinkStorage = new HashStorageFunc();

