var deciNum = Number(prompt("Enter the decimal Number "));
var deciPlaces = Number(prompt("Enter the decimal places to round off"));

document.writeln("The decimal number is: ", deciNum);
document.writeln("The decimal places want: ", deciPlaces)
document.writeln("The rounded number is: ", deciNum.toFixed(deciPlaces));
