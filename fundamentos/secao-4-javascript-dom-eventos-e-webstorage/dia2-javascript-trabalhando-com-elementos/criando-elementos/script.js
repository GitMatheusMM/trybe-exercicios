const elemOndeVcEsta = document.getElementById('elementoOndeVoceEsta');

//exercise 1
const newElement1 = document.createElement('section');
newElement1.id = 'adicionandoIrmao';
elemOndeVcEsta.parentElement.append(newElement1);

//exercise2 
const newElement2 = document.createElement('section');
newElement2.id = 'surpriseChild';
elemOndeVcEsta.appendChild(newElement2);

//exercise 3
const newElement3 = document.createElement('p');
newElement3.id = 'childOfFirstChild';
document.getElementById('primeiroFilhoDoFilho').appendChild(newElement3);

//exercise 4
console.log(document.getElementById('childOfFirstChild').parentElement.parentElement.nextElementSibling);