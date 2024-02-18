//what are the loops?
//bascially until and unless given condition satisfied or true,  it will itreate over the element 

//type of loops
//1) for
//2) forEach
//3) for in
//4  for of
//5) while
//6) do while

//for loop
// for (let i = 5; i < 10; i++) {
//     console.log(i, "first")
// }

//forEach
//this loop itreate over the array 
const newArr = [14, "5", { name: "trest" }, "Baliram", true, null, undefined, Symbol("test"), BigInt(45455444545), [], new Date()]

///map method
// const mapTest = newArr.map((ele, index) => {
//     if (ele === 14) {
//         return "yes the value is 14"
//     } else {
//         return ele
//     }
// })

// console.log(mapTest)
// newArr.forEach(function (ele) {

//     console.log(arrayData)

// })
const nameObj = { id: 1, name: "Baliram", pincode: 75254 }
const test = "test"

// for in
// for (key in nameObj) {
//     console.log(nameObj[key])
// }

// for (key of newArr) {
//     console.log(key)
// }

//while loop
// let i = 1
// while (i < 10) {

//     console.log(i)
//     i++;
// }

//do while
// let i = 0
// do {
//     i++
//     console.log(i)
// }
// while (i < 10)