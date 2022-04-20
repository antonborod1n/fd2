/* N.09 Домашнее задание Laptop_Ultrabook
1. Используйте прототипное наследование. Объявить класс под названием “Laptop”
2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер”, “год изготовления”, “размер ОЗУ”, “размер ПЗУ”, “масса”. Учтите, что сейчас ноутбуки выпускаются без дисководов, и также присутствует вебкамера. Есть метод который выводит количество «ОЗУ и ПЗУ». Есть метод, который выводит название и модель.
3. Класс “Ultrabook”. Есть свойства: “название”, “модель ”, “ серийный номер ”, “ год изготовления ”, “вес”, “размер ОЗУ”, “размер ПЗУ”. Учтите, что сейчас ультрабуки выпускаются без дисководов и есть вебкамера. Есть метод который выводит данные о названии, весе и год изготовления. Есть метод который выводит количество «ОЗУ и ПЗУ»
 */

function Laptop(nameLap, model, serNumber, yearManuf, sizeRam, sizeRom, weight) {
    this.nameLap = nameLap;
    this.model = model;
    this.serNumber = serNumber;
    this.yearManuf = yearManuf;
    this.sizeRam = sizeRam;
    this.sizeRom = sizeRom;
    this.weight = weight;
}

Laptop.prototype.getSize = function () {
    return this.sizeRam + ' ' + this.sizeRom;
};
Laptop.prototype.getInfo = function () {
    return this.nameLap + ' ' + this.model;
};

function Ultrabook(nameLap, model, serNumber, yearManuf, sizeRam, sizeRom, weight) {
    Laptop.call(this, nameLap, model, serNumber, yearManuf, sizeRam, sizeRom, weight);
}

Ultrabook.prototype = Object.create(Laptop.prototype);
Ultrabook.prototype.constructor = Ultrabook;

Ultrabook.prototype.getData = function () {
    return this.nameLap + ' ' + this.weight + ' ' + this.yearManuf;
};


var laptop = new Laptop('Lenovo', '234LO46524243RSE641551', 1945943959, 2022, '16Gb', 128, 2.5);
console.log(laptop.getSize());
console.log(laptop.getInfo());


var ultrabook = new Ultrabook('Asser', 'X-156784TU18990000', 77724315415, 2021, '8Gb', 128, 3.1);
console.log(ultrabook.getData());
console.log(ultrabook.getSize());
