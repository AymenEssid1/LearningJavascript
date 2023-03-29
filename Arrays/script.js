/////////////////ARRAYS/////////////////////////////////////
//array= think of it as a variable that can store many values
/*
let fruits=["apple","orange","banana",123]; //multiple types allowed

console.log(fruits[3]);
fruits[3]="tomato";//allowed to change the content

fruits.push("lemon");//push adds item to the end of the array ;
fruits.unshift("mango"); //adds elemnt to the beginning
fruits.pop(); //removes last element
fruits.shift(); //removes first item



let length = fruits.length;
let index = fruits.indexOf("apple") //returns -1 if it does not exist 
for (let i = 0; i < length; i++) {
    console.log(fruits[i]);
    
}

for(let fruit of fruits){} //same as python nice
/////////////////////SORTING AN ARRAY////////////////////////
fruits=fruits.sort().reverse(); ///sort in alphabetical reverse
console.log(fruits);*/


///////////////////////2D ARRAYS (aka arrays of arrays)////////////////////////
/*let fruits=["apple","orange","banana"];
let vegetables=["carrots","onion"];
let meats=["eggs","chicken"];
let groceryList =[fruits,vegetables,meats];

groceryList.forEach(element => {
    console.log("\n");
    for (let i = 0; i < element.length; i++) {
        console.log(element[i]);
    }
});

groceryList[0][0]="mangos";
console.log(groceryList[0]);*/
///////////////////////////////////////SPREAD OPERATOR///////////////////
/*
//the spread operator ... unpacks the elements 

let numbers = [1,2,3,4,6,99];
let maximumm =Math.max(numbers) //this will return NaN 
let maximum =Math.max(...numbers) // this will return 99 beacause it unpacks the array 

//note that this operator can also be used on strings it sprads a string

console.log(..."aymen"); //==> a y m e n 

//IMPORTANT : if you want to concatenate 2 arrays 
let otherNumbers=[88,8888,88888];
numbers.push(...otherNumbers);
//console.log(numbers);
//if you do it like this numbers.push(otherNumbers)==>[1,2,3,4,6,99,[88,8888,88888]] */



////////////////////////////////// REST PARAMETERS //////////////////////////////////////////
/*
//a rest parameter allows a function to take an infinite amount of parameters that are stored in a array

function displayName(first, last, ...middle){
    console.log(first,...middle, last);
}

displayName("Smitty", "Jensen", "Werben", "Jager", "Man");

function sum(...nums) //the params when the function is called are packed into the array nums
{
    let total=0;
    for (num of nums){
        total=total+num;
    }
    console.log(total);
}

sum(1,5);*/
/////////////////////////////////array.forEach()/////////////////////////////////////////////
//executes a callback function once on every array element //check callbacks in theBasics.js
// forEach() =  Performs a function for each 
//                       element in an array.
/*
let total = 0;
let cart = [5, 6, 7, 8, 9];
function checkOut(element, index, array){
    
    total += element;
}
cart.forEach(checkOut);
console.log("Your total is: $"+total);



let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);
function capitalize(element, index, array) {   /// these callbacks need atleast one of the 3 param
array[index] = element [0].toUpperCase() + element.substring(1);
}
function print (element) {
console.log(element);
}*/

///////////////////////////array.map()///////////////////////////////////////
//executes a callback function once on every array element AND CREATES A NEW ARRAY
/*
let numbers = [1,2,3,4,5];
let squares = numbers.map(square); // map creates another array to store data
squares.forEach(print);       
//numbers.forEach(square); //by using forEach we usually apply it on the original array
//numbers.forEach(print);

function square (element,index,array){
  // array[index]= Math.pow(element,2);
  return Math.pow(element,2);
}
function print(element){
    console.log(element);
}
*/