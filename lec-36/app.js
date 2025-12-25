let balence = 1000;
// let amt = +prompt(" enate amount ");

let count = 0;

while (balence >0 && count <3){
    let withdraw = +prompt(" enate amount 1");

    count++;

   if(withdraw <= balence) balence -=withdraw;

   
}


// let a= +prompt("enter a no");
// let b=20;
//  console.log(a+b);