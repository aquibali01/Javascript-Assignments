var email = "aquibali.92@gmail.com";


function verifyEmail(email){
    var condition = []
    var scond = ["contain @:", "contact chars(no space):", "The @ must have at least 1 char in front: ", "contain dot after @:","atleast 1 char after @:"]
    var atTheRateOf = email.indexOf("@")
    var space = email.indexOf(" ")
    // conatin "@"
    for (var i = 0; i<email.length; i++){
        if (atTheRateOf !== -1){
            condition[0] = true;
        }
    }
    // contact chars(no space)
    for (var j=0; j<email.length; j++){
        if ( space == -1){
            condition[1] = true;
        }
    }
    // The @ must have at least 1 char in front
    if (atTheRateOf !== 0){
        condition[2] = true;
    }
    // contain dot after @ 
    for (k = atTheRateOf; k<email.length; k++){
        if (email[k] == "."){
            condition[3] = true;
        }
    }
    // atleast 1 char after @
    if (email[atTheRateOf + 1] !== " " ){
        condition[4] = true;
    }
    for (var x = 0;x<condition.length;x++){
        if (condition[x]){
            document.writeln(scond[x] + " Condition matched")
        }else{
            document.writeln(scond[x] + " Condition not matched")
            document.writeln("One of the condition is not matched, Please enter a valid password")
            break;
        }
    }
}
verifyEmail(email);
