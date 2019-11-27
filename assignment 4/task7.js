var sent = "The quick brown fox jumps over the lazy dog";
var lowerSent = sent.toLowerCase()
var wordToFind = "the";
var wordIndex = -1;
var count = 0;

for ( var i = 0; i < lowerSent.length; i++){
    wordIndex = lowerSent.indexOf(wordToFind, wordIndex+1);
    if (wordIndex >=0){
        count++;
    }
    else{
        break;
    }
}
document.writeln("Text: ", sent)
document.writeln("There are " + count + " occurence(s) of word "+ wordToFind.toLowerCase() );
