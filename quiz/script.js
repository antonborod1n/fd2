var userForm = document.querySelector('#start-question');
var avatarContainer = document.querySelector('#start-question');
var userData = ['Joe', 'avatar'];
var questionBox = document.querySelector('#box-questions');
var questionForm = document.querySelector('.quiz-form');
var correctAnswers = ['B', 'D', 'B', 'A', 'C'];
var resultContainer = document.querySelector('.quiz__heading');

//Мои переменные
var oneQ = document.querySelector('.quiz-form__quiz');
var allQ = document.getElementsByClassName('quiz-form__quiz');
var btnSubmit = document.querySelector('.input__submit');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var activeElement = document.querySelector('.one-question');

console.log(allQ);

avatarContainer.addEventListener('click', function(e){
    if(document.querySelectorAll('.show')){
        document.querySelectorAll('.show').forEach(function(item){
            item.classList.remove('show');
        })
    }

    if(e.target.tagName === 'INPUT' && e.target.type === 'radio'){
        console.log(e.target.previousElementSibling);
        e.target.previousElementSibling.firstElementChild.classList.add('show');
    }
});

userForm.addEventListener('submit', function(e){
    var activeAvatar = document.querySelector('input[name="question2"]:checked');
    var activeName = userForm.elements.question1.value;
    var activeImg = activeAvatar.previousElementSibling.firstElementChild.src;
    userData = [activeName, activeImg];

    userForm.classList.add('quiz');
    questionBox.classList.remove('quiz');

    //Добавляем 
    oneQ.classList.add('one-question');
    btnSubmit.classList.add('hidden');

    scrollingUp();
    e.preventDefault();
});


//Кнопки
nextBtn.addEventListener('click', function () {
    var activeElement = document.querySelector('.one-question');
    if(activeElement.classList.contains('one-question')){
        activeElement.classList.remove('one-question');
        activeElement.nextElementSibling.classList.add('one-question');
    }
}); 

prevBtn.addEventListener('click', function () {
    var activeElement = document.querySelector('.one-question');
    if(activeElement.classList.contains('one-question')){
        activeElement.classList.remove('one-question');
        activeElement.previousElementSibling.classList.add('one-question');
    }
});



questionForm.addEventListener('submit', function(e){
    var userInfo = document.querySelector('.name__user');
    var count = 0;
    var startResult = 0;

    var userAnswer = [
        questionForm.elements.q1,
        questionForm.elements.q2,
        questionForm.elements.q3,
        questionForm.elements.q4,
        questionForm.elements.q5
    ]

    userAnswer.forEach(function(item, index){
        if(item.value === correctAnswers[index]){
            count += 20;
            for(var i = 0; i < 4; i++){
                var isChecked = item[i].checked;
                if(isChecked){
                    item[i].parentElement.classList.add('correct');
                }
            }
        }else{
            for(var i = 0; i < 4; i++){
                var isChecked = item[i].checked;
                if(isChecked){
                    item[i].parentElement.classList.add('wrong');
                }
            }
        }
    })

    resultContainer.classList.add('show-quiz');

    userInfo.innerHTML = userData[0] + '<img src="'+ userData[1] +'" alt="user">' + count;

    scrollingUp();

    e.preventDefault();

})


function scrollingUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}