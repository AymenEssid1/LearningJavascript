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
/////////////////////array.filter()/////////////////////
//creates a new array with the filtred elements of the original array
/*
let ages =[10,18,21,8,99]
let adults = ages.filter(checkages);
adults.forEach(print);
function checkages(element){
    return element>=18 ;

}
function print(element){
    console.log(element);
}*/
/////////////////////////////////////array.reduce()/////////////////////////////////
//array.reduce() = reduces an array to a single value
/*let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce (checkOut);
console.log(`The total is: $${total}`);
function checkOut (total, element){
return total + element;
}*/
//////////////////////////////////////array.sort()///////////////////
/* let grades = [100, 50, 90, 60, 80, 70];
grades = grades.sort (descendingSort);
grades.forEach(print);
function descendingSort(x, y){
return y - x;
}
function print (element) {
console.log(element);
} */
/*
This code defines an array of grades with six elements, 
then applies a sort function to the array. 
It uses the descendingSort function as the sorting criterion. 
The descendingSort function returns a value that is either positive, negative or zero,
based on the relative sizes of x and y. If y is bigger than x, then y - x will be positive.
This will cause y to move up the order, relative to x. 
Thus, the sort function will reorder the array of grades such that the highest grade is first in the array and the lowest grade is last.
*/
