//Exercise 1 and 2
const elementWhere = document.getElementById('where-are-you');
elementWhere.parentNode.style = 'color: blue';

//exercise 3
elementWhere.firstElementChild.innerText = 'Adicionando texto aqui!';

//exercise 4
const firstElementFromParent = document.getElementById('parent').firstElementChild;

//exercise 5
elementWhere.firstElementChild;

//exercise 6
elementWhere.nextSibling;

//exercise 7
elementWhere.nextElementSibling;

//exercise 8
console.log(document.getElementById('parent').lastElementChild.previousElementSibling);