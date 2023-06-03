// Создаем переменную массива
let arrayDirectors = [
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
    },
    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
    },
    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
    },
    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
    },
    {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
    },
    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];

// Добавляем информацию о режиссерах из переменной в html

let bestDirectors = document.querySelector('.bestDirectors');
console.log(bestDirectors);

// Вызываем метод forEach
// 1. Создаем новый div
// 2. Добавляем класс

arrayDirectors.forEach((element) => {
    let elemDirector = document.createElement("div");
    elemDirector.className = 'elem_director_pack';
    elemDirector.innerHTML = `
    <p class="elem_director_pack">${element.name}</p>
    <p class="elem_director_pack">${element.career}</p>
    <a class="element_career" href="${element.films}" target="_blank">Фильмография</a>`;

    bestDirectors.appendChild(elemDirector);
});

// Добавляем информацию о фильмах в html

let bestFilm = document.querySelector('.bestFilm');
console.log(bestFilm);

// Создаем переменную для получения данных из массива
// 1. Создаем элемент для добавления информации о фильмах
// 2. Добавляем разметку для элемента
let catalogFilm = arrayDirectors.map(function(arrElem) {
    let sheetFilm = document.createElement("span");
    sheetFilm.innerHTML = 
    `<span class="catalog_film">${arrElem.top_rated_film}, </span>`;
    bestFilm.appendChild(sheetFilm);
}
);

