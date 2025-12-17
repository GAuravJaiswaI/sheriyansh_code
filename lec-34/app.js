// let pass ;
// let attempt =0;

// while(attempt<3){

//     pass = prompt("enter your pass")

//     if(pass === "12"){
//  console.log("your password is ", pass);
//  break;
//     }
//     else{
//         console.log("wrong password")
//     }
//     attempt++;


// }

// Q - keep asking the no when is it not devide by two

let num = prompt("enter no")
num = Number(num);

while(num % 2 !== 0){
    num = prompt("enter no")
num = Number(num);
}