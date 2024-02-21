//array methods

//1)length
//2)toString()
//3)at()
//4)join()
//5)pop()
//6)push()
//7)shift()
//8)unShift()
//9)delete()
//10)concat()
//11)copyWithin()
//12)splice()
//13)flat()
//14)slice()
//15)toSpliced()

const arr = [154, "test", "ypu", "Hello", "My", "yki", "baliram", "va"]

//1)length
// console.log(arr.length) //it will check the length of arr

//2)toString()
// console.log(arr.toString())//it will retun comma seperated string values

//3)at()
// console.log(arr.at(1)); //it will retrun the value of give index form array

//4)join()
// console.log(arr.join('')); //it will return the new string without spaces

//5)pop()
// console.log(arr.pop()); it will return removed element

//push()
// console.log(arr.push("Baliram")); //it will return new length of array

//7)shift()
// console.log(arr.shift());it will return removed element

//8)unShift()
// console.log(arr.unshift("TESTIG", "THJM<")); //it will take rest arguments and rturn the new length of array

//9)delete()
// delete arr[1]
// console.log(arr)

//10)concat()
// console.log(arr.concat(["Baliram", "tesfj"]))//it will return new array
// console.log(arr)

//copyWithin()
// console.log(arr.copyWithin(3, 1))

//splice()
// console.log(arr.splice(1, 3, "hello", "baliram")); it will return removed ele in array
// console.log(arr)

//toSpliced()
// console.log(arr.toSpliced(1, 3, "hello", "baliram"));it will return new ele in array
// console.log(arr)

// //slice()
// console.log(arr.slice(0, 3));

//13)flat()
// console.log(arr.flat().flat()) //flat will remove the nested arrays