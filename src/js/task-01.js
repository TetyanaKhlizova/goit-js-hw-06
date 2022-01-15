const categoriesEl = document.querySelector('ul#categories');

const categoriesElUl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesElUl.length}`);

const elementLi = categoriesEl.children;

for (let i = 0; i < elementLi.length; i += 1) {
    const numberLi = elementLi[i].children;
    const textContent = numberLi[0].textContent;
    console.log("Category: ", textContent);
    const countNumberLi = numberLi[1].children.length;
    console.log("Elements: ", countNumberLi);
}

    
  



