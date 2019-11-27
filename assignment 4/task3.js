var password = prompt("Enter the password")
function verifyPassword(){
    var condition = []
    var scond = ["8 character long:", "starts with non numeric:", "contain numbers:", "contain alphabet:"]
    //length
    if(password.length > 7 ){
        condition[0] = true;
    }
    // starts with a char and contains alphabet
    if (parseInt(password.charAt(0))){
        condition[1] = false;
        condition[3] = true;
    }else{
        condition[1] = true;
    }
    // contains number
    for (var i = 1; i < password.length; i++){
        if (parseInt(password.charAt(i))){
            condition[2] = true;
            break;
        }
        else{
            condition[2] = false;
        }
    }
    
    for (var j = 0;j<condition.length;j++){
        if (condition[j]){
            document.writeln(scond[j] + " Condition matched")
        }else{
            document.writeln(scond[j] + " Condition not matched")
            document.writeln("One of the condition is not matched, Please enter a valid password")
            break;
        }
    }
}
verifyPassword(password);