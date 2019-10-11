// //task 1 
// document.writeln("task 1 \n ");
// var city = prompt("Enter the name of city");
// if (city == "karachi"){
//     document.writeln("Welcome to Karachi \n");
// }
// //task 2

// document.writeln("task 2 \n");
// var gender = prompt("Enter your gender");
// if (gender == "male"){
//     document.writeln("Good Morning Sir \n");
// }else if(gender == "female"){
//     document.writeln("Good Morning Ma'am \n");
// }
// //task 3 
// document.writeln("task 3 \n");
// var trafficLight = prompt("Enter the color of traffic light");
// if (trafficLight == "Red"){
//     document.writeln("Must Stop \n");
// }else if(trafficLight == "Yellow"){
//     document.writeln("Ready to move \n");
// }else {
//     document.writeln("Move now \n ");
// }
// //task 4 
// document.writeln("task 4 \n");
// var fuel = prompt("Enter The Current fuel in Liters");
// if (fuel < 0.25){
//     document.writeln("Please refill the fuel in the Car \n");
// }
// //task 5 
// document.writeln("task 5 \n");
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// //task 6

// document.writeln("task 6 \n");
// var totalMarks = parseInt(prompt("Enter the total marks of 3 subjects"));
// var obtainedMarks = parseInt(prompt("Enter the obtained marks of 3 subjects"));
// var percentage = (obtainedMarks/totalMarks)*100;
// if (percentage >= 80){
//     var grade = "A=one";
//     var remarks = "Excellent";
// }else if (percentage >= 70){
//     var grade = "A";
//     var remarks = "Good";
// }else if (percentage >= 60){
//     var grade = "B";
//     var remarks = "You need to improve";
// }else{
//     var grade = "Fail";
//     var remarks = "Sorry";
// }

// document.writeln("<h1>Marks Sheet</h1> \n");
// document.writeln("Total Marks: ", totalMarks);
// document.writeln("Marks obtained: ", obtainedMarks);
// document.writeln("Percentage: ", percentage);
// document.writeln("Grade: ", grade);
// document.writeln("Remarks: ", remarks);

// task 7 

document.writeln("task 7 \n");

var secNum = 2;
var guess = parseInt(prompt("Enter the guess between 1 to 10"));
if(guess == secNum){
    document.writeln("Bingo! Correct answer \n");
}else if (guess == (secNum + 1)){
    document.writeln("Close enough to the correct answer \n");
}else{
    document.writeln("Sorry! wrong answer \n");
}

// task 8 

document.writeln("task 8 \n");

var number =parseInt(prompt("Enter the number to check if it is divisible by 3"));
if (number % 3 == 0){
    document.writeln(number + " is divisible by 3 \n");
}else{
    document.writeln(number + " is not divisible by 3 \n");
}

// task 9 

document.writeln("task 9 \n");

var numCheck = parseInt(prompt("Enter the number to check if it is odd or even"));
if (numCheck % 2 == 0){
    document.writeln(numCheck + " is an even number \n");
}else{
    document.writeln(numCheck + " is an odd number \n");
}

// task 10

document.writeln("task 10 \n");
var temp = parseInt(prompt("Enter the Temperature "));
if (temp >= 40){
    document.writeln("It is too hot outside. \n");
}else if (temp >= 30){
    document.writeln("The Weather today is Normal. \n");
}else if (temp >= 20){
    document.writeln("Today’s Weather is cool. \n");
}else{
    document.writeln("OMG! Today’s weather is so Cool. \n");
}

// task 11

document.writeln("task 11 \n");
var num1 = parseInt(prompt("Enter the First Number "));
var num2 = parseInt(prompt("Enter the Second Number "));
var operation = prompt("Enter the operation +, - , * , /");
if (operation == "+"){
    var result = num1 + num2;
    document.writeln("The addition of " +num1 + " and " + num2 + " results " +  result + "\n");
}else if (operation == "-"){
    var result = num1 - num2;
    document.writeln("The substraction of " +num1 + " and " + num2 + " results " +  result + "\n");
}else if (operation == "*"){
    var result = num1 * num2;
    document.writeln("The multiplication of " +num1 + " and " + num2 + " results " +  result + "\n");
}else if (operation == "/") {
    var result = num1 / num2;
    document.writeln("The division of " +num1 + " and " + num2 + " results " +  result + "\n");
}

