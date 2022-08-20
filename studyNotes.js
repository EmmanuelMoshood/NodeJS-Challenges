// no html or css between the js script

// console.log("page successfully loaded");




//this is how javascript typically looks
// let name = "Kaleb"
// if(name=="kaleb"){
//     console.log("what is this?")
// }
// function greeting(name){
//     return 'Hello there ${name}, welcome to javascript';
// }
// const greet = greeting("kaleb");



// console.log("log anything to the console")
// console.warn("show warning on the console")
// console.error("show error message on the console")


// var myVar = 'emma';

// if(myVar == 'emma'){
//     let apples = 5;
//     console.log(apples);
// }

// const twitter = "@babe"
// if(twitter <= "@theMosh") {
//     console.log("That is babe's account")
// } else{
//     console.log("That is NOT babe's account")
// }



// SELECTING BY ID IN JS







/************************************NUMBERS*/
//Cast a string to a number
let num1 = "345.6"
let num2 = 32

num1 + num2 = 345.632; // concatination
Number(num1) + num2 = 377.6; //num1 which was a string, has been cast to a number


/************************************ARRAY*/
let list = [ 1, 54, 5, gtt, '3211'] // array can be single type or multiple typed
list.push("new item") = [ 1, 54, 5, gtt, '3211',"new item"] //adds new item to the array
list.pop() = [ 1, 54, 5, gtt, '3211']  //remove last item fron the latest value of list
list.length() = 5    //tells how many elements are in a list
list[1] = 54 //this shows the item on the index number 1 




/************************************LOOP*/
/**********FOR LOOP */
for(let i = 0; i < list.length; i++) {           //this is same as for(let i = 0; i < 5; i=i+1)  
                                                 //i is the current element being processed in the array.
    console.log(list[i])                         //when 1 = 0, console will log 1, then 54 ... '3211')
}

/**********FOR EACH LOOP */
const array1 = ['a', 'b', 'c'];

array1.forEach(i => console.log(i));            // again i is the current element being processed in the array.

// expected output: "a"
// expected output: "b"
// expected output: "c"





/************************************DOM*/
/***SELECT MULTIPLES DOM NODES*/
document.querySelector(".className").innerText //grabs only the first element with 'className'
document.querySelectorAll(".className").innerText //returns a node list with all the elements with 'className'

