var age = parseInt(prompt("Enter your age "));

var current = new Date();
var year = current.getFullYear();
document.writeln("Your age is: "+ age); 
document.writeln("Your birth year is: "+ (year-age) );

