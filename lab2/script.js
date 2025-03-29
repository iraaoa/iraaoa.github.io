const events = [
    {
        year: 882,
        description: "Об'єднання Києва та Новгорода князем Олегом",
        details: "У 882 році князь Олег убив князів Аскольда і Діра, захопив Київ та об'єднав його з Новгородом, створивши Київську Русь. Київ став столицею нової держави.",
        image: "static/images/okn.jpg"
    },
    {
        year: 988,
        description: "Хрещення Русі князем Володимиром Великим",
        details: "У 988 році князь Володимир Великий прийняв християнство та охрестив Київську Русь. Християнство стало державною релігією, що вплинуло на культуру, освіту та політику держави.",
        image: "static/images/hr.jpg"
    },
    {
        year: 1240,
        description: "Захоплення Києва монголо-татарами",
        details: "У грудні 1240 року війська хана Батия захопили Київ після тривалої облоги. Місто було зруйноване, населення значною мірою знищене або взяте в полон.",
        image: "static/images/zkm.jpg"
    },
    {
        year: 1648,
        description: "Початок Національно-визвольної війни",
        details: "У 1648 році Богдан Хмельницький очолив повстання проти Речі Посполитої. Почалася Національно-визвольна війна, яка призвела до створення козацької держави — Гетьманщини.",
        image: "static/images/nvv.jpg"
    },
    {
        year: 1918,
        description: "Проголошення незалежності УНР",
        details: "22 січня 1918 року Українська Центральна Рада проголосила незалежність Української Народної Республіки (УНР) у IV Універсалі.",
        image: "static/images/1918.jpg"
    },
    {
        year: 1939,
        description: "Початок Другої світової війни",
        details: "1 вересня 1939 року нацистська Німеччина напала на Польщу, що стало початком Другої світової війни. 17 вересня Червона армія вторглася у східну частину Польщі.",
        image: "static/images/ww2.png"
    },
    {
        year: 1941,
        description: "Напад Німеччини на СРСР (Операція Барбаросса)",
        details: "22 червня 1941 року Німеччина розпочала військову операцію «Барбаросса», в ході якої Вермахт швидко просунувся на схід, окупувавши значну частину України.",
        image: "static/images/barbarossa.jpg"
    },
    {
        year: 1991,
        description: "Проголошення незалежності України",
        details: "24 серпня 1991 року Верховна Рада України ухвалила Акт проголошення незалежності України, що поклало початок сучасній українській державності.",
        image: "static/images/independence1991.jpg"
    },
    {
        year: 1994,
        description: "Будапештський меморандум",
        details: "5 грудня 1994 року Україна підписала Будапештський меморандум з США, Великобританією та Росією. В обмін на відмову від ядерної зброї Україна отримала гарантії територіальної цілісності та недоторканності своїх кордонів.",
        image: "static/images/bm.avif"
    },
    {
        year: 2004,
        description: "Помаранчева революція",
        details: "У 2004 році в Україні відбулись масові протестні акції, що призвели до зміни результатів президентських виборів. Помаранчева революція стала символом боротьби за демократію і права людини.",
        image: "static/images/orange.webp"
    },
    {
        year: 2014,
        description: "Євромайдан та Революція Гідності",
        details: "У листопаді 2013 року почались масові протести в Україні після відмови президента Януковича підписати Угоду про асоціацію з ЄС. Протести призвели до Революції Гідності та втечі Януковича, що змінило політичний курс України.",
        image: "static/images/euromaidan.jpg"
    },
    {
        year: 2022,
        description: "Повномасштабне вторгнення Росії в Україну",
        details: "24 лютого 2022 року росія розпочала повномасштабне військове вторгнення в Україну. Цей напад став найбільшим збройним конфліктом у Європі за останні десятиліття, що спричинило величезні людські втрати, руйнування інфраструктури та зміни в політичній ситуації в Україні та світі. ",
        image: "static/images/2022.jpg"
    }
];







const timelineContainer = document.querySelector('.hronologia');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// елементи модального вікна
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');

let currentIndex = 0;
const eventsPerPage = 5; // Кількість подій на екрані




// Функція для оновлення хронології
function updateTimeline() {
    // Очищаємо контейнер
    timelineContainer.innerHTML = '';

    let i = currentIndex;

    while (i < currentIndex + eventsPerPage && i < events.length) {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.setAttribute('data-index', i); // Додаємо data-index

        const yearElement = document.createElement('span');
        yearElement.classList.add('year');
        yearElement.textContent = events[i].year;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = events[i].description;

        const moreInfoButton = document.createElement('span');
        moreInfoButton.classList.add('more-info');
        moreInfoButton.textContent = 'Дізнатися більше';

        eventElement.appendChild(yearElement);
        eventElement.appendChild(descriptionElement);
        eventElement.appendChild(moreInfoButton);

        timelineContainer.appendChild(eventElement);
        i++;
    }

}

