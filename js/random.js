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

    randomItem[0].innerHTML = `- ${a}`;
    randomItem[1].innerHTML = `- ${b}`;
    randomItem[2].innerHTML = `- ${c}`;
    randomItem[3].innerHTML = `- ${d}`;
    randomItem[4].innerHTML = `- ${e}`;
}); 