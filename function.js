//what are the fuction ?
// function are reusebale bits of code 
// function is use to write reuseble complex  logics

//how to decleare the function?
//function's name treat as variables


//type of function
//there are 4 types
//1) name function or standard function
//2) anonyms function
//3) fat arrow function
//4) IIFE(immidiate Invoke Function Expression)



// this is call invoked //we can invoke many times, there is no limit
// name function or standard function
function test() { // this is a decleartion or initializtion
    console.log("star")
    //always fuction return somting while invoked the functions 
    // by defualt it returns undefined value
    // if we write the return keyword it will execute the before return values
    // after return keyword function will stop executing the codes
}



//ananymos function or function expression
const ananymosFun = function (name) { //we can assign function to the variable
    return name
}

// console.log(ananymosFun("ananymos function"))


//fat arrow function or lamda function or Arrow function expression
const fatArrowFun = (a, b) => {
    return a + b
}

// console.log(fatArrowFun(10, 787))

// IIFE(immidiate Invoke Function Expression)
(function (a, b) {
    return a + b
}(4, 5))