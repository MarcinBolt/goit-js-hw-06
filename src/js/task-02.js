const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredients = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const addLiItem = document.createElement('li');
  addLiItem.textContent = ingredient;
  listIngredients.append(addLiItem);
}
