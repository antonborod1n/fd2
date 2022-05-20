var todoList = document.querySelector('#todo-list');
var ulMain = document.querySelector('#menuList');
var btn = document.querySelector('#btnAdd');

todoList.addEventListener('click', function (event) {
   if (event.target.classList.contains('waves-effect')) {
      var newTitle = prompt('Input new title!');
      event.target.previousElementSibling.innerHTML = newTitle;
   }
});


//3
btn.addEventListener('click', function () {
   var itemLi = document.querySelectorAll('#menuList li').length + 1;
   ulMain.insertAdjacentHTML('beforeend', `<li>task ${itemLi++}</li>`);
});


ulMain.addEventListener('click', function (e) {
   if (e.target.closest('li')) {
      e.target.closest('li').classList.add('line-through');
   }
});

//4

var input1 = document.forms[0].elements.input1;
var input2 = document.forms[0].elements.input2;
var input3 = document.forms[0].elements.input3;

input1.addEventListener('blur', isCorrect);
input2.addEventListener('blur', isCorrect);
input3.addEventListener('blur', isCorrect);

function isCorrect(e) {
   var correctLength = Number(e.target.dataset.length);
   var correctStr = e.target.value.length;
   var form = document.querySelector('form');

   console.log(form);
   if (correctLength === correctStr) {
      e.target.parentElement.classList.add('green-border');
   } else {
      e.target.parentElement.classList.add('red-border');
      form.insertAdjacentHTML('afterend', '<p>Неправильное значение</p>');
   }

}

//5 

var count = document.querySelector('.total');
var btnPlus = document.querySelector('.btn__plus');
var btnMinus = document.querySelector('.btn__minus');
var btnSum = document.querySelector('.btn__sum');
var price = document.querySelector('.price');
var total = document.querySelector('#current-total');

btnPlus.addEventListener('click', function () {
   count.innerText = ++count.value;
});

btnMinus.addEventListener('click', function () {
   if (parseInt(count.value) > 0) {
      count.innerText = --count.value;
   }
});

btnSum.addEventListener('click', function () {
   var summ = count.value * price.innerText;
   total.innerText = summ;
});

//6

var currentBlock = document.querySelector('#current-cart-items');
var currentTotal = document.querySelector('#current-total-items');
var getBtnSum = document.querySelector('.btn__summa');
var totalItems = document.querySelector('#current-total-items');

currentBlock.addEventListener('click', function (e) {
   var parentBox = e.target.closest('.card');
   var counter = parentBox.querySelector('.total');

   if (e.target.dataset.btn === 'btn-neg') {
      if (parseInt(counter.value) > 0) {
         counter.innerText = --counter.value;
      }
   }
   if (e.target.dataset.btn === 'btn-pos') {
      counter.innerText = counter.value++;
   }
});

getBtnSum.addEventListener('click', function () {
   var allTotalNum = document.querySelectorAll('.total__num');
   var price = 10;
   var totalPrice = 0;
   allTotalNum.forEach(function (item) {
      var priceValue = item.value;
      var sum = parseInt(priceValue) * parseInt(price);
      totalPrice += sum;
   });
   totalItems.innerText = totalPrice;
});

//7

var input = document.querySelector('.input-info');

input.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
      input.parentElement.insertAdjacentHTML('beforeend', `<p>${input.value}</p>`);
      input.value = "";
   }
});

//8

var modalContainer = document.querySelector('#modal-box');
var modal = document.querySelector('#modal1');

modalContainer.addEventListener('click', function (e) {
   var currentBtn = e.target;
   var currentNumb = Number(e.target.dataset.numb);
   if (currentBtn.classList.contains('waves-effect')) {
      generateModalInfo(currentNumb);
      modal.classList.add('modal_open');
   }
});

window.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && modal.classList.contains('modal_open')) {
      modal.classList.remove('modal_open');
   }
});

function generateModalInfo(currentId) {
   var result = listModal.filter(function (item, index) {
      if (item.id === currentId) {
         return item;
      }
   });

   var modalTitle = document.querySelector('#modal1 h4');
   var modalDescription = document.querySelector('#modal1 p');
   modalTitle.innerHTML = result[0].title;
   modalDescription.innerHTML = result[0].description;

   return result;
}











