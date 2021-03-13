// tady je místo pro náš program

// 1. JavaScriptem změnit barvu nadpisu.
//document.getElementById('js-main-heading').style.color = '#006400';
document.querySelector('#js-main-heading').style.color = '#FF0000';

// 2. Změna dekorace odstavce. (Poznámka: Zde slouží pro demonstraci, ale obecně je lepší tyto jednoduché změny a úpravy dělat pomocí CSS!)
let paragraphs = document.getElementsByClassName('js-paragraph');
let firstParagraph = paragraphs[0];
// Pomocí následujícího příkazu si mohu vypsat prvek do konzole. Vhodé při ladění programu.
// console.log(paragraph);
firstParagraph.style.fontSize = '40px';
// Pomocí následujícího příkazu si mohu vypsat nastavenou velikost písma.
//console.log(firstParagraph.style.fontSize);
firstParagraph.style.fontStyle = 'normal';
firstParagraph.style.fontWeight = '800';

// 3. Změna obrázku.
let animalImageElement = document.getElementsByTagName('img')[0];
animalImageElement.setAttribute('src', 'kocka.jpg');
animalImageElement.setAttribute('alt', 'Roztomila kocicka');

// 4. Přemístění a otočení čtverečku
let squareElement = document.querySelector('.ctverecek');
document.querySelector('body').insertBefore(squareElement, document.querySelector('#js-main-heading'));
// Pomocí následujícího příkazu přesunu čteveček ještě do paragrafu
//firstParagraph.appendChild(squareElement);
squareElement.style.transform = 'rotate(-180deg)';
