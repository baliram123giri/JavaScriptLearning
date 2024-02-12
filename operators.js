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
let x = 10
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