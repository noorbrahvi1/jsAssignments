////chapter 2;

1.
var username;

2.
var myName;
var myName = "Noorulnisa"


3.
var message; // a

var message = "Hello World"; //b
alert (message) // c

4.
var userName= "Jhone Bar"
alert( userName)
var userAge ="15 years old";
alert (userAge)
var certifi = "Certificate Mobile Application Devlopment"
alert (certifi)


5.
var pizza = "Pizza \r Pizz \r Piz \r Pi \r P "
alert(pizza)

6.
var email;
var email = "example@example.com"
alert("My email address is "+ email)

 7.
var book ;
var book = "A Smarter way to learn Java Script."
alert("I am trying to learn Java Script from the Book "+book)

8.
document.write("Yah! I can write HTML content through JavaScript")

9.
var icons = ("-------")


///chapter 3
var age;
var age= "I am 15 years old";
alert (age)


var visit;
 visit = 1;
for ( var i = 1; i <=14 ; i++){
   visit++

}
alert("You have visited this site " + visit+ " times" )


var birthYear;
var birthYear= 1990;
document.write("My birth year is " + birthYear + "</br>"+" Data type of my decleared variable is number")


var vistName ="Jhon Doe" ; 
var quantity= 5 ;
var productTitle= "T-shirt(s)";
var store;


///Chapter 4:

//1 Declare  3 variables in one statements///
let var10, var20, var30;

//Declare 5 legal and 5 illegal variable names
// legal variablee names;
let name;
let $dollar;
let underscore;
let cancase;
let myVar123;
//Illegal variable names
// let 123name;
// let my_var;
// let false;
// let true;
// let class;
///Displaty rukes for naming variables in your browser
documebt.write("Rules for naming JS variables");
document.write("Variables begin with a letter $ or for example :$myVariables");
 document.write("Variable names are case sensitive");
 document.write("Variable names should not be Javascript keyword")
// ----------- Chapter 5
var num1 = 3;
var num2 = 5;
var numAdd = num1 + num2
document.write("Sum of " +num1 +" and "+ num2 +" is " + numAdd)


//  -- Subtraction
var num1 = 9;
var num2 = 5;
var sub = num1 - num2;
document.write("Subraction of " +num1 +" and "+ num2 +" is " + sub +"</br>")
// -- Multipy
var num1 = 9;
var num2 = 5;
var multi = num1 * num2;
document.write("Multiplication of " +num1 +" and "+ num2 +" is " + multi +"</br>")
// --division
var num1 = 45;
var num2 = 5;
var divnum = num1 / num2;
document.write("Multiplication of " +num1 +" and "+ num2 +" is " + divnum +"</br>")


var value;

document.write("Value after variable declearation is: ??"+"</br>")

var value = 89;

document.write("Initial value is: " + value + "." +"</br>")

document.write(" Value After increamente is: " + value + "." +"</br>")
value = value +7

document.write("Value after addition is: " + value + "." +"</br>")

document.write("Value after decrement is: " + value + "." +"</br>")
var remainder= value % 3
document.write("The remainder is: " + remainder + "." +"</br>")
var cost = 600;
var buy = cost * 5;
document.write("Total cost to buy " + 5 + " tickets to a movie is" +buy+"PKR")
var table0f =  4;
for (var i= 1; i<=10; i++){
   
document.write(table0f + " X " + i + " = "+ table0f*i+"</br>")
}
var celsi = 34
var fahren= (celsi* 9 /5)+34
document.write(celsi+" <sup>0</sup>C "+" is "+ fahren +" <sup>0</sup>F"+"</br>")

var fahren= 98
var celsi =(fahren-32)* 5/9
document.write(fahren+" <sup>0</sup>F "+" is "+celsi  +" <sup>0</sup>C")