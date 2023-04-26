// Descripton: This script tests various numeric
//             conversion techniques 
// Author: Jordan Q. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";


// Using parseInt()
var a = " 101.1 "; 
a = parseInt(a); // a is now 101 as an integer

var b = "55"; 
b = parseInt(b); // b is now 55 as an integer

var c = "402 Stevens"; 
c = parseInt(c); // c is now 402 as an integer since parseInt() stops parsing at the first non-numeric character

var d = "Number 5 "; 
d = parseInt(d); // d is now NaN (Not a Number) since the first character cannot be parsed as a number


// Using parseFloat()
var a = " 101.1 "; 
a = parseFloat(a); // a is now 101.1 as a number

var b = "55"; 
b = parseFloat(b); // b is now 55 as a number

var c = "402 Stevens"; 
c = parseFloat(c); // c is now NaN (Not a Number) since the string cannot be parsed as a number

var d = "Number 5 "; 
d = parseFloat(d); // d is now NaN (Not a Number) since the string cannot be parsed as a number

// Using Number()
var a = " 101.1 "; 
a = Number(a); // a is now 101.1 as a number

var b = "55"; 
b = Number(b); // b is now 55 as a number

var c = "402 Stevens"; 
c = Number(c); // c is now NaN (Not a Number) since the string cannot be converted to a number

var d = "Number 5 "; 
d = Number(d); // d is now NaN (Not a Number) since the string cannot be converted to a number

// Using unary + operator
var a = " 101.1 "; 
a = +a; // a is now 101.1 as a number

var b = "55"; 
b = +b; // b is now 55 as a number

var c = "402 Stevens"; 
c = +c; // c is now NaN (Not a Number) since the string cannot be converted to a number

var d = "Number 5 "; 
d = +d; // d is now NaN (Not a Number) since the string cannot be converted to a number

