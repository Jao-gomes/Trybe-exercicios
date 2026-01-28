// Acesse o elemento where-are-you.
// Acesse parent a partir de where-are-you e adicione uma color a ele.
// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
// Acesse o first-child a partir de parent.
// Acesse o first-child a partir de where-are-you.
// Acesse o texto Attention! a partir de where-are-you.
// Acesse o third-child a partir de where-are-you.
// Acesse o third-child a partir de parent.

console.log(document.querySelector('#parent-of-parent #parent #where-are-you'));

console.log(document.querySelector('#parent-of-parent #parent #where-are-you').nextElementSibling);

console.log(document.querySelector('#parent-of-parent #parent #where-are-you').firstElementChild);

const text = document.getElementById('attention');


text.style.color = 'red';

const sectionText = document.querySelector('#parent-of-parent #parent #where-are-you').firstElementChild;

sectionText.textContent = "eu amo a minha namorada";


console.log(document.querySelector("#parent").firstElementChild);

console.log(document.querySelector("#where-are-you").previousElementSibling);

console.log(document.querySelector("#where-are-you").nextElementSibling);

console.log(document.querySelector("#where-are-you").nextElementSibling.nextElementSibling);

console.log(document.querySelector("#parent #third-child"));


