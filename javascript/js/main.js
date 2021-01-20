//alert('hello')
/*
asfvg fs sadfv 
*/

let text = "my text"; // string
let x = 10; // number
let b = true; // boolean 
let c; // undefined
// NaN - not a number ""

 // ``
let myBigInt =  123456789111111111111n; // BigInt

let myArray = []; // array
let myObject = {}; // object

console.log("Hello Vladimir");

// types
console.log("text: ", typeof text)
console.log("x: ", typeof x)
console.log("b: ", typeof b)
console.log("c: ", typeof c)
console.log("myBigInt: ", typeof myBigInt)
console.log("myArray: ", typeof myArray)
console.log("myObject: ", typeof myObject)


text = 100;
console.log("text: ", typeof text)
""
''
let total = `total: ${ 1 + 1 + x } (!) 
this: ${ 1 + 1 + x } !!!!`

total = "total: ${ 1 + 1 + x } (!) this: ${ 1 + 1 + x } !!!!"

debug(total);

// 
let x1 = "10aaaa"
let result = 100 + Number(x1)

debug(result);

// 
console.log( Number(true) ); // 1
console.log( Number(false) ); // 0

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

// =, >, <, !=, ==,  ** (stepen), +, *, -, /  

//if (x == 11){
if (x >= 5){  // (true)
    // logic
    console.log("total: " + (x ** 2));
    console.log("total (umn): " + (x * 2));

} else {
    console.log("numbers are NOT equal");
}
 
// && -> and -> и:  
// true = true && true
// false = true && true && false
// 
// ||  -> or -> или: 
// true = false || false || true 
// false = false && false

// if (x >= 5 && x <= 20){  // (true)
if (x >= 5){
    // logic
    console.log("total: " + (x ** 2));
    console.log("total (umn): " + (x * 2));

} else {
    console.log("numbers are NOT equal");
}

//
/*
if (x >= 5){
    // logic
    console.log("total: " + (x ** 2));
    console.log("total (umn): " + (x * 2));
} else if (true && true || false) {} 

else {
    console.log("numbers are NOT equal");
} */


/* */
// increment ++
// decrement --
for (let index = 0; index < 10; index++) 
{
    console.log("index = ", index);    
}

// 1 -> 0
// 2 -> 1
// 3 -> 2
// 4 -> 3

let cars = ["audi", "bmw", "citroen"]; // item 1 = index 0
let months = ['january', 'february']


for (let index = 0; index <= cars.length - 1; index++) 
{
    console.log("(array) car (" + index + ") = ", cars[index] );    
}

cars.forEach((element, index, arr) => {
    console.log("(array forEach) car (" + index + ") = ", element, arr[2]);
});
/*
cars.forEach(element => {
    console.log("(array forEach) car (" + index + ") = ", element);
});
*/

function debug(msg){
    let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let monthNr = ["01", "02", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    let date = new Date();
    let curDateTime = `${ date.getDate() }.${ monthNr[date.getMonth()] }.${ date.getFullYear() }`
    //[${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }]
    console.log(`[1] debug: ${ msg } on time -> ${ curDateTime }`);
}

function add(x, y){
    // logic
    console.log(`[1] result: ${ x + y}`);
}

add(1, 5);
add(10, 50);
add(11, 51);
add(15, 55);
add(13, 53);


function add2(x, y){
    // logic
    console.log(`[2] result: ${ x + y}`);

    return x + y
}

let a1 = add2(1, 5);
let a2 = add2(10, 50);
let a3 = add2(11, 51);
let a4 = add2(12, 52);
console.log(`a1 = ${ a1 }`);
console.log(`a2 = ${ a2 }`);
console.log(`a3 = ${ a3 }`);
console.log(`a4 = ${ a4 }`);