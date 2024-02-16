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

newArr.forEach(function (divya) {
    console.log(divya)
})