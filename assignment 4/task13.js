var today = new Date();
var mintoday = today.getTime() / (1000*60);
document.writeln("Current date: "+ today);
document.writeln("Elapsed miliseconds since January, 1 1970: "+ today.getTime());
document.writeln("Elapsed minutes since January, 1 1970: "+ mintoday);
