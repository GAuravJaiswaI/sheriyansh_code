///////////// required ////////////

function abc(a, b, c, d) {
    console.log(a, b, c, d);//
    /* agr aapne parameter banaye nd apne unme argument nhi 
    pass kiye tofir wo value parameter ki undefined ho jayegi */

}
abc();

/////////////// destructuring ////////////

// function abcd (obj){// aise agar call krenge toh pura -- anme: "gaurav", age: 22 -- print 
//  console.log(obj);//
// }//

// function abcd(obj){ // one by one ko access kr paunga 
//     obj.name
//     obj.age
//     console.log(obj);//
// }

function bcd({name, age}){
    console.log(name, age );// esme jo valu chahiye vo le skte ho


}
bcd({name: "gaurav", age: 22})

//////////////// rest ope////////////////

function ab(...val){ /////////////// ese khte hai rest ope  ...val
    console.log(val);
}

ab(1,2,3,4,5);


//////////////// default ope/////////////

function bc(a=0,b=0,c=0){ //  aur yha pr 3 param bne hai to hmne c ki default value 0 de di 

    console.log(a,b,c);
}

bc(1,2);// hmne yha pr sirf 2 argument he bheje 




/*                      argument in js                          */


// //////////////////////.  1. positional  //////////////////////

function a(a,b,c){ ////// c ki value null set ki hai 
    console.log(a,b,c);

}
a(1,2,null);


///////////////////// .  2. spread ope /////////////////////////

function b(a,b,c,d,f){  ///////////  copy vaale arr ko as param , ek - ek param me le liya   
    console.log(a,b,c,d,f);
}

let arr  = [1,2,3,4,5];
b(...arr);/// arr ki saari value ...arr me coppy ho gyi aur iterate nhi krna pda hmko 




/*               immedeate invoke function expression                  */

// esko banate hai private variable banane ke liye ,,,, aise 
(function(){
 let a = 70;
 console.log(a);
})();




/*                      annonymus function                                 */ 

// jiska koi naam na ho


// function(){

// }





/*                      higher order function                           */


// loi function return me ek function return kre 
// ye fir kisi function me argument me fuction pass ki ya jaaye aur argu me liya jaaye to  HOF


function x(){
 return function g(){

 }
}
x();



//////ya fir 

function y(a){

}

y(function(){

});




/*              callback function               */

function y(a){

}

y(function(){

});





/*                      first class function                    */      


//1. kisi bhi variable me ek function likh skte hai

let a = function(){

}

/// 2. ya fir aise bhi like skte hai 

function s(a, b){

}
s(function(){

}, 2);