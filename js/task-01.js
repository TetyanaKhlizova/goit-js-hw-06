
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).


const categoriesElem = document.querySelector('ul#categories');

const categoriesElemUl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesElemUl.length}`);

// const elementLi = categoriesEl.children;

// for (let i = 0; i < elementLi.length; i += 1) {
//     const numberLi = elementLi[i].children;
//     const textContent = numberLi[0].textContent;
//     console.log("Category: ", textContent);
//     const countNumberLi = numberLi[1].children.length;
//     console.log("Elements: ", countNumberLi);
// }

categoriesElemUl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Category: ${element.lastElementChild.children.length}`);
});
    
  



