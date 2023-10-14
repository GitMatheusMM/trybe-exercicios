// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// window.onload = () => {
//  hrefLink.addEventListener('click', (event) => {
//   event.preventDefault();
//  });
// }

inputText.addEventListener('keypress', (event) => {
  const keyPressed = event.key;

  if(keyPressed !== 'a'){
    event.preventDefault();
  }
});