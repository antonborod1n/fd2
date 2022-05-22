var getSum = document.getElementById('btn__sub');
var randomItem = document.querySelectorAll('.random__item');

getSum.addEventListener('click', function () {
    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var a = randomValue(1, 10);
    var b = randomValue(11, 20);
    var c = randomValue(21, 30);
    var d = randomValue(31, 40);
    var e = randomValue(41, 50);

    randomItem[0].insertAdjacentHTML('beforeend', `<span> - ${a}</span>`);
    randomItem[1].insertAdjacentHTML('beforeend', `<span> - ${b}</span>`);
    randomItem[2].insertAdjacentHTML('beforeend', `<span> - ${c}</span>`);
    randomItem[3].insertAdjacentHTML('beforeend', `<span> - ${d}</span>`);
    randomItem[4].insertAdjacentHTML('beforeend', `<span> - ${e}</span>`);
}); 