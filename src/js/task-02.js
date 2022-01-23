const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.







const ingrListRef= document.querySelector('#ingredients');
const ingrList = ingredients.map(item => { 
  const ingrItem = document.createElement('li');
  ingrItem.textContent = item;
  ingrItem.classList.add('item');
  return ingrItem;
})
ingrListRef.append(...ingrList);