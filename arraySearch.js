//type of array search
//1)indexOf()
//2)lastIndexOf()
//3)includes()
//4)find()
//5)findIndex()
//6)findLastIndex()
//7)findLast()


const arr = [154, "test", "baliram", "ypu", "Hello", "My", "yki", "baliram", "yki", "va"]

//1)indexOf()
// console.log(arr.indexOf("test"));//it will return the index of given element

//2)lastIndexOf()
// console.log(arr.lastIndexOf("yki"));//it will check last element of specified value and return that index

//3)includes()
// console.log(arr.includes("test")); //it will check value within array is exist or not, if found it will retun boolean values true or false

//4)find()
// const findValue = arr.find((ele, index, itselef) => {
//     return ele==="baliram"

// }) // it will retun the first ele of specified condition

//5)findIndex()
// console.log(arr.findIndex(function (ele, index, itself) {
//     return ele === "baliram1"
// })) / it will retun the first ele of index where specified condition is true or else return -1

//6)findLastIndex()
// console.log(arr.findLastIndex(function (ele) {
//     return ele === "baliram"
// }))  it will start itreating from the end of the array and retun the first ele of index where specified condition is true or else return -1

//7)findLast()
// console.log(arr.findLast(function (x) {
//     return x === "baliram"
// })) it will start itreating from the end of the array and retun the first ele of index where specified condition is true or false