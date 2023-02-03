const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredients = document.querySelector('#ingredients');
const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

listIngredients.insertAdjacentHTML('afterbegin', markup);
