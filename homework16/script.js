//1
var taskOne = document.querySelector('.task-one');
var inputItem = taskOne.querySelectorAll('input');

inputItem[0].addEventListener('click', function () {
    alert(inputItem[0].value);
});

inputItem[1].addEventListener('click', function () {
    alert(inputItem[1].value);
});

inputItem[2].addEventListener('click', function () {
    alert(inputItem[2].value);
});

//2

var taskTho = document.querySelector('.task-tho');
var inputItems = taskTho.querySelectorAll('input');

inputItems[0].addEventListener('blur', function (e) {
    e.target.insertAdjacentHTML('afterend', `<p>Вы ввели ${e.target.value}<p>`);
});

inputItems[1].addEventListener('blur', function (e) {
    e.target.insertAdjacentHTML('afterend', `<p>Вы ввели ${e.target.value}<p>`);
});


//3

var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var form = document.getElementById('sum-form');
    var inputForm = form.querySelectorAll('input');
    var total = 0;

    inputForm.forEach(function (item) {
        var priceValue = item.value;
        var sum = parseInt(priceValue);
        total += sum;
    });
    alert(total);
});

//4

var four = document.querySelector('.task-four');
var select = four.querySelector('select');
var optionAll = document.querySelectorAll('option');
var textBox = four.querySelector('input');

select.addEventListener('click', function() {
    optionAll.forEach(function (item) {
        if(item.selected === true) {
            textBox.value = item.textContent;
        }
    });
}); 