
const countryButtons = document.querySelectorAll('.catalog__flex-btn');

// Получаем все блоки с товарами
const countryGrids = document.querySelectorAll('.catalog__grid');

// Добавляем обработчик клика на каждую кнопку
countryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Скрываем все блоки с товарами
        hideAllGrids();

        // Получаем значение атрибута "data-country" кнопки
        const country = button.getAttribute('data-country');

        // Находим блок товаров для выбранной страны и отображаем его
        const gridToShow = document.querySelector(`.catalog__grid.${country}`);
        gridToShow.classList.add('show');
    });
});

function hideAllGrids() {
    // Скрываем все блоки с товарами
    countryGrids.forEach(function(grid) {
        grid.classList.remove('show');
    });
}

