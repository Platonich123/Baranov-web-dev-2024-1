document.addEventListener("DOMContentLoaded", () => {
    const menuSections = {
        soup: document.querySelector('#soups .menu-section'),
        'main-dish': document.querySelector('#main-dishes .menu-section'),
        drink: document.querySelector('#drinks .menu-section')
    };

    dishes.sort((a, b) => a.name.localeCompare(b.name));

    dishes.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.dish = dish.keyword;

        menuItem.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="menu-img">
            <p class="price">${dish.price}₽</p>
            <p class="name">${dish.name}</p>
            <p class="weight">${dish.count}</p>
            <button>Добавить</button>
        `;

        menuSections[dish.category].appendChild(menuItem);
    });
});
