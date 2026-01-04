// Q1 - write a function say hello js
function sayHello(){
    console.log("Hello JS");
}
sayHello();

// Q2 - create a function add(a, b) which returns sum of a and b

function add(a, b){
    return a+b;
}
console.log(add(3, 5)); // 8

// Q3 - write a function with default parametr name = "Guest " which prints "Hello, name"

function greet(Guest = "Guest"){
    console.log("Hello " + Guest);
}
greet(); // Hello Guest


// Q4 - use rest pareameter to make a function that adds unlimited numbers

// for each loop
function addAll(...nums){               // rest parameter to gather all arguments into an array//
    let sum = 0;
    nums.forEach((val) => {       // iterate through each number// 
        sum += val;             // add to sum//
    });                         
    return sum;
}
console.log(addAll(1, 2, 3, 4, 5,6)); // 21

// for loop
function addAll2(...nums){
    let sum = 0;    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
console.log(addAll2(10, 20, 30)); // 60

// reduce method
function addAll3(...nums){                              // rest parameter to gather all arguments into an array//
    let ans = nums.reduce((acc, val) => acc + val, 0);  // reduce method to sum up all values//
                                        // reduce takes a callback function and an initial value (0 here)// 
                                        // acc is the accumulator that holds the sum, val is the current value being processed//
                                        // the callback function adds acc and val together//
                                        // the result is the final sum//
                                        // we store the result in ans and return it//
    return ans;
}
console.log(addAll3(5, 10, 15, 20)); // 50


// Q5 - create an IIFE that print "I run initially !"


(function(){
    console.log("I run initially !");
})
();


// Q6 - make a nested function where the inner one prints a varible from the outer one

// by the this is called closure

function outerFunction(){
    let outerVar = "I am from outer function";
    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction(); // I am from outer function

// Q7 - create an array of 5 fruits. that add an element to the end of and remove from beginning

let fruits = ["apple", "banana", "mango", "grape", "orange"];
fruits.push("kiwi"); // add to end

console.log(fruits); // ["apple", "banana", "mango", "grape", "orange", "kiwi"]

fruits.shift(); // remove from beginning

console.log(fruits); // ["banana", "mango", "grape", "orange", "kiwi"]


// Q8- create an array ,use forEach to print all elements with their index

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, index) => {// val is the element, index is its position// 
         //
    console.log("Element at index " + index + " is " + val);
});

    
// Q9 - create an object person with keys name , age, city and print each key's value.

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Name: " + person.name); // John // 1st method to access object properties//

for (let key in person){         // 2nd method to access object properties using for...in loop//
console.log(key + ": " + person[key]); // key == index here// and person[key] gives the value// ,,, it is like array notation//
}

// Q 10 -- use setTimeout to print "Hello after 2 seconds" after 2 sec
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds//