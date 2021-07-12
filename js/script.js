// Действия с элементами на странице
'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(box); // Получение элемента в качестве объекта
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px;`;  

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// Циклы не используются в основном
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
//     hearts[i].style.borderRadius = '2000px';
// }

// forEach аналог предыдущей функции
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
    item.style.borderRadius = '100%';
});

const div = document.createElement('div'); // создание элемента div в JS коде
// const text = document.createTextNode('Тут был я'); // этот метод используется крайне редко

div.classList.add('black'); //добавление класса стиля css в элемент div

// .append() - вставляет содержимое, заданное параметром, в конец каждого элемента в наборе соответствующих элементов
// .appendChild() - устаревший метод.

// document.body.append(div); // устанавливает созданный div элемент в конец html страницы. современный метод.

// document.querySelector('.wrapper').append(div); // устанавливает созданный div элемент в...
// конец html страницы в класс wrapper.

// создаем переменную wrapper и модифицируем предыдущий код (РЕФАКТОРИНГ КОДА)
wrapper.append(div);
// wrapper.appendChild(div);

// .prepend() - функция добавляет содержимое в начало определенных элементов.
// wrapper.prepend(div); 

// .before() - функция помещает заданное содержимое перед определенными элементами страницы.
// hearts[0].before(div); 

// .after() - функция вставляет заданное содержимое сразу после определенных элементов страницы.
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[0]); // устаревший способ функций .prepend(), .before(), .after()

// .remove() - метод для удаления элементов страницы.
// circles[0].remove();
// wrapper.removeChild(hearts[1]); // устаревшый способ медота .remove()

// .replaceWith() - c помощью этой функции можно заменять элементы страницы новыми элементами или уже существующими.
// в данном случае первый элемент сердечка заменяется на первый элемент кружочка
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // устаревщый способ фунцкии .replaceWith()

// .innerHTML добавляет в элемент HTML структуру (например текст, или тег HTML)
div.innerHTML = "<h1>Hello world</h1>";

// .textContent - позволяет задавать или получать текстовое содержимое элемента и его потомков.
// ТОЛЬКО ТЕКСТ. HTML структура не подходит
// div.textContent = "Hello";


//'beforebegin': до самого element (до открывающего тега).
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставляет HTML код перед началом элемента 
//'afterbegin': сразу после открывающего тега  element (перед первым потомком).
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставляет HTML код в начало элемента
//'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставляет HTML код в конец элемента
//'afterend': после element (после закрывающего тега).
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставляет HTML код после элемента