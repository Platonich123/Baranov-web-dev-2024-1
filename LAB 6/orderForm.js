document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.querySelector('#order-form form');
    const selectedDishes = {
        soup: null,
        'main-dish': null,
        drink: null,
        'salad-starter': null,
        dessert: null
    };

    // Добавляем скрытые поля для выбранных блюд и комментария
    const hiddenFields = `
        <input type="hidden" id="selected-soup" name="selected-soup">
        <input type="hidden" id="selected-main-dish" name="selected-main-dish">
        <input type="hidden" id="selected-drink" name="selected-drink">
        <input type="hidden" id="selected-salad-starter" name="selected-salad-starter">
        <input type="hidden" id="selected-dessert" name="selected-dessert">
        <input type="hidden" id="total-price" name="total-price">
    `;
    orderForm.insertAdjacentHTML('beforeend', hiddenFields);

    document.querySelectorAll('.menu-item button').forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.parentElement;
            const dishKeyword = menuItem.dataset.dish;
            const dish = dishes.find(d => d.keyword === dishKeyword);

            if (dish) {
                selectedDishes[dish.category] = dish;
                updateOrderForm();
                highlightSelectedDish(menuItem);
            }
        });
    });

    function updateOrderForm() {
        const orderBlock = orderForm.querySelector('.order-block');
        const hasSelectedDishes = Object.values(selectedDishes).some(dish => dish !== null);

        orderBlock.innerHTML = `
            <h3>Ваш заказ</h3>
            ${hasSelectedDishes ? `
                <div>
                    <strong>Суп:</strong> ${selectedDishes.soup ? `<p>${selectedDishes.soup.name} - ${selectedDishes.soup.price}₽</p>` : '<p>Блюдо не выбрано</p>'}
                    <strong>Главное блюдо:</strong> ${selectedDishes['main-dish'] ? `<p>${selectedDishes['main-dish'].name} - ${selectedDishes['main-dish'].price}₽</p>` : '<p>Блюдо не выбрано</p>'}
                    <strong>Напиток:</strong> ${selectedDishes.drink ? `<p>${selectedDishes.drink.name} - ${selectedDishes.drink.price}₽</p>` : '<p>Блюдо не выбрано</p>'}
                    <strong>Салат или стартер:</strong> ${selectedDishes['salad-starter'] ? `<p>${selectedDishes['salad-starter'].name} - ${selectedDishes['salad-starter'].price}₽</p>` : '<p>Блюдо не выбрано</p>'}
                    <strong>Десерт:</strong> ${selectedDishes.dessert ? `<p>${selectedDishes.dessert.name} - ${selectedDishes.dessert.price}₽</p>` : '<p>Блюдо не выбрано</p>'}
                    <strong>Стоимость заказа:</strong> <p>${calculateTotalPrice()}₽</p>
                </div>
            ` : '<p><strong>Ничего не выбрано</strong></p>'}
            <label for="comment">Комментарий к заказу:</label>
            <textarea id="comment" name="comment" class="comment-input"></textarea>
        `;

        // Обновляем значения скрытых полей
        document.getElementById('selected-soup').value = selectedDishes.soup ? selectedDishes.soup.keyword : '';
        document.getElementById('selected-main-dish').value = selectedDishes['main-dish'] ? selectedDishes['main-dish'].keyword : '';
        document.getElementById('selected-drink').value = selectedDishes.drink ? selectedDishes.drink.keyword : '';
        document.getElementById('selected-salad-starter').value = selectedDishes['salad-starter'] ? selectedDishes['salad-starter'].keyword : '';
        document.getElementById('selected-dessert').value = selectedDishes.dessert ? selectedDishes.dessert.keyword : '';
        document.getElementById('total-price').value = calculateTotalPrice();
    }

    function highlightSelectedDish(menuItem) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('selected');
        });
        menuItem.classList.add('selected');
    }

    function calculateTotalPrice() {
        return Object.values(selectedDishes).reduce((total, dish) => total + (dish ? dish.price : 0), 0);
    }

    // Initial call to updateOrderForm to display the comment field
    updateOrderForm();

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const missingItem = checkOrder();
        if (missingItem) {
            showNotification(missingItem);
        } else {
            orderForm.submit();
        }
    });

    function checkOrder() {
        if (Object.values(selectedDishes).every(dish => dish === null)) {
            return 'Ничего не выбрано. Выберите блюда для заказа';
        }
        if ((selectedDishes.dessert || selectedDishes.drink) && !selectedDishes['main-dish']) {
            return 'Выберите главное блюдо';
        }
        if (!selectedDishes.soup && !selectedDishes['main-dish']) {
            return 'Выберите суп или главное блюдо';
        }
        if (selectedDishes.soup && !selectedDishes['main-dish'] && !selectedDishes['salad-starter']) {
            return 'Выберите главное блюдо/салат/стартер';
        }
        if (!selectedDishes.drink) {
            return 'Выберите напиток';
        }
        return null;
    }

    function showNotification(missingItem) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `
            <p>${missingItem}</p>
            <button id="ok-button">
                Окей <span class="thumbs-up">👍</span>
            </button>
        `;
        document.body.appendChild(notification);

        const okButton = notification.querySelector('#ok-button');
        okButton.addEventListener('click', () => {
            document.body.removeChild(notification);
        });

        okButton.addEventListener('mouseover', () => {
            okButton.style.backgroundColor = 'tomato';
            okButton.style.color = 'white';
        });

        okButton.addEventListener('mouseout', () => {
            okButton.style.backgroundColor = '#007bff';
            okButton.style.color = 'white';
        });
    }
});
