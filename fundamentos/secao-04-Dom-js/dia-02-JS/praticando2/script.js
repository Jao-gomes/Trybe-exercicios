// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse terceiroFilho.

console.log(document.querySelector('#elementoOndeVoceEsta'));


let newSection = document.createElement('section');

newSection.innerText = 'Nova seção';

newSection.id = 'segundoFilho';

console.log(newSection);

// document.body.appendChild(newSection);


let mainSection = document.querySelector("#paiDoPai #pai");

console.log(mainSection);

mainSection.appendChild(newSection);

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let newSectionFilho = document.createElement("section");

newSectionFilho.id = "FilhoBomENovo";

elementoOndeVoceEsta.appendChild(newSectionFilho);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let newParagraph = document.createElement('p');

newParagraph.id = "pFilho";

primeiroFilhoDoFilho.appendChild(newParagraph);

console.log(document.querySelector('#pFilho').parentElement.parentElement.nextElementSibling);

