console.log('hello');
//https://dog.ceo/api/breeds/image/random


const getNewDog = () => {
   fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
   
dogImageDiv.innerHTML = `<img src='${json.message}'
height=300 width=300/>`
})
const dogImageDiv = document.getElementById('dogImage');
const dogButton = document/getElementById('dogButton');
};
dogButton.onclick = () => getNewDog();

