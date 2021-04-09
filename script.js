'use strict';

/* 4. Дан список сообщений. Возле каждого сообщения есть кнопка для того чтобы его скрыть. */

let list = document.getElementById('list');
let cross = document.getElementById('list__cross');

list.addEventListener('click', function (e) {
	if (e.target.className === 'list__cross') {
    let listItem = e.target.closest('.list__item');
    listItem.style.display = 'none';
	}
});
