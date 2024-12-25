const dishes = [
    {
        keyword: "gaspacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "images/гаспачо.jpg",
        kind: "veg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "images/грибной.jpg",
        kind: "veg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "images/норвежский.jpg",
        kind: "fish"
    },
    {
        keyword: "tom_yam",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "images/том_ям.jpg",
        kind: "meat"
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425 г",
        image: "images/рамен.jpg",
        kind: "meat"
    },
    {
        keyword: "kurinyi_soup",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "images/куриныйсуп.jpg",
        kind: "meat"
    },
    {
        keyword: "vegetables_with_rice",
        name: "Запеченные овощи с рисом",
        price: 350,
        category: "main-dish",
        count: "250 г",
        image: "images/жаренаякр.jpg",
        kind: "veg"
    },
    {
        keyword: "pasta",
        name: "Паста",
        price: 385,
        category: "main-dish",
        count: "310 г",
        image: "images/паста.jpg",
        kind: "veg"
    },
    {
        keyword: "chicken_cutlets",
        name: "Куриные котлеты с картофельным пюре",
        price: 225,
        category: "main-dish",
        count: "280 г",
        image: "images/котлеты.jpg",
        kind: "meat"
    },
    {
        keyword: "rybnaya_kotleta",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main-dish",
        count: "270 г",
        image: "images/рыбнаякотлета.jpg",
        kind: "fish"
    },
    {
        keyword: "pizza_margarita",
        name: "Пицца Маргарита",
        price: 450,
        category: "main-dish",
        count: "470 г",
        image: "images/пицца.jpg",
        kind: "veg"
    },
    {
        keyword: "pasta_with_shrimp",
        name: "Паста с креветками",
        price: 340,
        category: "main-dish",
        count: "280 г",
        image: "images/пастакреветки.jpg",
        kind: "fish"
    },
    {
        keyword: "orange_juice",
        name: "Апельсиновый сок",
        price: 120,
        category: "drink",
        count: "300 мл",
        image: "images/апельсиновыйсок.jpg",
        kind: "cold"
    },
    {
        keyword: "apple_juice",
        name: "Яблочный сок",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "images/яблочныйсок.jpg",
        kind: "cold"
    },
    {
        keyword: "carrot_juice",
        name: "Морковный сок",
        price: 110,
        category: "drink",
        count: "300 мл",
        image: "images/морковныйсок.jpg",
        kind: "cold"
    },
    {
        keyword: "green_tea",
        name: "Зеленый чай",
        price: 100,
        category: "drink",
        count: "300 мл",
        image: "images/зеленыйчай.jpg",
        kind: "hot"
    },
    {
        keyword: "black_tea",
        name: "Черный чай",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "images/черныйчай.jpg",
        kind: "hot"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "drink",
        count: "300 мл",
        image: "images/капучино.jpg",
        kind: "hot"
    },
    {
        keyword: "korean_salad",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salad-starter",
        count: "250 г",
        image: "images/корейскийсалат.jpg",
        kind: "veg"
    },
    {
        keyword: "cezar_chicken",
        name: "Цезарь с цыпленком",
        price: 370,
        category: "salad-starter",
        count: "220 г",
        image: "images/цезарь.jpg",
        kind: "meat"
    },
    {
        keyword: "capreze",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salad-starter",
        count: "235 г",
        image: "images/капрезе.jpg",
        kind: "veg"
    },
    {
        keyword: "tuna_salad",
        name: "Салат с тунцом",
        price: 480,
        category: "salad-starter",
        count: "250 г",
        image: "images/салаттунцом.jpg",
        kind: "fish"
    },
    {
        keyword: "cezar_fries",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salad-starter",
        count: "235 г",
        image: "images/картофельфри.jpg",
        kind: "veg"
    },
    {
        keyword: "ketchup_fries",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salad-starter",
        count: "235 г",
        image: "images/картофельфрикетчуп.jpg",
        kind: "veg"
    },
    {
        keyword: "pahlava",
        name: "Пахлава",
        price: 220,
        category: "dessert",
        count: "300 г",
        image: "images/пахлава.jpg",
        kind: "medium"
    },
    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 240,
        category: "dessert",
        count: "125 г",
        image: "images/чизкейк.jpg",
        kind: "small"
    },
    {
        keyword: "chocolate_cheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "dessert",
        count: "125 г",
        image: "images/шоколадныйчизкейк.jpg",
        kind: "small"
    },
    {
        keyword: "chocolate_cake",
        name: "Шоколадный торт",
        price: 270,
        category: "dessert",
        count: "140 г",
        image: "images/шоколадныйторт.jpg",
        kind: "small"
    },
    {
        keyword: "donuts_3",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "dessert",
        count: "350 г",
        image: "images/пончики3.jpg",
        kind: "medium"
    },
    {
        keyword: "donuts_6",
        name: "Пончики (6 штук)",
        price: 650,
        category: "dessert",
        count: "700 г",
        image: "images/пончики6.jpg",
        kind: "large"
    }
];
