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