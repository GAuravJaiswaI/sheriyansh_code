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