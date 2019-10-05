//task 1
document.writeln("Task 1 \n");
var input = "a";
if (typeof(input) == "number"){
    document.writeln("It is a number");
}else if(input == input.toLowerCase()){
    document.writeln("It is a lower case letter \n");   
}else if(input == input.toUpperCase()){
    document.writeln("It is a upper case letter \n");
}
//task 2
document.writeln("Task 2 \n");
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
if(num1>num2){
    document.writeln(num1 + " is larger number \n");
}else if(num1<num2){
    document.writeln(num2 + " is larger number \n");
}else{
    document.writeln(num1  + " & " + num2 + " are equal \n");
}
//task 3
document.writeln("Task 3 \n");
var num = parseInt(prompt("Enter a number"));
if(num>0){
    document.writeln(num + " is a positive number \n");
}else if(num<0){
    document.writeln(num + " is a negative number \n");
}else{
    document.writeln(num + " is zero \n");
}
// task 4
document.writeln("Task 4 \n");
var char = prompt("Enter the character ");
if (char == "a" || char =="e" || char == "i" || char == "o" || char == "u"){
    document.writeln("true \n");
}else{
    document.writeln("false \n");
}
//task 5
document.writeln("Task 5 \n");
var pass = prompt("Enter your password");
if (pass.length === 0  ){
    document.writeln("Please enter your password \n");
}else if (pass == "12345"){
    document.writeln("Correct! The password you entered matches the original password \n");
}else{
    document.writeln("Incorrect password \n");
}
// task 6
document.writeln("Task 6 \n");

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}
//task 7 
document.writeln("Task 7 \n");
var time = parseInt(prompt("Enter the time in 24 hr format e.g :1900 == 7pm"));
if (time >= 0000 && time <1200){
    document.writeln("Good morning!\n");
}else if (time >= 1200 && time <1700){
    document.writeln("Good afternoon!\n");
}else if (time >= 1700 && time <2100){
    document.writeln("Good evening!\n");
}else if (time >= 2100 && time <2359){
    document.writeln("Good night!\n");
}