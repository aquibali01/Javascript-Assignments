var date = parseInt(prompt("Enter the date of the month"));
document.writeln("Input date is: " + date)
if (date >0 && date < 16){
    document.writeln("First fifteen days of the month");
}else if(date>15 && date <32){
    document.writeln("Last days of the month");
}else{
    document.writeln("Invalid date");
}
