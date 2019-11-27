var number = prompt("Enter the number to find the mean of digits ");
var add = 0;
for (var i = 0; i < number.length; i++ ){
     add = add + parseInt(number[i]);
}

document.writeln("Input number: " + number);
document.writeln("Mean of all input dgits: " + add/number.length);
