// // task 1
var num1 = 3,
    num2 = 5,
    sum = num1 + num2;
document.writeln("<b>Task 1</b>")
document.writeln("Sum of " +num1 + " and " + num2 + " is " + sum + "\n");
// // task 2
var subs = num1 - num2;
    mul = num1 * num2,
    div = num1 / num2;
    mod = num1 % num2;
document.writeln("<b>Task 2</b>")
document.writeln("Difference of " +num1 + " and " + num2 + " is " + subs );
document.writeln("Product of " +num1 + " and " + num2 + " is " + mul );
document.writeln("Division of " +num1 + " and " + num2 + " is " + div );
document.writeln("Modulus of " +num1 + " and " + num2 + " is " + mod + "\n");
// task 3
document.writeln("<b>Task 3</b>")
var number = "";
document.writeln("Value after variable decleration is: ??");
number = 5;
document.writeln("Initial value : " + number );
number += 1;
document.writeln("Value after increment is :" + number);
number +=7;
document.writeln("Value after addition is: " + number);  
number -=1;
document.writeln("Value after decrement is: " + number);  
number %= 3;
document.writeln("The remainder is: " + number + "\n");  

//task 4

var ticketPrice = 600;
var numberOfTicket = 5;
document.writeln("<b>Task 4</b>\n")
document.writeln("Total cost to buy " + numberOfTicket + " tickets to a movie is " + ticketPrice*numberOfTicket + "PKR\n");

//task 5 
document.writeln("<b>Task 5</b>\n")
number = parseInt(prompt("Enter the number for Table"));
document.writeln("Table of 4\n")
document.writeln(number + "x1=" + number*1 );
document.writeln(number + "x2=" + number*2 );
document.writeln(number + "x3=" + number*3 );
document.writeln(number + "x4=" + number*4 );
document.writeln(number + "x5=" + number*5 );
document.writeln(number + "x6=" + number*6 );
document.writeln(number + "x7=" + number*7 );
document.writeln(number + "x8=" + number*8 );
document.writeln(number + "x9=" + number*9 );
document.writeln(number + "x10=" + number*10 + "\n");


//task 6

document.writeln("<b>Task 6(a&b)</b>\n");

var tempf = "";
var tempc = parseInt(prompt("Enter temperature in Celcius"));
tempf = (tempc * 9/5) + 32;

document.writeln(tempc + "C is " + tempf + "F\n");

document.writeln("<b>Task 6(c&d)</b>\n");
var tempertaurec = "";
var temperaturef = parseInt(prompt("Enter temperature in Fahrenheit"));
temperaturec = (temperaturef -32 ) * 5/9;

document.writeln(temperaturef + "F is " + temperaturec + "C\n");

//task7 

document.writeln("<b>Task 7</b>\n");

document.writeln("<h1>SHOPPING CART</h1>");
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = parseInt(prompt("Enter the quatity of Item 1 "));
var quantityItem2 = parseInt(prompt("Enter the quatity of Item 2 "));
var shipping = 100;
var total = (priceItem1*quantityItem1) + (priceItem2*quantityItem2) + shipping;
document.writeln("Price of item 1 is " + priceItem1);
document.writeln("Quantity of item 1 is " + quantityItem1);
document.writeln("Price of item 2 is " + priceItem2);
document.writeln("Quantity of item 2 is " + quantityItem2);
document.writeln("Shipping Charges is " + shipping + "\n");
document.writeln("Total cost of your order is " + total + "\n");

//task 8

var totalMarks = parseInt(prompt("Enter the total Marks "));
var obtainedMarks = parseInt(prompt("Enter the obtained Marks "));
var percentage = (obtainedMarks/totalMarks)*100;
document.writeln("<b>Task 8</b>\n");
document.writeln("<h1>MARKS SHEET</h1>");
document.writeln("Total Marks: " + totalMarks);
document.writeln("Marks obtained: " + obtainedMarks);
document.writeln("Percentage: " + percentage + "%\n");

//task 9 

var dollars = 10;
var riyal = 25;
var pkr = (dollars * 104.8) + (riyal * 28);
document.writeln("<b>Task 9</b>\n");
document.writeln("<h1>CURRENCY IN PKR</h1>");
document.writeln("Total Currency in PKR:" + pkr + "\n");

//task 10 

var number = 10;
var calulations = number + 5 *10 / 2;
document.writeln("<b>Task 10</b>\n");
document.writeln("The calulation is: " + calulations +"\n");

// task 11 

var currentYear = 2019;
var birthYear = 1992;
var age = currentYear - birthYear;
document.writeln("<b>Task 11</b>\n");
document.writeln("<h1>AGE CALCULATOR</h1>");
document.writeln("Current year:" + currentYear );
document.writeln("Birth year:" + birthYear );
document.writeln("Your Age:" + age + "\n");

// task 12

var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius**2;
document.writeln("<b>Task 12</b>\n");
document.writeln("<h1>THE GEOMETRIZER</h1>");
document.writeln("Radius of a circle:" + radius );
document.writeln("The circumference is:" + circumference );
document.writeln("The area is:" + area + "\n");


// task 13

var favSnack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var snacksPD = 3; // 3 snacks per day
var totalSnacks = (maxAge - currentAge) * (3 * 365);
document.writeln("<b>Task 13</b>\n");
document.writeln("<h1>THE LIFETIME SUPPLY CALCULATOR</h1>");
document.writeln("Favourite Snack:" + favSnack );
document.writeln("Current age:" + currentAge );
document.writeln("Estimated Maximum Age :" + maxAge );
document.writeln("Amount of Snacks per day :" + snacksPD );
document.writeln("You will need " + totalSnacks + " " +favSnack + " to last you until the ripe old age of " + maxAge + "\n");

