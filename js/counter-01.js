// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')

//Отслеживаем клик на странице КНОПКУ МИНУС
btnMinus.addEventListener('click', function(){
    // Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
    //Уменьшаем значение счётчика
    counter.innerText = --counter.innerText
    }

})

//Отслеживаем клик на странице КНОПКУ ПЛЮС
btnPlus.addEventListener('click',function(){
    //Добавляем значение счётчика
    counter.innerText = ++counter.innerText
})


