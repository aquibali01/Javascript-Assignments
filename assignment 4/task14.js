var now = new Date();
var hour = now.getHours();
document.writeln("Current date: "+ now);
now.setHours(hour - 1);
document.writeln("1 hour ago, it was: "+ now);