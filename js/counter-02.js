// Отслеживаем клики на странице
window.addEventListener('click',function (event){

// ОбЪявление переменной
let counter

    //Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

			// Находим обертку счётчика
			const counterWrapper = event.target.closest('.counter-wrapper')

			//Находим див с числом счётчика
			counter = counterWrapper.querySelector('[data-counter]')
		}

	// Проверяем является ли элемент кнопкой по которой был клик кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText
	}

	// Проверяем является ли элемент кнопкой по которой был клик  Минус
	if (event.target.dataset.action === 'minus') {
		// Проверка на товар который находится в корзине


	// Проверяем чтобы счетчик был больше 1
	if (parseInt(counter.innerText) > 1) {
		//Уменьшаем значение счётчика
		counter.innerText = --counter.innerText
	}	else if (
		event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			//Удаляем товар из корзины
			event.target.closest('.cart-item').remove()

			//Отображение статуса корзины Пустая / Полная
			toggleCartStatus()

			// Пересчет общей стоимости в корзине
			calcCartPriceAndDelivery()
		}

}

	// Проверяем клик на + или - внутри корзины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости в корзине
		calcCartPriceAndDelivery()

	}



})