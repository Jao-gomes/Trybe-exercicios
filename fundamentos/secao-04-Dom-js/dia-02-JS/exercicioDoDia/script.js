const body = document.body;

const createH1 = document.createElement('h1');

createH1.textContent = 'TrybeTrip - Agência de Viagens';

body.appendChild(createH1);

const main = document.createElement('main');

main.classList.add('main-content');

body.appendChild(main);

const section1 = document.createElement('section');

section1.classList.add('center-content');

main.appendChild(section1);

const paragraph =  document.createElement('p');

paragraph.textContent = 'testando.com.br';
section1.appendChild(paragraph);

const section2 = document.createElement('section');

section2.classList.add('left-content');

main.appendChild(section2);

const section3 = document.createElement('section');

section3.classList.add('right-content');

main.appendChild(section3);

const img = document.createElement('img');

img.src = 'https://picsum.photos/200';

img.classList.add('small-image');

section2.appendChild(img);

const list = document.createElement('ul');

section3.appendChild(list);

const arr = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];

for (let index = 0; index < arr.length; index+=1) {
    const item = document.createElement('li');
    item.innerText = arr[index];
    list.appendChild(item);
}

for(let i = 0; i <= 2; i +=1){
    const h3 = document.createElement('h3');
    main.appendChild(h3);
}