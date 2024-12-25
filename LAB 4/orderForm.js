document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.querySelector('#order-form form');
    const selectedDishes = {
        soup: null,
        'main-dish': null,
        drink: null
    };

    // Добавляем скрытые поля для выбранных блюд и комментария
    const hiddenFields = `
        <input type="hidden" id="selected-soup" name="selected-soup">
        <input type="hidden" id="selected-main-dish" name="selected-main-dish">
        <input type="hidden" id="selected-drink" name="selected-drink">
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
        document.getElementById('total-price').value = calculateTotalPrice();
    }

    function highlightSelectedDish(menuItem) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.border = '';
        });
        menuItem.style.border = '1px solid tomato';
    }

    function calculateTotalPrice() {
        return Object.values(selectedDishes).reduce((total, dish) => total + (dish ? dish.price : 0), 0);
    }

    // Initial call to updateOrderForm to display the comment field
    updateOrderForm();
});