// Оновлення хронологію 
updateTimeline();


// "Дізнатися більше" з делегуванням подій
timelineContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('more-info')) {
        // Читаємо data-index напряму
        const index = event.target.closest('.event').getAttribute('data-index');

        // Підставляємо індекс у масив подій
        modalTitle.textContent = events[index].description;
        modalDetails.textContent = events[index].details;

        // Показуємо модальне вікно
        modal.style.display = 'block';
    }
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});





prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateTimeline();
    }
});



nextButton.addEventListener('click', () => {
    if (currentIndex + eventsPerPage < events.length) {
        currentIndex += 1;
        updateTimeline();
    }
});




document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();  // не відправляємо форму

    // Відповіді на питання
    const correctAnswers = {
        q1: 'Kyiv',
        q2: 'Kravchuk'
    };

    let score = 0;

    // Перевірка відповідей
    const formElements = new FormData(this);
    for (let [name, value] of formElements) {
        if (correctAnswers[name] === value) {
            score++; // збільшуємо бал
        }
    }

    // Виведення результату
    const resultText = `Ви правильно відповіли на ${score} з 2 питань.`;
    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('result-text');

    resultTextElement.textContent = resultText;
    resultElement.style.display = 'block'; // Показуємо результат
});



const timelineContainerr = document.getElementById('hron-container');
const toggleButton = document.getElementById('toggle-timeline');

toggleButton.addEventListener('click', () => {
    if (timelineContainerr.style.display === 'none' || timelineContainerr.style.display === '') {
        timelineContainerr.style.display = 'block'; // Показати
        toggleButton.textContent = 'Сховати хронологію';
    } else {
        timelineContainerr.style.display = 'none'; // Сховати
        toggleButton.textContent = 'Показати хронологію';
    }
});












const eventsContainer = document.getElementById('events-container'); // Контейнер для подій
const loadMoreButton = document.getElementById('load-more-button'); // Кнопка для завантаження наступних подій

let currentEventIndex = 0;
const eventsPerPagee = 4; // Кількість подій, які будуть показані на сторінці


// Функція для створення картки події
function createEventCard(event) {
    // Створюємо контейнер картки події
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card'); // Додаємо клас для стилізації картки події

    // Створюємо контейнер для зображення
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Створюємо елемент для зображення
    const image = document.createElement('img');
    image.src = event.image; 
    image.alt = event.title;

    // Додаємо зображення в контейнер
    imageContainer.appendChild(image);

    // Створюємо заголовок події
    const eventTitle = document.createElement('h3');
    eventTitle.textContent = event.description; // Заголовок події

    // Створюємо горизонтальну лінію
    const eventLine = document.createElement('hr');
    eventLine.classList.add('event-line'); // Додаємо клас для стилізації лінії

    // Створюємо опис події
    const description = document.createElement('p');
    description.classList.add('event-description');
    description.textContent = event.details; // Опис події

    // Додаємо всі елементи в картку події
    eventCard.appendChild(imageContainer);
    eventCard.appendChild(eventTitle);
    eventCard.appendChild(eventLine);
    eventCard.appendChild(description);

    return eventCard;
}


// Функція для завантаження подій
function loadEvents() {
    const nextEvents = events.slice(currentEventIndex, currentEventIndex + eventsPerPagee); // Беремо наступні події
    nextEvents.forEach(event => {
        const eventCard = createEventCard(event); // Створюємо картку події
        eventsContainer.appendChild(eventCard); // Додаємо картку в контейнер
    });

    currentEventIndex += nextEvents.length; // Оновлюємо індекс події

    // Приховуємо кнопку "Додати ще", якщо події закінчились
    if (currentEventIndex >= events.length) {
        loadMoreButton.textContent = 'Сховати'; // Змінюємо текст кнопки на "Сховати"
    }
}

// Завантажуємо перші події при завантаженні сторінки
loadEvents();

// Обробник кнопки "Додати ще"
loadMoreButton.addEventListener('click', () => {
    if (loadMoreButton.textContent === 'Ще') {
        loadEvents(); // Завантажуємо ще події
    } else if (loadMoreButton.textContent === 'Сховати') {
        // Скидаємо індекс і очищаємо контейнер для подій
        currentEventIndex = 0;
        eventsContainer.innerHTML = ''; // Очищаємо контейнер
        loadEvents(); // Завантажуємо перші події
        loadMoreButton.textContent = 'Ще'; // Змінюємо текст на "Ще"
        eventsContainer.scrollIntoView({ behavior: 'smooth' });

    }
});
