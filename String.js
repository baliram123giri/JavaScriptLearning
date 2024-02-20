//types of string methods
//1) length
//2) toLowerCase()
//3) indexOf()
//4) subStr()

//5) trim()
//6) toUpperCase()
//7) replace()
//8) repeat()
//9) split()
//10) charAt()
//11) replaceAll()
//12) concat()
//13) trimStart()
//14) trimEnd()
//15) charCodeAt()
//16) slice()
//17) padStart()
//18) padEnd()
//19) at()
//20) substring()

const stringTets = "all string methods produces a new string without altering the original string. All"

// console.log(stringTets.length) //it will return the length of charcters

// console.log(stringTets.toLowerCase()); //it will be convert all char into smallcase

// console.log(stringTets.indexOf("s")); //if given input values founf in string it will return index of that perticular value , if not it will return -1

// console.log(stringTets.substr(3, 10)); // it will return a value within  given range

// console.log(stringTets.trim()); //it will romove the both spaces from start and end side

// console.log(stringTets.replace(/All/ig, "Baliram"));

//contcat
// console.log(stringTets.concat([" Baliram", " TEST"]))

//trimStart
// console.log(stringTets.trimStart());//removed the spaces form starting

//trimEnd
// console.log(stringTets.trimEnd());//removed the spaces form end

//charCodeAt
// console.log(stringTets.charCodeAt(1));// it will return char code (ASCII)


//slice
// console.log(stringTets.slice(10,15));//it will take two arguments first for start and second will for end
// console.log(stringTets.length)
// console.log(stringTets.padStart(100, "baliram"));


//at
// console.log(stringTets.at(0))//it will return char of that index

//substring
// console.log(stringTets.substring(3, 10)) //it will work as subStr

//split
// console.log(stringTets.split(" "));//split will return new array of string


//search methods
//1) match
//2) matchAll
//3) indexOf
//4) lastIndexOf
//5) search
//6) includes
//7) startWith
//8) endWith

//match
// document.writeln(stringTets.match("Baliram")) //if match it will return a new matches string, if not it will retrun null value

//matchAll
// document.write(stringTets.matchAll("all")) //it will always retrun regex object weathere values matches or not, we have to be creare array base on the object regex by using Array.form(iterater)

//lastIndexOf
// console.log(stringTets.lastIndexOf("All"))// it will return last index number

//stringSearch
// console.log(stringTets.search("methods")) //it also return the index number

//stringIncludes
// console.log(stringTets.includes("balir")) //it will return true or false

//stringStartWith
// console.log(stringTets.startsWith("methods", 11))/it will return true or false

//stringEndWith
// console.log(stringTets.endsWith("string", 10)) it will return true or false