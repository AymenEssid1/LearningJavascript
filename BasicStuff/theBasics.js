console.log("greetings noob");


//window.alert("this is used for a popup window");
/* comment


// VARIABLES
// 2 steps to create them:
//1. Declaration (var,let,const)   best is let
//2. Assignment (= assignment operator)

let age;
age = 22;           //let age=33;

let name = "aymen";  //let name ='aymen' same shit

let student = true  //boolean

age = age + 1;


console.log("hello", name);
console.log('you are: ' + age); // single quotes and + instead of ,  are accepted
console.log(student);


document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "you are " + age + " years old";

/////////////////arithmetics expressions/////////////////

let students = 20;

students = (students + 1) / 2; // the mod is %
students += 1;  //same as s=s+1
students *= 2; //s=s*2
console.log(students);


////////ACCEPTING USER INPUT ////////////////
//there are 2 methods :
//the easy clap way with window prompt

let username = window.prompt("what is your name  ?");
console.log(username);


// or using HTML TEXT BOX
document.getElementById("mybutton").onclick = function () {
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "hello" + username;
}


///////////TYPE CONVERSION///////////////////////////////
//change the type of a value to another (strings ,numbers ,booleans);

let age = window.prompt("how old are you ?");
console.log(typeof age ); //check the typeof a variable
age = Number(age ); //convert string to number
Y=String(3.14);//convert number to string
console.log(typeof age );
age +=1;
console.log("happy bday you are now ",age,"years old ");

z=Boolean("");//this returns false when you apply typeof
z=Boolean("aaaaa");//this returns true when you apply typeof
//this could be useful when you want to check if the user  typed smth or not



////////////////////////////CONST///////////////////////////////////////
//a const is variable that cannot be changed (well  duh dummy)

const PI=3.14159; // const instead of let !!  should be named in caps for good practice
let radius;
let circumference;
radius = window.prompt("enter the radius ");
radius= Number(radius);
circumference=2*PI*radius;
console.log("the cirumference is:",circumference);


///////////////////MATH/////////////////////////////////////
let x = 3.1;
let y = 5;
let w = 77;
x = Math.round(x); //round like maths
x =Math.floor(x);  //round down
x = Math.ceil(x);    //round up
x =Math.pow(x,2);     //cmon bruh its power
let maximum;
maximum=Math.max(x,y,w) // picks the maximum
console.log(x);
*/


///////////String properties///////
let name="aymen   essid";
//name=name.trim(); removes spaces before and after the string
name=name.toUpperCase();
length=name.length;
console.log(name.charAt(1)); //returns the chat in that specific position;
console.log(name.indexOf("E")); //returns the first position of the indicated char
console.log(name.lastIndexOf("E")); //returns the last position of the given char