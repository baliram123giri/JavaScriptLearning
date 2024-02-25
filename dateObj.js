//date is an object where it will return the current date and time from the browser
// var date = new Date("2024", "01", "29", "26", "15", "70")
var date = new Date()

// console.log(date.getFullYear()) //it will return the date year

// console.log(date.getTime());//it will return the current time in timeStamp format, there is limt of numbers max 12

// console.log(date.getDate()); // it will return from given date as current date

// console.log(date.getMinutes()); //it will return current minutes from given date obj

// console.log(date.getDay()); // it will return day in numbers and days will in a range of 0-6, it will count from sunday
// date.setDate(2)
// date.setFullYear(2025)
// date.setMonth(7)
// date.setMinutes(55)
// date.setHours(10)
// date.setSeconds(44)
// date.setMilliseconds(45)


let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let miliseconds = document.getElementById("miliseconds")

setInterval(() => {
    const newDate = new Date()
    const hoursD = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours()
    hours.innerHTML = hoursD
    const minutesD = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes()
    minutes.innerHTML = minutesD
    const secondsD = newDate.getSeconds() < 10 ? `0${newDate.getSeconds()}` : newDate.getSeconds()
    seconds.innerHTML = secondsD
    const milisecondsD = newDate.getMilliseconds() < 10 ? `0${newDate.getMilliseconds()}` : newDate.getMilliseconds()
    miliseconds.innerHTML = milisecondsD
}, 1000)