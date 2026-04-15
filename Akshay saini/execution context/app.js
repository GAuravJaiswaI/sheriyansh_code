var n = 2;


//square = undefined;
// when i assign to squre = undefined then it will give error because we are trying to call a function which is not defined.
// and a when we assign memory to a fucunction it could no t be undefined , it will be a function object and it will be stored in memory and we can call it.

function  square (num){
    var ans = num * num;
    return ans;
}

square2 = square(n);
console.log(square2);

square3 = square(4);
console.log(square3);   


