// math.random()

let a = Math.random();
console.log(a);


console.log(a * 100);

let v = Math.floor(a * 100);
console.log(v);// without decimal number

//


let btn = document.getElementById('btn');
let container = document.getElementById('container');


btn.addEventListener('click', function () {
    let randomColor = Math.floor(Math.random() * 256);
    let randomColor2 = Math.floor(Math.random() * 256);
    let randomColor3 = Math.floor(Math.random() * 256);
    container.style.backgroundColor = `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`;
});

// array and object

