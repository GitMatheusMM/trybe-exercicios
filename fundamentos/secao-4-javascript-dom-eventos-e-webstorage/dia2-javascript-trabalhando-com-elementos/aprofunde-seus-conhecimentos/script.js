//Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const tagH1 = document.createElement('h1');
tagH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(tagH1);

//Adicione a tag main com a classe main-content como filho da tag body;
const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const selectMain = document.querySelector('main');
const firstSection = document.createElement('section');
firstSection.className = 'center-content';
selectMain.appendChild(firstSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const selectFirstSection = document.querySelector('section');
const sectionP = document.createElement('p');
sectionP.innerText = 'Algum texto aqui!';
selectFirstSection.appendChild(sectionP);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const secondSection = document.createElement('section');
secondSection.className = 'left-content';
selectMain.appendChild(secondSection);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const thirdSection = document.createElement('section');
thirdSection.className = 'right-content';
selectMain.appendChild(thirdSection);

//Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const selectLeftSection = document.getElementsByClassName('left-content');
const firstImg = document.createElement('img');
firstImg.src = 'https://picsum.photos/200';
firstImg.className = 'small-image';
selectLeftSection[0].appendChild(firstImg);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const selectRightSection = document.getElementsByClassName('right-content');
const nonOrderedList = document.createElement('ul');

for (let i = 1; i <= 10; i += 1) {
  const listElement = document.createElement('li');
  listElement.innerText = i;
  nonOrderedList.appendChild(listElement);
}

selectRightSection[0].appendChild(nonOrderedList);

//Adicione 3 tags h3, todas filhas do main criado no passo 2.
const firstH3 = document.createElement('h3');
firstH3.innerText = 'primeiro';
const secondH3 = document.createElement('h3');
secondH3.innerText = 'segundo';
const thirdH3 = document.createElement('h3');
thirdH3.innerText = 'terceiro';
selectMain.appendChild(firstH3);
selectMain.appendChild(secondH3);
selectMain.appendChild(thirdH3);

//Adicione a classe title na tag h1 criada;
const getH1 = document.querySelector('h1');
getH1.className = 'title';

//Adicione a classe description nas 3 tags h3 criadas;
const getH3 = document.querySelectorAll('h3');
getH3[0].className = 'description';
getH3[1].className = 'description';
getH3[2].className = 'description';

//Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
selectMain.removeChild(selectLeftSection[0]);

//Centralize a section criada no passo 6 (aquela que possui a classe right-content).
selectRightSection[0].setAttribute('style','margin:auto;');

//Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const selectCenterContent = document.getElementsByClassName('center-content');
selectCenterContent[0].setAttribute('style','background-color: green;');

//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
getH3[1].remove();
getH3[2].remove();