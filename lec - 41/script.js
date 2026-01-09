//write a higher order function runTwice which takes a function as an argument and runs it twice

function runTwice(func){
    func();
    func();
}

runTwice(function(){
    console.log("Hello World");
})

/* create apure function that always returns the same output for the given input, and one impure functionusing a global variable */

// pure function
function pure(a,b){
    console.log(a+b);
}
pure(1,2);
pure(1,2);

// impure function
let global = 10;
function impure(a,b){
    global++;
    console.log(global);
}
impure(1,2);
impure(1,2);


// write a function that uses object destructuring inside parameters to exact print name and age

function print({name , age}){

    console.log(name, age);
}
print({name: "John", age: 30});

/* Demonstrate the difference between normal function and arrow function  when  used as methods (this issue)*/
// this keyword 
// this ek aisa keyword hai jo ki dynamic hai eski value ,, badal jaati hai bar bar

console.log(this);
//output: {} // window object

function fn(){
    console.log(this);
}
fn();
//output: {} // window object

let obj = {
    name: "John",
    age: 30 ,
    fn: function(){ // normal function
        console.log(this); // object itself
    },
    arrowFn: () => { // arrow function
        console.log(this); // window object
    }
     
};
obj.fn();
// output: {name: "John", age: 30, fn: ƒ} // object itself

obj.arrowFn();
// output: {} // window object



/* given an array of number , use map() to create a new array where each number is squared */

arr = [1,2,3,4,5];
let newarr = arr.map(function(val){
    return val * val;
});
console.log(newarr);



