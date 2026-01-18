// Frontentd ki js

/* 1. DOM - Document Object Model */
//4 pillars -
// Selection of an element
// changing HTML
//changing CSS
// event listener

var h = document.getElementById('h1'); // selection of an element
console.log(h);

h.innerHTML = 'dom pdhlo guy'; // changing HTML

h.style.color = 'red'; // changing CSS

h.addEventListener('click', function () { // event listener// when h1 is clicked, then the function will be called and the color of h1 will change to blue
    h.style.color = 'blue';
    h.innerHTML = 'dom pdho bhai';
});

var b1 = document.getElementById('#btn');


b1.addEventListener('click', function () {// event listener// when button is clicked, then the function will be called and the background color of button will change to blue and the text will change to clicked
    b1.style.backgroundColor = 'blue'; // changing CSS
    b1.innerHTML = 'clicked'; // changing HTML
    b1.style.fontSize = '100px'; // changing CSS
});



