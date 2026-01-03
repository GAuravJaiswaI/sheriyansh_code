/*                  pure function                 */    

let b = 12;

function a(val){
    console.log(val+2);
}
a(10); // 12
a(10); // 12
a(10); // 12

// pure function ek aisa function
// same input pe hamesha same output dega
//koi side effect nhi hoga


/*                  impure function                 */
let d = 12;
function c(val){
   d= 2+ val;
   console.log(d);
}
c(10);
// same input pe alag alag output dega
// side effect hoga (d variable ka value change ho raha hai)
// isliye ye impure function hai
// side effect se bachne ke liye hume pure function ka use karna chahiye
// pure function ka use karne se humare code ka behaviour predictable hota hai
// aur debugging easy ho jata hai


/*.                     global and local scope                  */

let x = 10; // global scope

function fn(){
    let y = 20; // local scope
}

//console.log(y); 
// 10/// not defined error ayega kyuki y local scope me hai aur hum usse bahar access karne ki koshish kar rahe hai






/*                          closure                            */ // -- // ek closer higher order function  bhi hota hai

// ek function hai jo ek function ko return karta hai but returning function
// apne parent function ka koi ek variables ko access karta hai

function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

outer()(); // 10 // dono brackets lagane se pehle outer function call hoga
// aur uske baad jo inner function return hoga wo call hoga
// aur inner function apne parent function ke variable a ko access kar lega





/*.                           array                       */

// 1. cretion of array two type -

let arr1 = [];
let arr2 = new Array();

//2. how to accewss array elements -

let fruits = ['apple', 'banana', 'grapes', 'mango'];

// access elements using index
console.log(fruits[0]); // apple
console.log(fruits[2]); // grapes



//3. functions on array -
//push -- add element at the end of array
let n = [1,2,3];
n.push('orange');
console.log(n); // [1, 2, 3, 'orange']

//pop -- remove element from the end of array
let l = [1,2,3];
l.pop();
console.log(l); // [1, 2]


//shift -- remove element from the start of array
let e = [1,2,3];
e.shift();
console.log(e); // [2, 3]
// starting se element remove karta hai


//unshift -- add element at the start of array
let f = [1,2,3];
f.unshift(0);
console.log(f); // [0, 1, 2, 3]
// starting me element add karta hai

//indexOf -- return index of element
let g = ['a', 'b', 'c'];
console.log(g.indexOf('b')); // 1
console.log(g.indexOf('d')); // -1
// agar element array me nhi hai to -1 return karta hai


//array destructuring
let h = [1,2,3,4,5];
let [q, , w] = h; // q=1, w=3
console.log(q);
console.log(w);
// 2nd element ko skip kar diya hai


//                              filter, map, reduce                      //



//filter
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter(function(num){
    return num < 5 ;
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]
// filter function ek naya array return karta hai jisme wo sare elements hote hai
// jo condition ko satisfy karte hai
