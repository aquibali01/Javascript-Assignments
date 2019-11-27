var word = "Hyderabad";
var partToReplace = "Hyder";
var wordToReplaceWith = "Islam";
var leftText = word.slice(0,5);
var rightText = word.slice(5);

document.writeln("City: ", word);
document.writeln("After Replacement: " + wordToReplaceWith + rightText);