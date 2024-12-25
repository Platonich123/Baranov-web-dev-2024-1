document.addEventListener("DOMContentLoaded", () => {
    const menuSections = {
        soup: document.querySelector('#soups .menu-section'),
        'main-dish': document.querySelector('#main-dishes .menu-section'),
        drink: document.querySelector('#drinks .menu-section'),
        'salad-starter': document.querySelector('#salads-starters .menu-section'),
        dessert: document.querySelector('#desserts .menu-section')
    };

    dishes.sort((a, b) => a.name.localeCompare(b.name));

    dishes.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.dish = dish.keyword;
        menuItem.dataset.kind = dish.kind;

        menuItem.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="menu-img">
            <p class="price">${dish.price}₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button>Добавить</button>
        `;

        menuSections[dish.category].appendChild(menuItem);
    });

    document.querySelectorAll('.filters button').forEach(button => {
        button.addEventListener('click', () => {
            const kind = button.dataset.kind;
            const category = button.closest('section').id;
            const isActive = button.classList.contains('active');

            // Удаляем класс active у всех кнопок фильтров
            document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));

            if (!isActive) {
                // Добавляем класс active к нажатой кнопке
                button.classList.add('active');
                filterDishes(kind, category);
            } else {
                // Отображаем все блюда, если кнопка уже активна
                filterDishes(null, category);
            }
        });
    });
});

function filterDishes(kind, category) {
    const menuSection = document.querySelector(`#${category} .menu-section`);
    const menuItems = menuSection.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        if (kind === item.dataset.kind || !kind) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
