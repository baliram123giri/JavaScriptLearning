//operators types
//1) Airthmetic Operators
//2) Assignment Operators
//3) Logical Operators
//4) type Operators
//5) Bitwise Operators
//6) Comparision Operators
//7) Ternary Operators
//8) String Operators

//Airthmetic Operators
//to perform the operation on the numbers or string that called as Airthmetic operators
let x = 15
let y = 15
console.log(x + y)//25 //addition
console.log(x - y)//-5 //substraction
console.log(x * y)//150 //multiplication
console.log(x / y)//0.6 //Division
console.log(x % y)//10 //module
// console.log(++x)//11 //Pre Increament
// console.log(--y)//14 //Pre Decreament
// y++
// console.log(y)//16 //Post Decreament
// console.log(y)


//2) Assignment Operators
//to assign the values to the variables that called as Assignment operators
let x1 = 10
x += x1 //addition assignment operators 10 + 10 = 20

console.log(x, "line 31")//20

x -= x1 //Substraction assignment 20 - 10 = 10
console.log(x, "line 35")//10

x *= x1 //Substraction assignment 10 * 10 = 100
console.log(x, "line 38")//100

// let test = 100
// test **= 10

// //Substraction assignment 100 * 100 * 1000 = 100000
// console.log(test, "line 38")//100000

x /= x1 //Substraction assignment 100/ 10 = 10
console.log(x, "line 47")//10

x %= x1 //Substraction assignment 10%10 = 0
console.log(x, "line 50")//0

// Logical Operators
console.log(x || y)//15 //or or 
console.log(x && y) //and and
console.log(!x) // not 

const name = "prachi";
const nameMaivish = "maivish"
const nameanirudha = "anirudha";
const nameKrushna = "krushna";
const aniketShelke = "ashelke"
const namedeepak = "deepak";
const nameakshay = "Akshay"

// type operator
//1.typeof
//the typeof oprator can return one data type like boolean,string,number and undefined
//not return the object for to the function
function anil() {
  return "hello"
}

//console.log(typeof anil);  //yes its showing function

//instanceof


const testFunVar = { name: "Baliram" } //instaceof we use to check the object type is exist or not base on the prototypes

// console.log(testFunVar instanceof Object, "instanceof")

// Comparision Operators
const test1 = 10
const test2 = "101"

// console.log(test1 !== test2, "Comparision")

// Ternary Operators

// console.log(test2 ? "Baliram" : "Sachin")

// String Operators
console.log("String Operators", test1 > test2)