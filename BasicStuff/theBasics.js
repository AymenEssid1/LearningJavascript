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



///////////String properties///////
let name="aymen   essid";
//name=name.trim(); removes spaces before and after the string
name=name.toUpperCase();
length=name.length;
console.log(name.charAt(1)); //returns the chat in that specific position;
console.log(name.indexOf("E")); //returns the first position of the indicated char
console.log(name.lastIndexOf("E")); //returns the last position of the given char

let phonenb="123-456-789"
phonenb=phonenb.replaceAll("-",","); //well duh it replaces certain chars with others
console.log(phonenb);





////////////////////////////sttring slicing/////////////////////////
let fullname="aymenn essidd";
let firstname;
let lastname;
lastname=fullname.slice(fullname.indexOf(" ")+1);  // slice does not change the variable fullname it creates a new string
firstname=fullname.slice(0,fullname.indexOf(" "));
console.log(lastname);
console.log(firstname);




/////////////////////method chaining//////////////////////////

let name="aymen";
console.log(name.charAt(0).toUpperCase());

//////////////////////////  IF statement  //////////////////
let age=22;
if(age>=18){console.log("life is getting hard from this point on");}
else{console.log("enjoy your childhood while you can ");}  //else if()

let online=false;
if(!online){console.log("you are offline");} //if(online) if u want to check if it's true



/////////////////////////////////Checked property (radio box )///////////////////
document.getElementById("checkboxButton").onclick=function ()
{
    if(document.getElementById("mycheckbox").checked){ //true or false
        console.log("yo this is checked ");
    }
    else{console.log("cmon man check me !!");}


    const radio1=document.getElementById("radio1");
    const radio2=document.getElementById("radio2");
    const radio3=document.getElementById("radio3");
    if(radio1.checked){console.log("you picked 1 yaaay what an achievement ")}
}

//////////////////////////////////////SWITCH CASE /////////////////////
let grade="9";
//switch(){}
switch (grade)
{
    case "A":
        console.log("excellent");
        break;
    case "B":
        console.log("okayy ")
        break;
    default:
        console.log(grade+"?","if u get anything other than A or B u dumb ")

}
////////////////////////////////AND  OR  NOT /////////////////////////////////////
let temp =39;
if(temp>0 && temp<30){console.log("good weather");} //AND
if(temp>60 || temp<-50){console.log("bruh u living on mars ?");} //OR
if(!(temp===420)){console.log("it's not 420");}

/////////////////////////////////WHILE LOOP \\ DO WHILE LOOP//////////////////////////////
let usernamee ;
while(usernamee==""){
    usernamee=window.prompt("enter your name man §§§");

}
console.log("hello bro ",usernamee);
//doo while/////

let password;
do
{
   password =window.prompt("enter pwd !!!!");

}while(password=="")


//////////////////  FOR LOOP//////////////////////
for (let counter=1; counter<=10; counter+=1)
{
    console.log(counter)
    if(counter === 8 ){break;} //can use break to stop the loop
}

for (let i=1 ; i<10; i+=1)
{   if(i===5){continue;}  //continue is used to skip that iteration and continue the loop
    console.log(i);

 
}


/////////////////FUNCTIONS//////////////////////////////////

function sing(name)
{   console.log(name+" this song is 4 U ")
    console.log("never gonna give you up ");
    console.log("never gonna let you down ");
    console.log("never gonna run around and desert you 🎶  ");
}//create the function
let namee="ACE"
sing(namee);//call the function



//example with return
let area;
let width;
let height;
width=window.prompt("enter width");
height=window.prompt("enter height ");
function calculateArea(W,H)
{
    return H*W;
}
console.log(calculateArea(width,height));

///////////////////////TERNARY OPERATOR (aka tHE condition ? expressionIfTrue : exprIfFalse )//////
//so basically it's like an if statement but with a shorter/weird syntax
let adult =checkage(21);
function checkage(age)
{
return age>=18 ? true : false;
//     condition ?  returnif true : return if false
}
console?.log(adult);


//////////LET  VS   VAR/////////////////////////////////

//variable scope = where the variable is accessible
// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// a global variable is declared outside any function
// DO NOT USE VAR WITH GLOBAL VARIABLES AS IT CHANGES BROWSER'S WINDOW PROPERTIES
// we will use let  for now as var is only used on old browsers

///////////////TEMPLATE LITERALS///////////////////////
//template literals = delimited with ( `` aka altG+7 ) instead of "" or ''
//they allow embedded variables and expressions ?
//example since I  didn't understand wtf the last sentence was
let usernameee="aymen";
let items =3;
let total=75;


//console.log("hello",usernameee);
//console.log("you have",items,"items in yo cart");
//console.log("your total is ",total);
//instead you could
let text=`hello ${usernameee}<br>
you have ${items} in your cart<br>
your total is $${total}
`;
document.getElementById("templateliterals").innerHTML=text;
// so basically their only use is when you have to output a long text with variables
//it makes it a bit easier to type 🙃

/////////////////////////format currency////////////////////////////////////////
let mynum = 100;
//options are not necessary
mynum=mynum.toLocaleString("en-US",{style:"currency", currency:"USD"}); //==> $100.00
mynum=mynum.toLocaleString(undefined,{style:"percent"});//==>10,000%
mynum=mynum.toLocaleString(undefined,{style:"unit",unit:"celsius"});//==>100°C
console.log(mynum);
*/
//////////////////////////////////