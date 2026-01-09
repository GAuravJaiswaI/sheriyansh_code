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

/*given an arry of bumbers , use filter() to create a new array where each number is even*/

arr = [1,2,3,4,5];

let evenarr = arr.filter(function(val){
    return val%2 ===0;
});
console.log(evenarr);


/* use reduce to find the total salary from an array of numbers [1000, 2000, 3000]*/
let salary = [1000, 2000, 3000];
let total = salary.reduce(function(acc, val){
    return acc + val;   
}, 0);
console.log(total);


/* create an array of anmes and use some() and  every() to test condition e.g. - all names longer then 3 characters*/
let names = ["John", "Jane", "Jim", "Jill"];

let allLongerThan3 = names.some(function(val){// if any one is true then return true
    return val.length > 3;
});
console.log(allLongerThan3);

let someLongerThan3 = names.every(function(val){// if all are true then return true
    return val.length > 3;
});
console.log(someLongerThan3);


/* create an object user and test the behaviour of the object . freeze() and object.seal()by adding /changing keys */

let user = {
    name: "John",
    age: 30,
    city: "New York"
};
Object.freeze(user);// all the keys are frozen and cannot be changed
user.name = "Jane";

// object.seal()   // all the keys are sealed and cannot be changed but can be added
// object.seal() is more restrictive than object.freeze()



/* create nested object (user -> address -> city ) and access the city name inside it */
let user3 = {
    name: "John",
    age: 30,
    address: {
        city:{
            name: "New York",
        }
    }
};
//object destructuring - let {city} = user.address; // city is a variable and user.address is an object
let {city} = user3.address;// city is a variable and user.address is an object
console.log(city.name);