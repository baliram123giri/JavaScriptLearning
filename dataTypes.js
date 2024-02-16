//data types

//Primitive and non-primitive(reference object or functions)
//1)String
//2) Number
//3) Boolean
//4) null
//5) undefined
//6) Symbol
//7) Bigint
//8) object

//non-primitive
//array
//object
//date
//it may include the functions

//String 
const nameString = `Baliram` //you can use ''(single qoute) or ""(doubble qoutes) or ``(literal)

//Number
const nameNumber = 454.454 //only one way to assign the number value 

//Boolean
const nameBoolean = true //there only two values true or false to boolean

//null
const nameNull = null //only one way to assign the null value 

//undefined
let nameUndefined = undefined; //if you initialising the variable using let or var, then without assigning the value will be consider as undefined or after assigned (=) the value as undefined

//Symbol
const nameSymbol = Symbol("any") // it internaly worked as constructor 

//bigint
const nameBigInt = BigInt(565656562658268962n)

//Object
const nameObjectPrimitive = {}


//non-primitive datatype

//array
const nameArray = [nameString, nameNumber, nameBoolean, nameNull, nameUndefined, nameSymbol, nameBigInt, nameObjectPrimitive, [], {}] //by using square brackets we assigned the values, and it accepets both dataTypes ex primitive and non-primitive

//Object
const nameObject = {
    pincode: nameArray,
    normal: "My Name",
    isValid: true,
    getName: function () {
        return "Test"
    }
}
//date
const nameDate = new Date() //date is an object to use get the current date and time



